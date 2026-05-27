"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#161616]/95 border-b border-white/10">

      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          NovaStack
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">

          <li>
            <a href="#home" className="hover:text-fuchsia-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-fuchsia-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-fuchsia-400 transition">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-fuchsia-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* BUTTON */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-full bg-fuchsia-700 hover:bg-fuchsia-600 transition text-sm"
        >
          Start a Project
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden border-t border-white/10 bg-[#161616]">

          <ul className="flex flex-col gap-5 px-6 py-6 text-zinc-300">

            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-fit px-5 py-2 rounded-full bg-fuchsia-700 text-sm"
            >
              Start a Project
            </a>

          </ul>

        </div>

      )}

    </header>
  );
}