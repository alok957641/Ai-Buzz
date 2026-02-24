import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-black py-24 overflow-hidden" id="about">

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[320px] h-[320px] bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -right-32 w-[320px] h-[320px] bg-pink-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT : VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[260px] sm:h-[360px] rounded-2xl object-cover
              shadow-lg shadow-purple-500/20"
            ></video>

            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
          </motion.div>

          {/* RIGHT : CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left"
          >

            {/* TAG */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1 text-xs sm:text-sm
              rounded-full bg-white/10 text-gray-300 backdrop-blur-md
              mx-auto md:mx-0"
            >
              <span>✨</span>
              <span>About AiBuzz Media</span>
            </motion.p>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Built for Creators. Designed for Brands.
            </motion.h2>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm sm:text-base leading-relaxed"
            >
              AiBuzz Media is an influencer marketing agency focused on building
              authentic connections between brands and creators. We help
              businesses grow through data-driven influencer strategies,
              impactful storytelling, and measurable results.
            </motion.p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                {
                  title: "Right Creators",
                  desc: "Carefully matched influencers for your niche.",
                },
                {
                  title: "Smart Strategy",
                  desc: "Data-backed campaigns that actually convert.",
                },
                {
                  title: "Real Results",
                  desc: "Engagement, trust & measurable growth.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 p-4 rounded-xl border border-white/10"
                >
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-block mt-6 px-7 py-3 rounded-full text-white font-medium
              bg-gradient-to-r from-pink-500 to-purple-600
              hover:shadow-[0_0_25px_rgba(236,72,153,0.8)]"
            >
              Let’s Work Together
            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
