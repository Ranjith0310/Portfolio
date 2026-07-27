import { GraduationCap } from "lucide-react";
import { getYearsOfExperience } from "../../lib/utils";
import { experience, summary } from "../../lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">About Me</h2>
      <p className="text-gray-300 leading-relaxed mb-12 max-w-3xl">
        {summary.replace("{exp}", getYearsOfExperience())}
      </p>

      <h3 className="text-xl font-semibold text-white mb-6">Experience</h3>
      <div className="flex flex-col gap-8">
        {experience.map(({ role, company, period, points }) => (
          <div key={role + period} className="border-l-2 border-indigo-600 pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <span className="text-white font-semibold">{role}</span>
                <span className="text-gray-400"> · {company}</span>
              </div>
              <span className="text-sm text-indigo-400 mt-1 md:mt-0">{period}</span>
            </div>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              {points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 text-gray-400 text-sm flex items-center gap-2">
        <GraduationCap size={16} className="text-indigo-400" />
        B.E. Computer Science and Engineering — St. Joseph College of Engineering (2019)
      </div>
    </section>
  );
}
