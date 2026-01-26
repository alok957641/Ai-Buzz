export default function Mission() {
  return (
    <section
      id="mission"
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* GLOW */}
      <div
        className="absolute -bottom-40 -right-40
        w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid gap-14 md:grid-cols-2 items-center">

          {/* LEFT : IMAGE */}
          <div className="relative">
            <div
              className="absolute inset-0
              bg-gradient-to-r from-pink-500 to-purple-600
              rounded-3xl blur-2xl opacity-30"
            ></div>

            <img
              src="src/assets/ourmisson.jpg"
              alt="Our Mission"
              className="relative rounded-3xl object-cover w-full h-[360px]"
            />
          </div>

          {/* RIGHT : CONTENT */}
          <div>
            <p
              className="inline-block mb-4 px-4 py-1 text-sm rounded-full
              bg-white/10 text-gray-300 backdrop-blur-md"
            >
              🎯 Our Mission
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Building Meaningful Connections
              <span
                className="block mt-2
                bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                bg-clip-text text-transparent"
              >
                Between Creators & Brands
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed">
              At <span className="text-white font-medium">AI Buzz Media</span>,
              our mission is to empower creators with real opportunities and
              help brands grow through authentic, performance-driven influencer
              marketing.
            </p>

            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              We focus on trust, creativity, and data-backed strategies to
              create campaigns that feel human, impactful, and scalable —
              not forced or fake.
            </p>

            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Our goal is simple: elevate creators, amplify brand stories,
              and deliver measurable growth for everyone involved.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
