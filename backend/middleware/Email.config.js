import dotenv from "dotenv";
import nodemailer from "nodemailer";

// Load environment variables from .env file
dotenv.config();

// Create a transporter object using environment variables
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  logger: false,
});

const sendEmail = async () => {
  try {
    const info = await transporter.sendMail({
      from: `"SamKode 👻" <${process.env.EMAIL_USER}>`, // sender address
      to: process.env.EMAIL_USER, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log(info);
  } catch (error) {
    console.log(error);
  }
};

sendEmail();
