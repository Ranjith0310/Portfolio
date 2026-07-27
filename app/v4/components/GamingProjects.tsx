import { projects } from "../../lib/data";

const difficultyMap: Record<string, { difficulty: string; diffColor: string }> = {
  "AI-Powered Enterprise Document Search": { difficulty: "LEGENDARY", diffColor: "text-yellow-400 border-yellow-400/50" },
  "CRM System":                            { difficulty: "EPIC",      diffColor: "text-purple-400 border-purple-400/50" },
  "Electronic Point of Sale (EPOS)":       { difficulty: "EPIC",      diffColor: "text-purple-400 border-purple-400/50" },
  "Fusion Kitchen E-commerce":             { difficulty: "RARE",      diffColor: "text-cyan-400 border-cyan-400/50" },
  "Dynamic Page Builder":              { difficulty: "EPIC",      diffColor: "text-purple-400 border-purple-400/50" },
  "Travel Insurance Consultants":          { difficulty: "RARE",      diffColor: "text-cyan-400 border-cyan-400/50" },
};

export default function GamingProjects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-green-500/60 font-mono text-sm">// SECTION_04</span>
        <h2 className="text-3xl font-bold font-mono text-green-400 neon-text">COMPLETED_MISSIONS</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(({ title, description, tech }, i) => {
          const { difficulty, diffColor } = difficultyMap[title] ?? { difficulty: "COMMON", diffColor: "text-gray-400 border-gray-400/50" };
          const id = `MISSION_0${i + 1}`;
          return (
            <div key={id} className="border border-green-500/20 bg-black/60 rounded p-5 flex flex-col gap-3 hover:border-green-400/50 transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-green-500/40">{id}</span>
                <span className={`font-mono text-xs border px-2 py-0.5 ${diffColor}`}>{difficulty}</span>
              </div>
              <h3 className="font-mono font-bold text-white text-sm group-hover:text-green-400 transition-colors">{title}</h3>
              <p className="font-mono text-xs text-green-300/50 flex-1 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-1 pt-2 border-t border-green-500/10">
                {tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-2 py-0.5 bg-green-900/20 text-green-400/60 border border-green-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
