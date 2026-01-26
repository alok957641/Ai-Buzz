export default function Stats() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* GLOW */}
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="inline-block mb-4 px-4 py-1 text-sm rounded-full
          bg-white/10 text-gray-300 backdrop-blur-md">
            📊 Our Impact
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Numbers That Speak For Us
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            We don’t just promise growth — we deliver measurable results
            through creators.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* STAT 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              250+
            </h3>
            <p className="mt-2 text-gray-400 text-sm">
              Creators Onboarded
            </p>
          </div>

          {/* STAT 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              120+
            </h3>
            <p className="mt-2 text-gray-400 text-sm">
              Brand Campaigns
            </p>
          </div>

          {/* STAT 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              10M+
            </h3>
            <p className="mt-2 text-gray-400 text-sm">
              Monthly Reach
            </p>
          </div>

          {/* STAT 4 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              4.9★
            </h3>
            <p className="mt-2 text-gray-400 text-sm">
              Client Satisfaction
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
