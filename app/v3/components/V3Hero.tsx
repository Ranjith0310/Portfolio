"use client";
import { useEffect, useState } from "react";
import Lottie from "./Lottie";
import { getYearsOfExperience } from "../../lib/utils";

const CODING_LOTTIE = "/lottie/coding.json";
const FULL_TEXT = `${getYearsOfExperience()}+ years building scalable enterprise apps with React, Next.js, Node.js, Laravel & Generative AI solutions.`;

function TypedDescription() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(FULL_TEXT.slice(0, i + 1));
      i++;
      if (i >= FULL_TEXT.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-white/40 text-sm leading-relaxed max-w-md mb-8 v3-fade-2 min-h-[60px]">
      {displayed}<span className="animate-pulse">|</span>
    </p>
  );
}

export default function V3Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="v3-label v3-fade mb-3">Full Stack Developer & APM</p>
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-4 v3-fade-1">
            <span className="text-white">Hi, I&apos;m</span><br />
            <span className="v3-grad">Ranjith R</span>
          </h1>
          <TypedDescription />
          <div className="flex gap-4 flex-wrap v3-fade-3">
            <a href="#projects" className="v3-btn">View Projects</a>
            <a href="#contact" className="v3-btn-outline">Contact Me</a>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-10 v3-fade-4">
            {[
              { value: `${getYearsOfExperience()}+`, label: "Years Exp." },
              { value: "10+", label: "Projects" },
              { value: "3+", label: "AI Apps" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-black v3-grad">{value}</div>
                <div className="text-white/40 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Lottie coding animation */}
        <div className="flex justify-center v3-fade-2">
          <Lottie src={CODING_LOTTIE} className="w-full max-w-xl" />
        </div>
      </div>
    </section>
  );
}
