const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "https://aibuzz.media",
  methods: ["GET","POST"]
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// test route
app.get("/", (req,res)=>{
  res.send("Backend running 🚀");
});

// contact form
app.post("/send-email", async (req,res)=>{

  const { name, email, message } = req.body;
 console.log("BODY 👉", req.body);
  try {

    await resend.emails.send({
      from: "AI Buzz <onboarding@resend.dev>",
      to: process.env.EMAIL_TO, 
      subject: "New Contact Form",
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    res.json({success:true});

  } catch(err){
    console.log("EMAIL ERROR 👉",err);
    res.status(500).json({success:false});
  }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log("Server running on port",PORT);
});