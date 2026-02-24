import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">

      {/* GLOW */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/2 -translate-x-1/2
        w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-4"
        >

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-extrabold text-white">
              AI<span className="text-purple-500">Buzz</span> Media
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Purpose-led influencer marketing agency helping creators grow
              and brands scale with real impact.
            </p>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Home", "About", "Services", "Creators"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                "Influencer Campaigns",
                "Brand Collaborations",
                "UGC & Reels Marketing",
                "Creator Management",
              ].map((service, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: contact@aibuzzmedia.com</li>
              <li>WhatsApp: +91 91137 09625</li>
              <li>India 🇮🇳</li>
            </ul>
          </motion.div>

        </motion.div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-6 border-t border-white/10
          flex flex-col sm:flex-row gap-4 justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AI Buzz Media. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Built with ❤️ by
            <span className="text-white font-medium"> Alok Kumar</span>
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
