import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lothin9999@gmail.com", //process.env.GMAIL_USER,
      pass: "kjfc mtqa annp ldhc", //process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: "lothin9999@gmail.com", //process.env.GMAIL_USER,
    to: "lothininfo@gmail.com", //body.to,
    subject: body.subject,
    text: body.text,
    html: body.html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "An unknown error occurred" };
    }
  }
});
