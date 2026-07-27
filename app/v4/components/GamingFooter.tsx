export default function GamingFooter() {
  return (
    <footer className="py-6 border-t border-green-500/20 font-mono text-xs text-green-500/40 text-center">
      <span className="text-green-500/60">&gt; </span>
      © {new Date().getFullYear()} RANJITH_R · BUILT_WITH Next.js & Tailwind CSS
      <span className="cursor-blink ml-1">_</span>
    </footer>
  );
}
