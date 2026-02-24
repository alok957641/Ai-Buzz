import { motion } from "framer-motion";
import client1 from "../../assets/creator1.jpg";
import client2 from "../../assets/creator2.jpg";
import client3 from "../../assets/creator3.jpg";

export default function Testimonials() {

  const testimonials = [
    {
      name: "Riya Sharma",
      role: "Instagram Creator",
      text: "“AI Buzz Media helped me land high-paying brand deals consistently. My reach and revenue both exploded.”",
      img: client1,
    },
    {
      name: "Aman Verma",
      role: "Brand Manager",
      text: "“From influencer selection to campaign execution — everything was smooth and ROI-focused.”",
      img: client2,
    },
    {
      name: "Neha Kapoor",
      role: "D2C Founder",
      text: "“Best influencer agency I’ve worked with. Transparent, fast, and growth-driven.”",
      img: client3,
    },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* GLOW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -top-40 right-20 w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-3xl"
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
            💬 Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Trusted By Creators & Brands
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Real stories from people who scaled faster with AI Buzz Media.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6
              hover:bg-white/10 transition"
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.text}
              </p>

              <div className="flex items-center gap-3 mt-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-white text-sm font-semibold">
                    {t.name}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
