import { motion } from "framer-motion";
import misson from "../../assets/ourmisson.jpg";

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* FLOATING GLOW */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40
        w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid gap-14 md:grid-cols-2 items-center">

          {/* LEFT : IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0
              bg-gradient-to-r from-pink-500 to-purple-600
              rounded-3xl blur-2xl opacity-30"
            />

            <motion.img
              src={misson}
              alt="Our Mission"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl object-cover w-full h-[360px]"
            />
          </motion.div>

          {/* RIGHT : CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-1 text-sm rounded-full
              bg-white/10 text-gray-300 backdrop-blur-md"
            >
              🎯 Our Mission
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-extrabold
              text-white leading-tight"
            >
              Building Meaningful Connections
              <span
                className="block mt-2
                bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                bg-clip-text text-transparent"
              >
                Between Creators & Brands
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed"
            >
              At <span className="text-white font-medium">AI Buzz Media</span>,
              our mission is to empower creators with real opportunities and
              help brands grow through authentic, performance-driven influencer
              marketing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
            >
              We focus on trust, creativity, and data-backed strategies to
              create campaigns that feel human, impactful, and scalable —
              not forced or fake.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
            >
              Our goal is simple: elevate creators, amplify brand stories,
              and deliver measurable growth for everyone involved.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
