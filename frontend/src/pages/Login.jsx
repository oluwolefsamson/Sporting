import React, { useState } from "react";
import axios from "axios";
import LoginImg from "../../src/assets/images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { MdEmail, MdLock } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import GithubIcon from "../assets/images/apple.jpg";
import GoogleIcon from "../assets/images/google.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `https://sporting.onrender.com/api/v1/auth/login`, // Use environment variable for base URL
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("An OTP has been sent to your mail");
        navigate("/otp"); // Navigate to OTP Page
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        if (error.response.status === 401) {
          setError("Invalid email or password.");
        } else {
          setError("An error occurred. Please try again later.");
        }
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-5 py-6 lg:py-8">
      <div className="max-w-[1170px] px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Form Container */}
          <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-6 py-6 lg:py-8 lg:pr-16">
            <img src={Logo} alt="Logo" className="w-[150px] hidden lg:block" />
            <h3 className="text-gray-900 text-[36px] lg:text-[42px] leading-9 font-bold text-center lg:text-left">
              Sign In
            </h3>
            <div className="text-[14px] lg:text-[16px] leading-6 lg:leading-7 text-center lg:text-left">
              <span>
                If you don't have an account, you can{" "}
                <Link to="/register">
                  <span className="text-blue-600">Register here!</span>
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
                <MdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-2 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[14px] lg:text-[16px] leading-6 lg:leading-7 text-headingColor cursor-pointer"
                  required
                  autoComplete="current-password"
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

              <div className="flex items-center justify-between mb-4 lg:mb-5">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="mr-2"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-[14px] lg:text-[16px] leading-6 lg:leading-7"
                  >
                    Remember Me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 text-[14px] lg:text-[16px] leading-6 lg:leading-7"
                >
                  Forgot Password?
                </Link>
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
                  {loading ? <HashLoader color="#ffffff" size={24} /> : "Login"}
                </button>
              </div>

              <div className="text-center text-gray-600 text-[14px] lg:text-[16px] mb-4">
                Or continue with
              </div>

              <div className="flex justify-center align-center gap-5">
                <img
                  src={GithubIcon}
                  alt="GitHub"
                  className="w-[30px] h-[30px] cursor-pointer"
                  style={{ borderRadius: "50%" }}
                />
                <img
                  src={GoogleIcon}
                  alt="Google"
                  className="w-[40px] cursor-pointer"
                  style={{ borderRadius: "50%", marginTop: "-4.5px" }}
                />
              </div>
            </form>
          </div>

          {/* Image Container */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={LoginImg}
                alt="Login"
                className="w-full h-[80vh] object-cover rounded"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
