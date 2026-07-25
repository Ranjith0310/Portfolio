const projects = [
  {
    id: "MISSION_01",
    title: "AI-Powered Enterprise Document Search",
    description: "Intelligent document search and knowledge management using OpenAI APIs, RAG, Elasticsearch, and Ollama.",
    tech: ["OpenAI API", "RAG", "Elasticsearch", "Ollama"],
    difficulty: "LEGENDARY",
    diffColor: "text-yellow-400 border-yellow-400/50",
  },
  {
    id: "MISSION_02",
    title: "CRM System",
    description: "Full-featured Customer Relationship Management system built with React.js and PHP.",
    tech: ["React.js", "PHP", "MySQL", "REST APIs"],
    difficulty: "EPIC",
    diffColor: "text-purple-400 border-purple-400/50",
  },
  {
    id: "MISSION_03",
    title: "Electronic Point of Sale (EPOS)",
    description: "EPOS application with real-time inventory, sales tracking, and payment integrations.",
    tech: ["React.js", "Node.js", "Stripe", "MySQL"],
    difficulty: "EPIC",
    diffColor: "text-purple-400 border-purple-400/50",
  },
  {
    id: "MISSION_04",
    title: "Fusion Kitchen E-commerce",
    description: "E-commerce platform with cart, Stripe/PayPal/Klarna payments, and third-party delivery integrations.",
    tech: ["React.js", "PHP", "Stripe", "PayPal", "Klarna"],
    difficulty: "RARE",
    diffColor: "text-cyan-400 border-cyan-400/50",
  },
  {
    id: "MISSION_05",
    title: "Travel Insurance Consultants",
    description: "Insurance platform with policy management, quote generation, and secure user authentication.",
    tech: ["React.js", "Laravel", "MySQL", "JWT"],
    difficulty: "RARE",
    diffColor: "text-cyan-400 border-cyan-400/50",
  },
];

export default function GamingProjects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-green-500/60 font-mono text-sm">// SECTION_04</span>
        <h2 className="text-3xl font-bold font-mono text-green-400 neon-text">COMPLETED_MISSIONS</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(({ id, title, description, tech, difficulty, diffColor }) => (
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
        ))}
      </div>
    </section>
  );
}
