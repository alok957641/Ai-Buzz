const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// --- TRANSPORTER CONFIG (Global rakha hai performance ke liye) ---
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS use karega
  auth: {
    user: process.env.EMAIL_USER, // .env mein Aibuzz645@gmail.com daalna
    pass: process.env.EMAIL_PASS, // .env mein 16-digit App Password daalna
  },
});

app.get("/", (req, res) => {
  res.send("Aibuzz Media Backend is Live 🚀");
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic Validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  try {
    // Email bhejna shuru
    await transporter.sendMail({
      from: `"Aibuzz Web" <${process.env.EMAIL_USER}>`, 
      replyTo: email, // Isse tu direct user ko reply kar payega
      to: process.env.EMAIL_USER, // Tujhe hi mail aayega
      subject: `🔥 New Lead: ${name} wants to collaborate`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 15px;">
          <h2 style="color: #ec4899; text-align: center;">New Contact Request</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; margin-top: 10px;">
            <strong>Message:</strong><br/>
            <p style="color: #555;">${message}</p>
          </div>
          <footer style="margin-top: 20px; font-size: 12px; color: #aaa; text-align: center;">
            Sent from Aibuzz Media Official Website
          </footer>
        </div>
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.log("❌ EMAIL ERROR:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});