import Lottie from "./Lottie";
import { projects } from "../../lib/data";

// Lottie: rocket launch animation
const ROCKET_LOTTIE = "/lottie/project.json";

const accents = [
  "border-violet-500/30 hover:border-violet-500/60",
  "border-pink-500/30 hover:border-pink-500/60",
  "border-sky-500/30 hover:border-sky-500/60",
  "border-emerald-500/30 hover:border-emerald-500/60",
  "border-orange-500/30 hover:border-orange-500/60",
  "border-fuchsia-500/30 hover:border-fuchsia-500/60",
];

const dots = [
  "bg-violet-500", "bg-pink-500", "bg-sky-500",
  "bg-emerald-500", "bg-orange-500", "bg-fuchsia-500",
];

export default function V3Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="v3-label mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Featured <span className="v3-grad">Projects</span>
          </h2>
        </div>
        <Lottie src={ROCKET_LOTTIE} className="w-28 h-28 shrink-0" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map(({ title, description, tech }, i) => (
          <div key={title} className={`v3-card p-6 flex flex-col gap-4 border ${accents[i % accents.length]} transition-colors`}>
            <div className={`w-2.5 h-2.5 rounded-full ${dots[i % dots.length]}`} />
            <h3 className="text-white font-bold text-sm leading-snug">{title}</h3>
            <p className="text-white/35 text-xs leading-relaxed flex-1">{description}</p>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              {tech.map((t) => (
                <span key={t} className="v3-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
