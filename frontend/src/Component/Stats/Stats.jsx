import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "250+", label: "Creators Onboarded" },
    { value: "120+", label: "Brand Campaigns" },
    { value: "10M+", label: "Monthly Reach" },
    { value: "4.9★", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* FLOATING GLOWS */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px]
        bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -right-40 w-[400px] h-[400px]
        bg-pink-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="inline-block mb-4 px-4 py-1 text-sm rounded-full
          bg-white/10 text-gray-300 backdrop-blur-md">
            📊 Our Impact
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Numbers That Speak For Us
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            We don’t just promise growth — we deliver measurable results
            through creators.
          </p>
        </motion.div>

        {/* STATS GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.08 }}
              className="relative bg-white/5 border border-white/10
              rounded-2xl p-6 text-center
              hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
              transition"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
