import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Read request body

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Gmail user from .env
      pass: process.env.GMAIL_PASS, // Gmail password or App Password from .env
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: body.to, // Recipient email address
    subject: body.subject, // Email subject
    text: body.text, // Email body as plain text
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
