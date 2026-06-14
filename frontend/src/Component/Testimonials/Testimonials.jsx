import { motion } from "framer-motion";
import client1 from "../../assets/creator4.jpg";
import client2 from "../../assets/image.png";
import client3 from "../../assets/client3.jpeg";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sikander kathat", // ✅ As per your request
      role: "Instagram Creator",
      text: "“AI Buzz Media helped me land high-paying brand deals consistently. My reach and revenue both exploded.”",
      img: client1,
      color: "from-pink-500 to-rose-500", // Card specific glow
    },
    {
      name: "Aegta", // ✅ As per your request
      role: "Brand ",
      text: "“From influencer selection to campaign execution — everything was smooth and ROI-focused.”",
      img: client2,
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Ubon", // ✅ As per your request
      role: "Tech Brand",
      text: "“Best influencer agency I’ve worked with. Transparent, fast, and growth-driven.”",
      img: client3,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden" id="testimonials">
      
      {/* --- BACKGROUND PRO EFFECTS --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-purple-400 tracking-widest uppercase">
            Success Stories
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted By <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Creators & Brands</span>
          </h2>
        </motion.div>

        {/* --- PRO LEVEL CARDS --- */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group relative p-[1px] rounded-3xl overflow-hidden bg-white/10"
            >
              {/* Animated Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Inner Card Content */}
              <div className="relative h-full bg-[#0d0d0d] rounded-3xl p-8 flex flex-col justify-between">
                
                {/* Quote Icon */}
                <div className="mb-6">
                   <svg className={`w-8 h-8 bg-gradient-to-r ${t.color} bg-clip-text text-transparent fill-current opacity-50`} viewBox="0 0 24 24">
                     <path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16 16H19V10H14V5H20V16L18.027 21H14.017ZM4.017 21L4.017 18C4.017 16.899 4.899 16 6 16H9V10H4V5H10V16L8.027 21H4.017Z" />
                   </svg>
                </div>

                <p className="text-gray-300 text-lg italic leading-relaxed mb-8">
                  {t.text}
                </p>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="relative">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${t.color} rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500`} />
                    <img
                      src={t.img}
                      alt={t.name}
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {t.name}
                    </h4>
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-tighter">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}