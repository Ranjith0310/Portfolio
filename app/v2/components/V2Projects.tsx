import { Bot, Users, Monitor, UtensilsCrossed, Layout, Plane } from "lucide-react";
import { projects } from "../../lib/data";

const projectIcons = [<Bot key="bot" size={22} className="text-white" />, <Users key="users" size={22} className="text-white" />, <Monitor key="monitor" size={22} className="text-white" />, <UtensilsCrossed key="food" size={22} className="text-white" />, <Layout key="layout" size={22} className="text-white" />, <Plane key="plane" size={22} className="text-white" />];

const accents = [
  "from-violet-500 to-purple-600",
  "from-pink-500 to-rose-500",
  "from-sky-500 to-blue-600",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-fuchsia-500 to-pink-600",
];

export default function V2Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Portfolio</p>
        <h2 className="text-5xl font-black text-white mb-16">
          Featured <span className="grad-text bold-underline">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, tech }, i) => (
            <div key={title} className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4 group">
              <div className={`w-full h-1.5 rounded-full bg-gradient-to-r ${accents[i % accents.length]}`} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accents[i % accents.length]} flex items-center justify-center`}>
                {projectIcons[i % projectIcons.length]}
              </div>
              <h3 className="text-white font-bold text-base group-hover:grad-text transition-all">{title}</h3>
              <p className="text-white/40 text-xs leading-relaxed flex-1">{description}</p>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                {tech.map((t) => (
                  <span key={t} className="pill text-xs">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
