import { skills } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-400 mb-10">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map(({ category, items }) => (
            <div key={category} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm border border-indigo-600/30">
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
