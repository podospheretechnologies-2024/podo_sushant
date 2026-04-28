/* eslint-env node */
import "dotenv/config";
import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = process.env.EMAIL_API_PORT || 8787;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/enquiry", async (req, res) => {
  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New enquiry from website contact form",
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ message: "Enquiry sent successfully." });
  } catch {
    return res.status(500).json({ message: "Failed to send enquiry email." });
  }
});

app.listen(port, () => {
  console.log(`Email API running on http://localhost:${port}`);
});
