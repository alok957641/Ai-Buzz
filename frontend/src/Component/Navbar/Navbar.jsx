import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Works", path: "#works" },
    { name: "Services", path: "#services" },
    { name: "Creators", path: "#creators" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600
          bg-clip-text text-transparent transition
          hover:drop-shadow-[0_0_14px_rgba(139,92,246,0.9)]"
        >
          <span className="text-white">AI</span>Buzz Media
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          {links.map((item) => (
            <li key={item.name}>
              <a href={item.path} className="hover:text-white transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTON */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full
          bg-gradient-to-r from-blue-600 to-purple-600 text-white
          hover:drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]
          transition"
        >
          Let’s Talk
        </a>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU (SAME STYLE, JUST COLUMN) */}
      <div
        className={`md:hidden bg-black/90 border-t border-white/10
        transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-6 py-6 flex flex-col gap-6 text-gray-300">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="mt-2 text-center py-3 rounded-full
            bg-gradient-to-r from-blue-600 to-purple-600 text-white
            hover:drop-shadow-[0_0_18px_rgba(139,92,246,1)]
            transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
