const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// ✅ CORS FIX (Sabse upar rakho)
app.use(cors()); 
app.use(express.json());

// --- TRANSPORTER CONFIG (Direct Gmail Service) ---
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Aibuzz645@gmail.com
    pass: process.env.EMAIL_PASS, // 16-digit App Password (Bina space ke)
  },
});

// ✅ YE CHECK KAREGA KI LOGIN SAHI HAI YA NAHI
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ LOGIN ERROR: Bhai tera Email ya App Password galat hai!");
    console.log("Asli Error ye hai 👉", error.message);
  } else {
    console.log("🚀 MAKHANN! Server is ready to send emails!");
  }
});

app.get("/", (req, res) => {
  res.send("Aibuzz Backend is Running 🚀");
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Aibuzz Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🔥 New Lead: ${name}`,
      html: `<h3>New Message from ${name}</h3><p>${message}</p>`,
    });

    res.json({ success: true });
  } catch (err) {
    console.log("❌ SENDING ERROR:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});