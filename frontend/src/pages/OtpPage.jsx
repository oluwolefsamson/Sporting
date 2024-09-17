import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HashLoader } from "react-spinners";
import Logo from "../assets/images/logo.png";
import LoginImg from "../assets/images/login.png";

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30); // 30 seconds timer
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval); // Clear interval on component unmount
    } else {
      setResendDisabled(false); // Enable the resend button after timer finishes
    }
  }, [timer]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus the next input field
    if (value !== "" && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const otpCode = otp.join(""); // Combine OTP digits into a single string

    try {
      setLoading(true);
      const response = await axios.post(
        `https://sporting.onrender.com/api/v1/auth/verifyemail`,
        {
          code: otpCode,
        }
      );

      if (response.data.success) {
        alert("OTP is Successfully Verified!");
        navigate("/login");
      } else {
        alert("Invalid OTP, please try again");
        setError(response.data.message || "Invalid OTP, please try again.");
      }
    } catch (error) {
      alert("There was an error verifying the OTP. Please try again");
      setError("There was an error verifying the OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:8000/api/v1/auth/resendotp`
      ); // Replace with your actual resend OTP endpoint
      if (response.data.success) {
        alert("A new OTP has been sent to your email.");
        setTimer(30); // Reset timer to 30 seconds
        setResendDisabled(true); // Disable resend button again
      } else {
        alert(
          response.data.message ||
            "There was an error resending the OTP. Please try again."
        );
      }
    } catch (error) {
      console.error(
        "Error resending OTP:",
        error.response ? error.response.data : error.message
      );
      alert("There was an error resending the OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60); // 60 seconds per minute
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section className="bg-gray-50 px-5 py-6 lg:py-8 h-screen flex items-center">
      <div className="max-w-[1170px] px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Form Container */}
          <div className="flex flex-col items-start gap-5 lg:gap-6 py-6 lg:py-8 lg:pr-16">
            <img src={Logo} alt="Logo" className="w-[150px] hidden lg:block" />
            <h3 className="text-gray-900 text-[36px] lg:text-[42px] leading-9 font-bold text-left">
              OTP Verification
            </h3>
            <div className="text-[14px] lg:text-[16px] leading-6 lg:leading-7 text-left">
              <span>Enter the OTP sent to your registered email.</span>
            </div>
            <form onSubmit={submitHandler} className="w-full max-w-md">
              <div className="flex justify-start gap-3 mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    className="w-12 h-12 lg:w-16 lg:h-16 text-center border-b-2 bg-gray-50 border-blue-300 focus:outline-none focus:border-blue-500 text-xl font-medium"
                  />
                ))}
              </div>

              {/* Timer Display */}
              <div className="text-left text-gray-600 mb-4">
                <span>Time remaining: {formatTime()}</span>
              </div>

              {/* Resend Code Section */}
              <div className=" text-gray-600 text-[14px] lg:text-[16px] mb-7">
                Didn't get a code?{" "}
                <button
                  onClick={resendOtp}
                  disabled={resendDisabled}
                  className={`text-blue-500 ${resendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Resend
                </button>
              </div>

              {error && (
                <div className="mb-4 text-red-600 text-[14px] lg:text-[16px] text-center">
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
                    "Verify OTP"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Image Container */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={LoginImg}
                alt="OTP Verification"
                className="w-full h-[80vh] object-cover rounded"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtpPage;
