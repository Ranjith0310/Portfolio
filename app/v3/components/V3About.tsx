import Lottie from "./Lottie";
import { experience, summary } from "../../lib/data";
import { getYearsOfExperience } from "../../lib/utils";
import { GraduationCap } from "lucide-react";

// Lottie: working/office animation
const WORK_LOTTIE = "/lottie/working.json";

const experienceLottie: Record<string, string> = {
  "Associate Project Manager": "/lottie/manager3.json",
  "Senior Software Engineer":  "/lottie/developer2.json",
  "Web Developer":             "/lottie/webdev.json",
};

const accent: Record<string, string> = {
  "Associate Project Manager": "bg-yellow-500",
  "Senior Software Engineer":  "bg-violet-500",
  "Web Developer":             "bg-sky-500",
};

export default function V3About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <p className="v3-label mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Passionate about <span className="v3-grad">building</span> great products
          </h2>
          <p className="text-white/40 text-sm leading-relaxed">
            {summary.replace("{exp}", getYearsOfExperience())}
          </p>
          <div className="mt-6 flex items-center gap-3 v3-card p-4 inline-flex">
            <GraduationCap size={20} className="text-indigo-400 shrink-0" />
            <div>
              <p className="text-white text-sm font-semibold">B.E. Computer Science & Engineering</p>
              <p className="text-white/40 text-xs">St. Joseph College of Engineering · 2019</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Lottie src={WORK_LOTTIE} className="w-full max-w-sm" />
        </div>
      </div>

      {/* Experience timeline */}
      <p className="v3-label mb-8">Experience</p>
      <div className="flex flex-col gap-6">
        {experience.map(({ role, company, period, points }) => (
          <div key={role} className="v3-card p-6 flex gap-5">
            <div className="flex flex-col items-center gap-1 pt-1">
              <div className={`w-3 h-3 rounded-full shrink-0 ${accent[role] ?? "bg-gray-500"}`} />
              <div className="w-px flex-1 bg-white/5" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-white font-bold">{role}</h3>
                  <p className="text-white/40 text-xs mt-0.5">{company}</p>
                </div>
                <span className="text-indigo-400 text-xs font-semibold mt-1 md:mt-0">{period}</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <ul className="flex flex-col gap-1.5 flex-1">
                  {points.map((p) => (
                    <li key={p} className="text-white/40 text-xs flex gap-2">
                      <span className="text-indigo-400 shrink-0">▸</span>{p}
                    </li>
                  ))}
                </ul>
                {experienceLottie[role] && (
                  <Lottie src={experienceLottie[role]} className="w-28 h-28 shrink-0" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
