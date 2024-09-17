import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js"; // Use the relative path to import the User model
import { SendVerificationCode } from "../middleware/Email.js"; // Import the email function

// Registration handler
export const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Validate input
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ msg: "Passwords do not match" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate OTP (4-digit) and set expiration (10 minutes from now)
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const verificationCodeExpires = Date.now() + 10 * 60 * 1000; // 10 minutes expiration

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      verificationCode,
      verificationCodeExpires, // Set expiration time
    });

    console.log("Request Body:", req.body);

    await newUser.save();
    SendVerificationCode(newUser.email, verificationCode); // Send OTP via email

    // Return success response
    res.status(201).json({ msg: "User registered successfully", newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Login handler
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Check if user is verified
    if (!user.isVerified) {
      return res
        .status(400)
        .json({ msg: "Email not verified. Please verify your email first." });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return success response with token
    res.status(200).json({
      msg: "Login successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Email verification handler
export const verifyEmail = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res
        .status(400)
        .json({ success: false, message: "Verification code is required" });
    }

    // Find the user by verification code
    const user = await User.findOne({ verificationCode: code });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or Expired Code" });
    }

    // Check if the verification code has expired
    if (user.verificationCodeExpires < Date.now()) {
      // Clear expired verification code and expiration date
      user.verificationCode = null;
      user.verificationCodeExpires = null;
      await user.save();

      return res
        .status(400)
        .json({ success: false, message: "Verification code has expired" });
    }

    // Mark user as verified
    user.isVerified = true;
    user.verificationCode = null; // Clear the code after verification
    user.verificationCodeExpires = null; // Clear expiration time after verification
    await user.save();

    // Respond with success
    res
      .status(200)
      .json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Resend OTP

export const resendOtp = async (req, res) => {
  const { email } = req.body; // Expecting the email in the request body

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Generate a new OTP
    const newVerificationCode = Math.floor(
      1000 + Math.random() * 9000
    ).toString();

    // Update the user's verification code
    user.verificationCode = newVerificationCode;
    await user.save();

    // Send the new OTP via email
    SendVerificationCode(email, newVerificationCode);

    res.status(200).json({
      success: true,
      message: "A new OTP has been sent to your email",
    });
  } catch (error) {
    console.error("Error resending OTP:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
