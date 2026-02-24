import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24 overflow-hidden">

      {/* FLOATING GLOW */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/2 -translate-x-1/2
        w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

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
            🚀 Our Services
          </p>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Best Influencer Marketing
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
            bg-clip-text text-transparent">
              in India
            </span>
          </h2>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* TECH */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10"
          >
            <video
              src="/tech.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[360px] object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-6 left-6"
            >
              <h3 className="text-2xl font-bold text-white">Tech</h3>
              <p className="text-sm text-gray-300 mt-1">
                Gadgets • Apps • AI • Startups
              </p>
            </motion.div>
          </motion.div>

          {/* BEAUTY */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10"
          >
            <video
              src="/beauty.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[360px] object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-6 left-6"
            >
              <h3 className="text-2xl font-bold text-white">Beauty</h3>
              <p className="text-sm text-gray-300 mt-1">
                Skincare • Makeup • Fashion
              </p>
            </motion.div>
          </motion.div>

          {/* LIFESTYLE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10"
          >
            <video
              src="/lifestyle.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[360px] object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-6 left-6"
            >
              <h3 className="text-2xl font-bold text-white">Lifestyle</h3>
              <p className="text-sm text-gray-300 mt-1">
                Travel • Fitness • Daily Life
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
