export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">

      {/* GLOW */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2
      w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              AI<span className="text-purple-500">Buzz</span> Media
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Purpose-led influencer marketing agency helping creators grow
              and brands scale with real impact.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#creators" className="hover:text-white">Creators</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Influencer Campaigns</li>
              <li>Brand Collaborations</li>
              <li>UGC & Reels Marketing</li>
              <li>Creator Management</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: contact@aibuzzmedia.com</li>
              <li>WhatsApp: +91 91137 09625</li>
              <li>India 🇮🇳</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-6 border-t border-white/10
        flex flex-col sm:flex-row gap-4 justify-between items-center">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AI Buzz Media. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Built with ❤️ by
            <span className="text-white font-medium"> Alok Kumar</span>
          </p>

        </div>
      </div>
    </footer>
  );
}
