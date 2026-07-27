import { GraduationCap } from "lucide-react";
import { experience, summary } from "../../lib/data";
import { getYearsOfExperience } from "../../lib/utils";

const rankColors: Record<string, string> = {
  "Associate Project Manager": "from-yellow-500 to-orange-500",
  "Senior Software Engineer":  "from-violet-500 to-purple-600",
  "Web Developer":             "from-sky-500 to-cyan-500",
};

export default function V2About() {
  return (
    <section id="about" className="relative py-28 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">About Me</p>
        <h2 className="text-5xl font-black text-white mb-6">
          The <span className="grad-text bold-underline">Story</span> So Far
        </h2>
        <p className="text-white/50 max-w-2xl leading-relaxed mb-16 text-sm">
          {summary.replace("{exp}", getYearsOfExperience())}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {experience.map(({ role, company, period, points }) => (
            <div key={role} className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4">
              <div className={`w-10 h-1.5 rounded-full bg-gradient-to-r ${rankColors[role] ?? "from-gray-500 to-gray-400"}`} />
              <div>
                <h3 className="text-white font-bold text-base">{role}</h3>
                <p className="text-white/40 text-xs mt-0.5">{company}</p>
                <p className={`text-xs font-semibold mt-1 bg-gradient-to-r ${rankColors[role] ?? "from-gray-400 to-gray-300"} bg-clip-text`} style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{period}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {points.map((p) => (
                  <li key={p} className="text-white/40 text-xs flex gap-2">
                    <span className="text-purple-400 mt-0.5">▸</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 glass rounded-2xl px-6 py-4 inline-flex items-center gap-3">
          <GraduationCap size={24} className="text-purple-400" />
          <div>
            <p className="text-white font-semibold text-sm">B.E. Computer Science and Engineering</p>
            <p className="text-white/40 text-xs">St. Joseph College of Engineering · 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
}
