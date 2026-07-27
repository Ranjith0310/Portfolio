"use client";
import { useState } from "react";
import { navLinks } from "../lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-indigo-400">Ranjith R</span>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-gray-300 hover:text-indigo-400 transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4">
          {navLinks.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-gray-300 hover:text-indigo-400" onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
