const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// CORS FIX
app.use(cors({
  origin: "https://aibuzz.media",
  methods: ["GET", "POST"],
}));

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// form submit route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, msg: "All fields required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,   // FIX
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true, msg: "Email sent successfully" });

  } catch (error) {
    console.log("EMAIL ERROR 👉", error);
    res.status(500).json({ success: false, msg: "Email failed" });
  }
});

// server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});