import { transporter } from "./Email.config.js";

export const SendVerificationCode = async (email, verificationCode) => {
  try {
    const response = await transporter.sendMail({
      from: '"SamKode 👻" <oluwolefsamson44@gmail.com>', // sender address
      to: email, // recipient's email
      subject: "Verify Your Email", // Subject line
      text: `Your verification code is: ${verificationCode}`, // plain text body with the code
      html: `<p>Hello,</p>
             <p>Your verification code is: <strong>${verificationCode}</strong></p>
             <p>Use this code to verify your account.</p>`, // HTML body containing the code
    });
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
