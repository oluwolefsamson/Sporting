const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mailgun = require("mailgun-js");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Configure Mailgun
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });

const otps = {}; // In-memory storage for OTPs

// Generate and send OTP
app.post("/api/v1/auth/request-otp", async (req, res) => {
  const { email } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString();
  const expires = Date.now() + 15 * 60 * 1000; // 15 minutes validity

  otps[email] = { otp, expires };

  const data = {
    from: `Your App <noreply@${DOMAIN}>`,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}. It is valid for 15 minutes.`,
  };

  try {
    await mg.messages().send(data);
    res.status(200).send({ message: "OTP sent to your email" });
  } catch (error) {
    res.status(500).send({ message: "Failed to send OTP" });
  }
});

// Verify OTP
app.post("/api/v1/auth/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!otps[email]) {
    return res.status(400).send({ message: "OTP not requested or expired" });
  }

  const { otp: storedOtp, expires } = otps[email];

  if (Date.now() > expires) {
    delete otps[email];
    return res.status(400).send({ message: "OTP expired" });
  }

  if (storedOtp !== otp) {
    return res.status(400).send({ message: "Invalid OTP" });
  }

  delete otps[email];
  res.status(200).send({ message: "OTP verified successfully" });
});

// Define other routes
app.use("/api/v1/auth", require("./routes/authRoutes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
