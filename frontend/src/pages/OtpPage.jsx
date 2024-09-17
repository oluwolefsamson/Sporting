import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Logo from "../assets/images/logo.png";
import LoginImg from "../assets/images/login.png";

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(180); // 3 minutes timer (in seconds)
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

  const submitHandler = (event) => {
    event.preventDefault();
    const otpCode = otp.join(""); // Combine OTP digits into a single string

    console.log("Submitted OTP:", otpCode);

    // Simulate successful verification
    if (otpCode === "1234") {
      alert("OTP Verified!");
      navigate("/dashboard");
    } else {
      alert("Invalid OTP, please try again.");
    }
  };

  const resendOtp = () => {
    alert("A new OTP has been sent to your email.");
    setTimer(180); // Reset timer to 3 minutes
    setResendDisabled(true); // Disable resend button again
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section className="px-5 py-6 lg:py-8">
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
                    className="w-12 h-12 lg:w-16 lg:h-16 text-center border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-xl font-medium"
                  />
                ))}
              </div>

              {/* Timer Display */}
              <div className="text-left text-gray-600 mb-4">
                <span>Time remaining: {formatTime()}</span>
              </div>

              {/* Resend Code Section */}
              <div className="text-center text-gray-600 text-[14px] lg:text-[16px] mb-7">
                Didn't get a code?{" "}
                <button
                  onClick={resendOtp}
                  disabled={resendDisabled}
                  className={`text-blue-500 ${
                    resendDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
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
