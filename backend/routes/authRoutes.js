import express from "express";
import { register, login, verifyEmail } from "../controllers/authController.js"; // Ensure the correct path and file extension

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verifyemail", verifyEmail);

export default router;
