"use client";
import { useState } from "react";
import { navLinks } from "../../lib/data";

export default function V2Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass" style={{ backdropFilter: "blur(20px)" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-black grad-text tracking-tight">Ranjith R</span>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:block grad-btn">
          <span className="grad-btn-inner text-sm">Hire Me</span>
        </a>

        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-5 border-t border-white/10">
          {navLinks.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-white text-sm" onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
