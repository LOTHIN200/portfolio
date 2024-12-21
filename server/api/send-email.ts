// import { defineEventHandler, readBody } from "h3";
// import nodemailer from "nodemailer";

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);

//   if (!body?.email) {
//     return { success: false, message: "Email is required." };
//   }

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMTP_USER,
//     to: body.email,
//     subject: "Subscription Confirmation",
//     text: "Thank you for subscribing!",
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return { success: true };
//   } catch (err) {
//     return { success: false, message: err.message };
//   }
// });
