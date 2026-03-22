
import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');


const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// 1. CORS Update (Sab domains allow karne ke liye deployment ke waqt)
app.use(cors({
  origin: ["https://aibuzz.media", "http://localhost:5173", "https://www.aibuzz.media"],
  methods: ["POST", "GET", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

// 2. Transporter with Better Port Settings
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Dobara 465 try karte hain secure mode mein
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // 🛡️ Ye connection timeout aur network errors ko rokne ke liye hai
  connectionTimeout: 10000, 
  greetingTimeout: 10000,
});


// Verification check (Logs mein check karna)
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
    return res.status(400).json({ success: false, error: "Saare fields bharo bhai!" });
  }

  try {
    await transporter.sendMail({
      from: `"Aibuzz Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Jisme email receive karna hai
      replyTo: email, // Isse tum direct user ko reply kar paoge
      subject: `🔥 New Lead from Aibuzz: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #ec4899;">New Contact Request</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    console.log("✅ Email sent for:", name);
    res.status(200).json({ success: true, message: "Email Sent!" });

  } catch (err) {
    console.error("❌ ERROR DETAILS:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Port Management for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server started on port ${PORT}`);
});