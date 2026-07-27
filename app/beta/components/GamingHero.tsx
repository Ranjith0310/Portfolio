"use client";
import { useEffect, useState } from "react";
import { getYearsOfExperience } from "../../lib/utils";

const roles = [
  "Associate Project Manager",
  "Senior Full Stack Developer",
  "Generative AI Engineer",
  "React.js · Next.js · Node.js",
];

export default function GamingHero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayed("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [charIndex, roleIndex]);

  return (
    <section className="min-h-screen grid-bg flex flex-col justify-center items-center text-center px-6 pt-20 relative overflow-hidden">
      {/* Corner HUD decorations */}
      <div className="absolute top-24 left-6 font-mono text-green-500/30 text-xs hidden md:block">
        <div>LAT: 11.0168° N</div>
        <div>LNG: 76.9558° E</div>
        <div>STATUS: ACTIVE</div>
      </div>
      <div className="absolute top-24 right-6 font-mono text-green-500/30 text-xs text-right hidden md:block">
        <div>EXP: {getYearsOfExperience()}+ YRS</div>
        <div>LVL: SENIOR</div>
        <div>CLASS: FULLSTACK</div>
      </div>

      {/* Avatar */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full border-2 border-green-400 flex items-center justify-center text-5xl bg-black"
          style={{ boxShadow: "0 0 30px rgba(0,255,136,0.4), inset 0 0 30px rgba(0,255,136,0.05)" }}>
          👾
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-400 text-black text-xs font-mono font-bold px-3 py-0.5 rounded-full">
          PLAYER_01
        </div>
      </div>

      {/* Glitch name */}
      <h1 className="text-5xl md:text-7xl font-extrabold font-mono mb-4 text-white glitch" data-text="RANJITH R">
        RANJITH R
      </h1>

      {/* Typing role */}
      <div className="h-8 mb-2">
        <p className="text-green-400 font-mono text-lg">
          <span className="text-green-500/60">&gt; </span>
          {displayed}
          <span className="cursor-blink text-green-400">_</span>
        </p>
      </div>

      {/* XP Bar */}
      <div className="w-72 mb-8 mt-4">
        <div className="flex justify-between font-mono text-xs text-green-500/60 mb-1">
          <span>XP</span>
          <span>{getYearsOfExperience()}+ years</span>
        </div>
        <div className="h-2 bg-green-900/40 rounded-full border border-green-500/30 overflow-hidden">
          <div className="h-full bg-green-400 rounded-full" style={{ width: "82%", boxShadow: "0 0 10px #00ff88" }} />
        </div>
      </div>

      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 border border-green-400 text-green-400 font-mono text-sm hover:bg-green-400 hover:text-black transition-all tracking-widest neon-border">
          [ VIEW_PROJECTS ]
        </a>
        <a href="#contact" className="px-6 py-3 border border-green-500/40 text-green-500/60 font-mono text-sm hover:border-green-400 hover:text-green-400 transition-all tracking-widest">
          [ CONTACT_ME ]
        </a>
      </div>
    </section>
  );
}
