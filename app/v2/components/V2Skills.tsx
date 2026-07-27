import { Zap, Server, Brain, Database, ShieldCheck, Wrench } from "lucide-react";
import { skills } from "../../lib/data";

const icons: Record<string, React.ReactNode> = {
  "Frontend":        <Zap size={18} className="text-white" />,
  "Backend":         <Server size={18} className="text-white" />,
  "AI & Search":     <Brain size={18} className="text-white" />,
  "Database":        <Database size={18} className="text-white" />,
  "Auth & Security": <ShieldCheck size={18} className="text-white" />,
  "Tools":           <Wrench size={18} className="text-white" />,
};

const gradients: Record<string, string> = {
  "Frontend":       "from-violet-500 to-purple-600",
  "Backend":        "from-sky-500 to-blue-600",
  "AI & Search":    "from-pink-500 to-rose-600",
  "Database":       "from-emerald-500 to-teal-600",
  "Auth & Security":"from-orange-500 to-amber-500",
  "Tools":          "from-slate-400 to-slate-600",
};

export default function V2Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Technical Skills</p>
        <h2 className="text-5xl font-black text-white mb-16">
          My <span className="grad-text-2 bold-underline">Arsenal</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map(({ category, items }) => (
            <div key={category} className="glass glass-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[category] ?? "from-gray-500 to-gray-600"} flex items-center justify-center`}>
                  {icons[category] ?? <Zap size={18} className="text-white" />}
                </div>
                <h3 className="text-white font-bold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
