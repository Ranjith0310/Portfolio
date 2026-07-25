function getYearsOfExperience() {
  const start = new Date(2021, 1); // Feb 2021
  const now = new Date();
  const years = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  return (years / 12).toFixed(1);
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <div className="w-28 h-28 rounded-full bg-indigo-600 flex items-center justify-center text-5xl mb-6 shadow-lg shadow-indigo-500/30">
        👨‍💻
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        Hi, I&apos;m <span className="text-indigo-400">Ranjith R</span>
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl mb-2">
        Associate Project Manager · Senior Full Stack Developer
      </p>
      <p className="text-sm text-gray-500 max-w-xl mb-2">
        React.js · Next.js · Node.js · Express.js · Laravel · Generative AI
      </p>
      <p className="text-sm text-indigo-400/70 mb-8">{getYearsOfExperience()}+ years of experience</p>
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-colors">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 border border-indigo-600 hover:bg-indigo-600/20 rounded-lg font-semibold transition-colors">
          Contact Me
        </a>
      </div>
    </section>
  );
}
