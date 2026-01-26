import creator1 from "../../assets/creator1.jpg"
import creator2 from "../../assets/creator2.jpg"
import creator3 from "../../assets/creator3.jpg"
import creator4 from "../../assets/creator4.jpg"
import creator5 from "../../assets/creator5.jpg"

export default function TrustedCreators() {
  const creators = [
    {
      name: "thecrazychique",
      img: creator1,
      link: "https://www.instagram.com/thecrazychique?igsh=MWEydzA1bnRrdXNxNw==",
    },
    {
      name: "deekshamishraofficial",
      img:creator2,
      link: "https://www.instagram.com/deekshamishraofficial?igsh=MWU3NHh2czIzcG42bA==",
    },
    {
      name: "codewith_random",
      img: creator3,
      link: "https://www.instagram.com/codewith_random?igsh=MTZxa3Qzandvbjl5dg==",
    },
    {
      name: "_.techhnique.10__",
      img: creator4,
      link: "https://www.instagram.com/_.techhnique.10__?igsh=MXZjeTM5NjNuOTdsOQ==",
    },
    {
      name: "Ftechno___explorer",
      img: creator5,
      link: "https://www.instagram.com/accounts/login/?next=%2Ftechno___explorer&source=omni_redirect",
    },
  ];

  return (
    <section className="bg-black py-20 overflow-hidden" id="creators">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Our Trusted Creators
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            1000+ Verified Influencers Across India
          </h2>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-slide">
            {[...creators, ...creators, ...creators].map((creator, i) => (
              <a
                key={i}
                href={creator.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[250px] max-w-[250px] bg-[#111] border border-white/10
                rounded-2xl p-5 text-center hover:scale-105 transition"
              >
                <img
                  src={creator.img}
                  alt={creator.name}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <p className="text-white font-medium">{creator.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
