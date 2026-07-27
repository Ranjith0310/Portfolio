import { GraduationCap } from "lucide-react";
import { getYearsOfExperience } from "../../lib/utils";
import { experience, summary } from "../../lib/data";

const rankMap: Record<string, { rank: string; color: string; border: string }> = {
  "Associate Project Manager": { rank: "S-RANK", color: "text-yellow-400", border: "border-yellow-400/50" },
  "Senior Software Engineer":  { rank: "A-RANK", color: "text-green-400",  border: "border-green-400/50" },
  "Web Developer":             { rank: "B-RANK", color: "text-cyan-400",   border: "border-cyan-400/50" },
};

export default function GamingAbout() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-green-500/60 font-mono text-sm">// SECTION_02</span>
        <h2 className="text-3xl font-bold font-mono text-green-400 neon-text">PLAYER_PROFILE</h2>
      </div>

      <div className="border border-green-500/20 rounded bg-black/40 p-6 mb-10 font-mono text-sm">
        <div className="text-green-500/60 mb-2">&gt; loading profile data...</div>
        <p className="text-green-300/80 leading-relaxed">
          {summary.replace("{exp}", getYearsOfExperience())}
        </p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <span className="text-green-500/60 font-mono text-sm">// MISSION_LOG</span>
        <h3 className="text-xl font-bold font-mono text-white">QUEST_HISTORY</h3>
      </div>

      <div className="flex flex-col gap-6">
        {experience.map(({ role, company, period, points }) => {
          const { rank, color, border } = rankMap[role] ?? { rank: "C-RANK", color: "text-gray-400", border: "border-gray-400/50" };
          return (
            <div key={role} className={`border ${border} bg-black/40 rounded p-5`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 border ${border} ${color}`}>{rank}</span>
                  <div>
                    <span className="text-white font-mono font-bold">{role}</span>
                    <span className="text-green-500/60 font-mono text-sm"> · {company}</span>
                  </div>
                </div>
                <span className={`font-mono text-xs ${color} mt-2 md:mt-0`}>{period}</span>
              </div>
              <ul className="space-y-1">
                {points.map((p) => (
                  <li key={p} className="font-mono text-xs text-green-300/60 flex gap-2">
                    <span className="text-green-500">▸</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-8 border border-green-500/20 bg-black/40 rounded p-4 font-mono text-xs text-green-500/60 flex items-center gap-2">
        <GraduationCap size={14} className="text-green-400" />
        EDUCATION_UNLOCKED: B.E. Computer Science and Engineering — St. Joseph College of Engineering (2019)
      </div>
    </section>
  );
}
