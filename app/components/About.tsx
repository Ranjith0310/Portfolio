function getYearsOfExperience() {
  const start = new Date(2021, 1);
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  return (months / 12).toFixed(1);
}

const experience = [
  {
    role: "Associate Project Manager",
    company: "Novac Technology Solutions Pvt. Ltd.",
    period: "Apr 2026 – Present",
    points: [
      "Lead project planning, execution, and delivery for enterprise web applications.",
      "Coordinate with clients, stakeholders, UI/UX designers, and development teams.",
      "Oversee AI-powered solutions using OpenAI APIs, Elasticsearch, RAG, and Ollama.",
      "Manage sprint planning, task allocation, and timelines using Agile methodologies.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Novac Technology Solutions Pvt. Ltd.",
    period: "Jun 2024 – Apr 2026",
    points: [
      "Developed scalable enterprise web apps using React.js, Next.js, Node.js, and Laravel.",
      "Integrated OpenAI APIs to deliver AI-powered application features.",
      "Implemented secure authentication using JWT and NextAuth.",
      "Improved application performance using Redis caching.",
    ],
  },
  {
    role: "Web Developer",
    company: "Fusion Innovative",
    period: "Feb 2021 – Jun 2024",
    points: [
      "Developed CRM, EPOS, and e-commerce applications using React.js and PHP.",
      "Integrated Stripe, PayPal, Klarna, and third-party delivery services.",
      "Built reusable UI components and REST APIs.",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">About Me</h2>
      <p className="text-gray-300 leading-relaxed mb-12 max-w-3xl">
        Senior Full Stack Developer with {getYearsOfExperience()}+ years of experience designing and delivering scalable enterprise web
        applications. Experienced in integrating Generative AI solutions using OpenAI APIs, RAG, Elasticsearch, and
        Ollama to build intelligent document search, AI-powered chatbots, and enterprise knowledge management solutions.
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

      <div className="mt-10 text-gray-400 text-sm">
        🎓 B.E. Computer Science and Engineering — St. Joseph College of Engineering (2019)
      </div>
    </section>
  );
}
