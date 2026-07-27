import { skills } from "../../lib/data";

const iconMap: Record<string, string> = {
  "Frontend":        "⚔️",
  "Backend":         "🛡️",
  "AI & Search":     "🧠",
  "Database":        "💾",
  "Auth & Security": "🔐",
  "Tools":           "🔧",
};

export default function GamingSkills() {
  return (
    <section id="skills" className="py-24 px-6 grid-bg">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-green-500/60 font-mono text-sm">// SECTION_03</span>
          <h2 className="text-3xl font-bold font-mono text-green-400 neon-text">SKILL_TREE</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {skills.map(({ category, items }) => (
            <div key={category} className="border border-green-500/20 bg-black/60 rounded p-5 hover:border-green-400/60 transition-colors group">
              <div className="flex items-center gap-2 mb-4">
                <span>{iconMap[category]}</span>
                <h3 className="font-mono text-sm font-bold text-green-400 tracking-widest group-hover:neon-text">{category.toUpperCase()}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="font-mono text-xs px-2 py-1 border border-green-500/30 text-green-300/70 hover:border-green-400 hover:text-green-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
