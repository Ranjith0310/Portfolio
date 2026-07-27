"use client";
import { useState } from "react";
import { navLinks } from "../../lib/data";

export default function V3Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#080b14]/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-black v3-grad">Ranjith R</span>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-white/50 hover:text-white text-sm font-medium transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:block v3-btn !py-2 !px-5 text-xs">Hire Me</a>

        <button className="md:hidden text-white/60" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-5 border-t border-white/5">
          {navLinks.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-white/50 hover:text-white text-sm" onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
