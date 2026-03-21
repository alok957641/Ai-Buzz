import { motion } from "framer-motion";

// --- TERA DATA ---
import creator1 from "../../assets/creator1.jpg";
import creator2 from "../../assets/creator2.jpg";
import creator3 from "../../assets/creator3.jpg";
import creator4 from "../../assets/creator4.jpg";
import creator5 from "../../assets/creator5.jpg";

export default function TrustedCreators() {
  const creators = [
    { name: "thecrazychique", img: creator1, link: "https://www.instagram.com/thecrazychique" },
    { name: "deekshamishraofficial", img: creator2, link: "https://www.instagram.com/deekshamishraofficial" },
    { name: "codewith_random", img: creator3, link: "https://www.instagram.com/codewith_random" },
    { name: "_.techhnique.10__", img: creator4, link: "https://www.instagram.com/_.techhnique.10__" },
    { name: "Ftechno___explorer", img: creator5, link: "https://www.instagram.com/techno___explorer" },
  ];

  // Infinite loop ke liye double data
  const duplicatedCreators = [...creators, ...creators, ...creators, ...creators];

  return (
    <section className="bg-black py-20 overflow-hidden" id="creators">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-400">Our Trusted Creators</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            1000+ Verified Influencers Across India
          </h2>
        </div>

        {/* --- CSS ANIMATION SLIDER --- */}
        <div className="relative flex overflow-hidden">
          {/* Is div mein humne CSS animation lagayi hai */}
          <div className="flex gap-4 sm:gap-8 animate-scroll whitespace-nowrap">
            {duplicatedCreators.map((creator, i) => (
              <a
                key={i}
                href={creator.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[200px] sm:min-w-[250px] bg-[#111] border border-white/10 rounded-2xl p-4 sm:p-5 text-center transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
              >
                <img
                  src={creator.img}
                  alt={creator.name}
                  className="w-full h-48 sm:h-64 object-cover rounded-xl mb-4 pointer-events-none"
                />
                <p className="text-white text-xs sm:text-sm font-medium">
                  @{creator.name}
                </p>
              </a>
            ))}
          </div>

          {/* Side Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>

      </div>

      {/* --- YAHAN HAI ASLI MAGIC: CSS ANIMATION --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
          width: max-content;
        }
        /* Mobile pe agar koi hath lagaye toh bhi chalta rahega */
        .animate-scroll:active {
          animation-play-state: running; 
        }
      `}} />
    </section>
  );
}