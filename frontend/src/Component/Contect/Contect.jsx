import React, { useState } from "react"; // ✅ Loading ke liye useState
import { motion } from "framer-motion";

export default function Contact() {
  // --- LOADING STATE ---
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Button ko 'Sending' pe set karo

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // ⚠️ DHAYAN DE: Agar tera backend live hai toh localhost ki jagah wo URL daalna
      // ✅ Exact ye URL copy kar ke dalo
      const res = await fetch("https://api.aibuzz.media/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        // res.ok check karna safe rehta hai
        alert("Aibuzz Media: Message sent successfully! 🚀");
        e.target.reset();
      } else {
        // Agar backend error message bhej raha hai toh wo dikhao
        alert(result.error || "Opps! Kuch gadbad hai backend mein. ❌");
      }
    } finally {
      setLoading(false); // ✅ Kaam khatam, button wapas normal
    }
  };

  return (
    <section id="contact" className="relative bg-black py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-gray-300 backdrop-blur-md">
            📩 Contact Us
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Let’s Build Something{" "}
            <span className="block bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Ready to scale with influencers?
            </h3>
            <p className="text-gray-400">
              Join 1000+ creators and brands growing with Aibuzz Media.
            </p>
            <a
              href="https://wa.me/919113709625"
              className="inline-block px-6 py-4 rounded-full bg-green-500 text-white font-bold"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* --- FORM WITH FIXED LOADING --- */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              disabled={loading}
              className="w-full px-5 py-4 rounded-xl bg-black border border-white/10 text-white focus:border-pink-500 outline-none disabled:opacity-50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              disabled={loading}
              className="w-full px-5 py-4 rounded-xl bg-black border border-white/10 text-white focus:border-pink-500 outline-none disabled:opacity-50"
            />
            <textarea
              name="message"
              placeholder="Message..."
              rows="4"
              required
              disabled={loading}
              className="w-full px-5 py-4 rounded-xl bg-black border border-white/10 text-white focus:border-pink-500 outline-none disabled:opacity-50"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-full font-bold text-white flex items-center justify-center gap-3 transition-all ${
                loading
                  ? "bg-gray-600 cursor-wait"
                  : "bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02]"
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
