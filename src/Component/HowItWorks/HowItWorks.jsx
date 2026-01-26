export default function HowItWorks() {
  const steps = [
    {
      title: "Define Goals",
      desc: "We understand your brand objectives, audience, and growth vision.",
      img: "src/assets/work1.jpg",
      icon: "🎯",
    },
    {
      title: "Match Creators",
      desc: "We connect you with creators who truly fit your brand and niche.",
      img: "src/assets/work2.jpg",
      icon: "🤝",
    },
    {
      title: "Launch Campaigns",
      desc: "Authentic content goes live across Instagram, YouTube & Shorts.",
      img: "src/assets/work3.jpg",
      icon: "🎬",
    },
    {
      title: "Track Results",
      desc: "We measure performance, optimize strategy, and scale success.",
      img: "src/assets/work4.jpg",
      icon: "📊",
    },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden" id="works">

      {/* BG GLOW */}
      <div className="absolute -top-32 right-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-32 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="inline-block mb-4 px-4 py-1 text-xs sm:text-sm rounded-full bg-white/10 text-gray-300">
            ⚡ Our Process
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            How We Turn Ideas Into Influence
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            A creative, visual-first process built for modern brands & creators.
          </p>
        </div>

        {/* IMAGE CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden border border-white/10
              bg-white/5 hover:scale-[1.03] transition duration-500"
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* ICON */}
                <div className="absolute top-4 left-4 text-2xl bg-black/40 px-3 py-1 rounded-full">
                  {step.icon}
                </div>
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

              {/* GLOW */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
              transition pointer-events-none
              shadow-[0_0_40px_rgba(99,102,241,0.25)]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
