import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import OtpPage from "../pages/OtpPage";
import Dashboard from "../pages/Dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Routers;
