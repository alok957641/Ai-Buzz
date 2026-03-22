const express = require("express");
const cors = require("cors");
const { Resend } = require("resend"); // ✅ API method
require("dotenv").config();

const app = express();
const resend = new Resend(process.env.EMAIL_PASS); // EMAIL_PASS me Resend API Key daalo

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 🚀 Resend API call (Ye port block nahi karta)
   const { data, error } = await resend.emails.send({
  from: "onboarding@resend.dev", 
  to: "rajankit754184@gmail.com", // ✅ Sirf apna wahi email daalo jo Resend pe verified hai
  subject: `🔥 New Lead from Aibuzz: ${name}`,
  html: `
    <h3>New Message from Website</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>User's Email:</strong> ${email}</p> 
    <p><strong>Message:</strong> ${message}</p>
  `,
});

    if (error) {
      console.error("❌ RESEND ERROR:", error);
      return res.status(400).json({ success: false, error });
    }

    console.log("✅ Email Sent via API!");
    res.json({ success: true });

  } catch (err) {
    console.error("❌ BACKEND CRASH:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`🚀 API Server on port ${PORT}`));