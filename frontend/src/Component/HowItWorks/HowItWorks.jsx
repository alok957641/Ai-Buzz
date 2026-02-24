import { motion } from "framer-motion";
import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";

export default function HowItWorks() {
  const steps = [
    {
      title: "Define Goals",
      desc: "We understand your brand objectives, audience, and growth vision.",
      img: work1,
      icon: "🎯",
    },
    {
      title: "Match Creators",
      desc: "We connect you with creators who truly fit your brand and niche.",
      img: work2,
      icon: "🤝",
    },
    {
      title: "Launch Campaigns",
      desc: "Authentic content goes live across Instagram, YouTube & Shorts.",
      img: work3,
      icon: "🎬",
    },
    {
      title: "Track Results",
      desc: "We measure performance, optimize strategy, and scale success.",
      img: work4,
      icon: "📊",
    },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden" id="works">

      {/* BG GLOWS */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-0 w-[300px] h-[300px]
        bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -left-32 w-[300px] h-[300px]
        bg-purple-500/20 rounded-full blur-3xl"
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
          <p className="inline-block mb-4 px-4 py-1 text-xs sm:text-sm
          rounded-full bg-white/10 text-gray-300">
            ⚡ Our Process
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            How We Turn Ideas Into Influence
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            A creative, visual-first process built for modern brands & creators.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden
              border border-white/10 bg-white/5"
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={step.img}
                  alt={step.title}
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0
                bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* ICON */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="absolute top-4 left-4 text-2xl
                  bg-black/40 px-3 py-1 rounded-full"
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-3xl opacity-0
              group-hover:opacity-100 transition pointer-events-none
              shadow-[0_0_40px_rgba(99,102,241,0.25)]" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
