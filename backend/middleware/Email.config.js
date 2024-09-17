import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "oluwolefsamson44@gmail.com",
    pass: "gcss hakp mbvl mgyj", // App-specific password
  },
  // Disable logging
  logger: false,
});

const sendEmail = async () => {
  try {
    const info = await transporter.sendMail({
      from: '"SamKode 👻" <oluwolefsamson44@gmail.com>', // sender address
      to: "oluwolefsamson44@gmail.com", // list of receivers
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
