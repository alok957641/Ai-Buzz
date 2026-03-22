import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // ✅ Live API URL
      const res = await fetch("https://api.aibuzz.media/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        alert("Aibuzz Media: Message sent successfully! 🚀 Check your email.");
        e.target.reset();
      } else {
        // 🔥 [object Object] se bachne ke liye string check
        const errorMsg = typeof result.error === 'object' 
          ? (result.error.message || "Server Error") 
          : (result.error || "Opps! Kuch gadbad hai. ❌");
        
        alert("Error: " + errorMsg);
      }
    } catch (err) {
      alert("Network Error: Backend connect nahi ho pa raha. Check connection! 🌐");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-black py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-gray-300 backdrop-blur-md"
          >
            📩 Contact Us
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Let’s Build Something{" "}
            <span className="block bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Ready to scale with influencers?</h3>
            <p className="text-gray-400">Join 1000+ creators and brands growing with Aibuzz Media.</p>
            <a
              href="https://wa.me/919113709625"
              className="inline-block px-8 py-4 rounded-full bg-green-500 text-white font-bold hover:bg-green-600 transition-colors"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 backdrop-blur-sm"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              disabled={loading}
              className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white focus:border-pink-500 outline-none disabled:opacity-50 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              disabled={loading}
              className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white focus:border-pink-500 outline-none disabled:opacity-50 transition-all"
            />
            <textarea
              name="message"
              placeholder="Message..."
              rows="4"
              required
              disabled={loading}
              className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white focus:border-pink-500 outline-none disabled:opacity-50 transition-all"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-full font-bold text-white flex items-center justify-center gap-3 transition-all ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] shadow-lg shadow-pink-500/20"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                "Send Message 🚀"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}