"use client";
import { useEffect, useState } from "react";
import { Rocket, Package, Bot, Star, Hand } from "lucide-react";
import { getYearsOfExperience } from "../../lib/utils";

const roles = ["Senior Full Stack Developer", "Associate Project Manager", "Generative AI Engineer", "React.js & Next.js Expert"];

export default function V2Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (charIndex < current.length) {
      const t = setTimeout(() => { setDisplayed(current.slice(0, charIndex + 1)); setCharIndex(charIndex + 1); }, 55);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => { setDisplayed(""); setCharIndex(0); setRoleIndex((roleIndex + 1) % roles.length); }, 2200);
      return () => clearTimeout(t);
    }
  }, [charIndex, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left — Text */}
        <div>
          <p className="section-label fade-up-1 flex items-center gap-2"><Hand size={14} /> Welcome to my portfolio</p>
          <h1 className="text-6xl md:text-7xl font-black leading-none mb-4 fade-up-2">
            <span className="text-white">Hi, I&apos;m</span><br />
            <span className="grad-text">Ranjith R</span>
          </h1>
          <div className="h-8 mb-6 fade-up-3">
            <p className="text-white/60 text-lg font-medium">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-purple-400 ml-1 animate-pulse" />
            </p>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-md mb-8 fade-up-4">
            {getYearsOfExperience()}+ years building scalable enterprise apps with React, Next.js, Node.js, Laravel & Generative AI.
          </p>
          <div className="flex gap-4 flex-wrap fade-up-4">
            <a href="#projects" className="grad-btn">
              <span className="grad-btn-inner">View Projects</span>
            </a>
            <a href="#contact" className="px-7 py-3 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-semibold transition-all text-sm">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right — Glass stat cards */}
        <div className="grid grid-cols-2 gap-4 fade-up-3">
          {[
            { value: `${getYearsOfExperience()}+`, label: "Years Experience", icon: <Rocket size={28} className="text-white" /> },
            { value: "10+", label: "Projects Delivered", icon: <Package size={28} className="text-white" /> },
            { value: "3+", label: "AI Integrations", icon: <Bot size={28} className="text-white" /> },
            { value: "100%", label: "Client Satisfaction", icon: <Star size={28} className="text-white" /> },
          ].map(({ value, label, icon }) => (
            <div key={label} className="glass glass-hover rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-2">{icon}</div>
              <div className="text-3xl font-black grad-text">{value}</div>
              <div className="text-white/50 text-xs mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs z-10">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
