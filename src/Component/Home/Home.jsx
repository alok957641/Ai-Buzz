export default function Home() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden px-0 py-12">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-pink-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-purple-500/30 rounded-full blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-5xl text-center md:text-left">
          {/* TAG */}
          <p
            className="
      mt-9 lg:mt-12 mb-4 inline-flex items-center gap-2 px-5 py-1.5
    text-xs sm:text-sm font-medium text-white
    rounded-full
    bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20
    backdrop-blur-md
    border border-white/20
    mx-auto md:mx-0
    animate-pulse
    shadow-[0_0_20px_rgba(236,72,153,0.4)]
  "
          >
            <span className="text-base">📈</span>
            <span>Influencer Marketing Agency</span>
          </p>

          {/* HEADING */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold leading-snug sm:leading-tight text-white">
            Where Creative Vision Serves a Purpose
            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,1)]">
              Empowering Creators. Driving Brand Growth
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-400 leading-relaxed">
            In a digital world brimming with content, standing out requires more
            than just effort—it demands innovation, authenticity, and strategic
            collaboration. At Aibuzz, we specialize in forging meaningful
            connections between visionary creators and forward-thinking brands
            across the globe through Instagram, YouTube & Short-form content.
          </p>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start">
            <a
              href="#contact"
              className=" sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white text-sm sm:text-base font-semibold
              bg-gradient-to-r from-pink-500 to-purple-600
              transition-all duration-300
              hover:scale-105
              hover:drop-shadow-[0_0_25px_rgba(236,72,153,1)] text-center"
            >
              Launch Influencer Campaign 🚀
            </a>

            <a
              href="#creators"
              className=" sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base text-white font-medium
              border border-white/20 hover:bg-white/10 transition text-center"
            >
              Explore Creators
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
