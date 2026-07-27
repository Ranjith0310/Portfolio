import Lottie from "./Lottie";
import { skills } from "../../lib/data";
import { Zap, Server, Brain, Database, ShieldCheck, Wrench } from "lucide-react";

// Lottie: skills/tech animation
const SKILLS_LOTTIE = "/lottie/robot.json";

const icons: Record<string, React.ReactNode> = {
  "Frontend":        <Zap size={16} />,
  "Backend":         <Server size={16} />,
  "AI & Search":     <Brain size={16} />,
  "Database":        <Database size={16} />,
  "Auth & Security": <ShieldCheck size={16} />,
  "Tools":           <Wrench size={16} />,
};

const colors: Record<string, string> = {
  "Frontend":        "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Backend":         "text-sky-400 bg-sky-400/10 border-sky-400/20",
  "AI & Search":     "text-pink-400 bg-pink-400/10 border-pink-400/20",
  "Database":        "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Auth & Security": "text-orange-400 bg-orange-400/10 border-orange-400/20",
  "Tools":           "text-slate-400 bg-slate-400/10 border-slate-400/20",
};

export default function V3Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="v3-label mb-3">Technical Skills</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              My <span className="v3-grad">Tech Stack</span>
            </h2>
          </div>
          <div className="flex justify-center md:justify-end">
            <Lottie src={SKILLS_LOTTIE} className="w-48 h-48" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {skills.map(({ category, items }) => (
            <div key={category} className={`v3-card p-5 border ${colors[category]?.split(" ")[2] ?? "border-white/8"}`}>
              <div className={`flex items-center gap-2 mb-4 ${colors[category]?.split(" ")[0] ?? "text-white"}`}>
                {icons[category]}
                <h3 className="font-bold text-sm">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="v3-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
