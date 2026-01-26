export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-28 overflow-hidden">

      {/* GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2
      w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
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
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT INFO */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to scale with influencers?
            </h3>

            <p className="text-gray-400 mb-6">
              Whether you’re a brand or a creator, AI Buzz Media helps you
              grow faster with performance-driven influencer campaigns.
            </p>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919113709625"
              target="_blank"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-full
              bg-gradient-to-r from-green-500 to-emerald-600
              text-white font-semibold
              hover:scale-105 transition
              hover:drop-shadow-[0_0_30px_rgba(34,197,94,1)]"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* FORM */}
          <form
            action="https://formspree.io/f/xxxxabcd"
            method="POST"
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

            <button
              type="submit"
              className="w-full py-4 rounded-full font-semibold text-white
              bg-gradient-to-r from-pink-500 to-purple-600
              hover:scale-105 transition
              hover:drop-shadow-[0_0_30px_rgba(236,72,153,1)]"
            >
              Send Message 🚀
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
