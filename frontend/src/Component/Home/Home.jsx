import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden px-0 py-12">

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-pink-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-40 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-purple-500/30 rounded-full blur-3xl"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-5xl text-center md:text-left">

          {/* TAG */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-9 lg:mt-12 mb-4 inline-flex items-center gap-2 px-5 py-1.5
            text-xs sm:text-sm font-medium text-white rounded-full
            bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20
            backdrop-blur-md border border-white/20 mx-auto md:mx-0"
          >
            <span>📈</span>
            <span>Influencer Marketing Agency</span>
          </motion.p>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-white"
          >
            Where Creative Vision Serves a Purpose
            <span className="block mt-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Empowering Creators. Driving Brand Growth
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-sm sm:text-lg text-gray-400"
          >
            In a digital world brimming with content, standing out requires more
            than just effort—it demands innovation, authenticity, and strategic
            collaboration.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-5"
          >
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 rounded-full text-white font-semibold
              bg-gradient-to-r from-pink-500 to-purple-600"
            >
              Launch Influencer Campaign 🚀
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#creators"
              className="px-8 py-4 rounded-full text-white border border-white/20"
            >
              Explore Creators
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
