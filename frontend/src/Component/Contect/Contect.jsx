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
      const res = await fetch("https://aibuzz.media/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully 🚀");
        e.target.reset();
      } else {
        alert("Something went wrong ❌");
      }
    } catch (err) {
      alert("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative bg-black py-28 overflow-hidden">
      {/* GLOW */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/2 -translate-x-1/2
        w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="inline-block mb-4 px-4 py-1 text-sm rounded-full
          bg-white/10 text-gray-300 backdrop-blur-md">
            📩 Contact Us
          </p>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Let’s Build Something
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
            bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Tell us about your brand or creator goals — we’ll reach out.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to scale with influencers?
            </h3>

            <p className="text-gray-400 mb-6">
              Whether you’re a brand or a creator, AI Buzz Media helps you
              grow faster with performance-driven influencer campaigns.
            </p>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919113709625"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-full
              bg-gradient-to-r from-green-500 to-emerald-600
              text-white font-semibold
              hover:drop-shadow-[0_0_30px_rgba(34,197,94,1)]"
            >
              💬 Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-4 rounded-xl bg-black border border-white/10
              text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-4 rounded-xl bg-black border border-white/10
              text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="4"
              required
              className="w-full px-5 py-4 rounded-xl bg-black border border-white/10
              text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            ></textarea>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-full font-semibold text-white
              bg-gradient-to-r from-pink-500 to-purple-600
              hover:drop-shadow-[0_0_30px_rgba(236,72,153,1)]"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}