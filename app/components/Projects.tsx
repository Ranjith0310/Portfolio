const projects = [
  {
    title: "AI-Powered Enterprise Document Search",
    description: "Intelligent document search and knowledge management using OpenAI APIs, RAG, Elasticsearch, and Ollama.",
    tech: ["OpenAI API", "RAG", "Elasticsearch", "Ollama"],
  },
  {
    title: "CRM System",
    description: "Full-featured Customer Relationship Management system built with React.js and PHP.",
    tech: ["React.js", "PHP", "MySQL", "REST APIs"],
  },
  {
    title: "Electronic Point of Sale (EPOS)",
    description: "EPOS application with real-time inventory, sales tracking, and payment integrations.",
    tech: ["React.js", "Node.js", "Stripe", "MySQL"],
  },
  {
    title: "Fusion Kitchen E-commerce",
    description: "E-commerce platform with cart, Stripe/PayPal/Klarna payments, and third-party delivery integrations.",
    tech: ["React.js", "PHP", "Stripe", "PayPal", "Klarna"],
  },
  {
    title: "Travel Insurance Consultants",
    description: "Insurance platform with policy management, quote generation, and secure user authentication.",
    tech: ["React.js", "Laravel", "MySQL", "JWT"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-400 mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(({ title, description, tech }) => (
          <div key={title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-indigo-600 transition-colors">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm flex-1">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
