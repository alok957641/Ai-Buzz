// 1. Sabse upar DNS fix (IPv4 force karne ke liye)
const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();


console.log("🛠️  Check Variables:", process.env.EMAIL_USER ? "MIL GAYA ✅" : "NAHI MILA ❌");
// 2. CORS Setup (Local aur Live dono ke liye)
app.use(cors({
  origin: ["https://aibuzz.media", "http://localhost:5173", "https://www.aibuzz.media"],
  methods: ["POST", "GET", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

// 3. Nodemailer Transporter (Port 587 - Render ke liye best)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  connectionTimeout: 30000, // 30 seconds wait karega
  greetingTimeout: 30000,
});


// Verification Check
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ NODEMAILER CONFIG ERROR:", error.message);
  } else {
    console.log("🚀 MAKHANN! Server is ready to send emails!");
  }
});

app.get("/", (req, res) => {
  res.send("Aibuzz Backend is Running 🚀");
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: `"Aibuzz Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🔥 New Lead: ${name}`,
      html: `<h3>New Lead</h3><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ SENDING ERROR:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server started on port ${PORT}`);
});