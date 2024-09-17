import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    verificationCode: { type: String }, // Field for storing OTP
    verificationCodeExpires: { type: Date }, // Field for OTP expiration time
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps automatically
);

const User = mongoose.model("User", UserSchema);

export default User;
