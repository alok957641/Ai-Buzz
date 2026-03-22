const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();


app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json());

// --- TRANSPORTER CONFIG ---
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verification check
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ LOGIN ERROR:", error.message);
  } else {
    console.log("🚀 MAKHANN! Server is ready to send emails!");
  }
});

app.get("/", (req, res) => {
  res.send("Aibuzz Backend is Running 🚀");
});

app.post("/send-email", async (req, res) => {
  console.log("📩 Request Aayi Hai:", req.body); // Check karo data aa raha hai ya nahi

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.log("❌ Validation Fail: Fields missing!");
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    console.log("⏳ Email bhejne ki koshish ho rahi hai...");
    
    const info = await transporter.sendMail({
      from: `"Aibuzz Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🔥 New Lead: ${name}`,
      text: message, // Plain text fallback
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("✅ Email Sent Successfully! ID:", info.messageId);
    res.json({ success: true });

  } catch (err) {
    // 🔥 YE LINE SABSE ZAROORI HAI ERROR DHUNDNE KE LIYE
    console.error("❌ NODEMAILER ERROR DETAILS:", {
      message: err.message,
      code: err.code,
      command: err.command,
      response: err.response // Isme Gmail batayega ki kyu block kiya
    });

    res.status(500).json({ 
      success: false, 
      error: "Backend Error", 
      details: err.message 
    });
  }
});

// Render hamesha PORT environment variable deta hai, 5000 fixed mat rakhna
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server started on port ${PORT}`);
});