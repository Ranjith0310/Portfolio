"use client";
import { useState } from "react";

const links = ["About", "Skills", "Projects", "Contact"];

export default function GamingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-green-500/40" style={{ boxShadow: "0 0 20px rgba(0,255,136,0.15)" }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-green-400 font-mono text-xs text-green-500/60">[SYS]</span>
          <span className="text-green-400 font-mono font-bold text-lg neon-text">RANJITH_R.exe</span>
        </div>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="font-mono text-sm text-green-400/70 hover:text-green-400 transition-colors hover:neon-text tracking-widest uppercase">
                &gt; {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-green-500/50">
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block" style={{ boxShadow: "0 0 6px #00ff88" }} />
          ONLINE
        </div>

        <button className="md:hidden text-green-400 font-mono" onClick={() => setOpen(!open)}>
          {open ? "[X]" : "[=]"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-3 px-6 pb-4 border-t border-green-500/20">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="font-mono text-green-400/70 hover:text-green-400 text-sm tracking-widest uppercase" onClick={() => setOpen(false)}>
                &gt; {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
