export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24 overflow-hidden">

      {/* GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2
      w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
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
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* TECH */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10">
            <video
              src="/tech.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">Tech</h3>
              <p className="text-sm text-gray-300 mt-1">
                Gadgets • Apps • AI • Startups
              </p>
            </div>
          </div>

          {/* BEAUTY */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10">
            <video
              src="/beauty.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">Beauty</h3>
              <p className="text-sm text-gray-300 mt-1">
                Skincare • Makeup • Fashion
              </p>
            </div>
          </div>

          {/* LIFESTYLE */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10">
            <video
              src="/lifestyle.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">Lifestyle</h3>
              <p className="text-sm text-gray-300 mt-1">
                Travel • Fitness • Daily Life
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
