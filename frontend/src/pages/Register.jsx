import React, { useState } from "react";
import axios from "axios"; // Make sure axios is imported
import SignupImg from "../../src/assets/images/reg.png";
import { Link, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { MdEmail, MdPerson } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLockOpen, MdLock } from "react-icons/md";
import Logo from "../assets/images/logo.png";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("Form Data:", formData); // Log formData for debugging

    setLoading(true);
    setError("");

    // Validate password
    if (!isValidPassword(formData.password)) {
      setLoading(false);
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, and a number."
      );
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        `https://sporting.onrender.com/api/v1/auth/register`, // Ensure the backend URL is correct
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Backend Response:", response.data); // Log backend response for debugging

      if (response.status === 201) {
        alert("User created successfully.");
        navigate("/otp");
      }
    } catch (error) {
      console.error("Error during registration: ", error);
      if (error.response) {
        if (error.response.status === 409) {
          navigate("/login");
        } else if (error.response.status === 400) {
          alert("User already exists. Please log in");
        } else {
          alert("An error occurred. Please try again later.");
        }
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 px-5 py-6 lg:py-8 h-screen flex items-center">
      <div className="max-w-[1170px] px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-6 py-6 lg:py-8 lg:pr-16">
            <img src={Logo} alt="Logo" className="w-[150px] hidden lg:block" />
            <h3 className="text-gray-900 text-[36px] lg:text-[42px] leading-9 font-bold text-center lg:text-left">
              Sign Up
            </h3>
            <div className="text-[14px] lg:text-[16px] leading-6 lg:leading-7 text-center lg:text-left">
              <span>
                If you already have an account, you can{" "}
                <Link to="/login">
                  <span className="text-blue-600">Login here</span>
                </Link>
              </span>
            </div>
            <form onSubmit={submitHandler} className="w-full max-w-md">
              <div className="mb-4 lg:mb-5 relative">
                <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-2 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[14px] lg:text-[16px] leading-6 lg:leading-7 text-headingColor cursor-pointer"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="mb-4 lg:mb-5 relative">
                <MdPerson className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-2 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[14px] lg:text-[16px] leading-6 lg:leading-7 text-headingColor cursor-pointer"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="mb-4 lg:mb-5 relative">
                <MdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-2 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[14px] lg:text-[16px] leading-6 lg:leading-7 text-headingColor cursor-pointer"
                  required
                  autoComplete="new-password"
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </div>
              </div>
              <div className="mb-4 lg:mb-5 relative">
                <MdLockOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Your Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-2 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[14px] lg:text-[16px] leading-6 lg:leading-7 text-headingColor cursor-pointer"
                  required
                  autoComplete="new-password"
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </div>
              </div>
              {error && (
                <div className="mb-4 lg:mb-5 text-red-600 text-[14px] lg:text-[16px] text-center">
                  {error}
                </div>
              )}
              <div className="mb-4 lg:mb-5">
                <button
                  type="submit"
                  className="w-full py-3 bg-primaryColor bg-blue-600 text-white text-[14px] lg:text-[16px] leading-6 lg:leading-7 rounded-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <HashLoader color="#ffffff" size={24} />
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={SignupImg}
                alt="Signup"
                className="w-full h-[90vh] object-cover rounded-l-lg"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
