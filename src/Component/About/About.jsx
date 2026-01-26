export default function About() {
  return (
    <section className="relative bg-black py-24 overflow-hidden" id="about">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 -left-32 w-[320px] h-[320px] bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-32 w-[320px] h-[320px] bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT : VIDEO */}
          <div className="relative">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[260px] sm:h-[360px] rounded-2xl object-cover
              shadow-lg shadow-purple-500/20"
            ></video>

            {/* VIDEO BORDER / GLOW */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
          </div>

          {/* RIGHT : CONTENT */}
          <div className="space-y-6 text-center md:text-left">

            {/* TAG */}
            <p className="inline-flex items-center gap-2 px-4 py-1 text-xs sm:text-sm
            rounded-full bg-white/10 text-gray-300 backdrop-blur-md
            mx-auto md:mx-0">
              <span>✨</span>
              <span>About AiBuzz Media</span>
            </p>

            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Built for Creators. Designed for Brands.
            </h2>

            {/* TEXT */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              AiBuzz Media is an influencer marketing agency focused on building
              authentic connections between brands and creators. We help
              businesses grow through data-driven influencer strategies,
              impactful storytelling, and measurable results.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-white font-semibold">Right Creators</p>
                <p className="text-gray-400 text-sm">
                  Carefully matched influencers for your niche.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-white font-semibold">Smart Strategy</p>
                <p className="text-gray-400 text-sm">
                  Data-backed campaigns that actually convert.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-white font-semibold">Real Results</p>
                <p className="text-gray-400 text-sm">
                  Engagement, trust & measurable growth.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-block mt-6 px-7 py-3 rounded-full text-white font-medium
              bg-gradient-to-r from-pink-500 to-purple-600
              hover:scale-105 transition
              hover:shadow-[0_0_25px_rgba(236,72,153,0.8)]"
            >
              Let’s Work Together
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
