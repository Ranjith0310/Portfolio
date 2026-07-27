export default function V2Footer() {
  return (
    <footer className="relative z-10 py-8 border-t border-white/10 text-center text-white/30 text-xs">
      © {new Date().getFullYear()} <span className="grad-text font-semibold">Ranjith R</span> · Built with Next.js & Tailwind CSS
    </footer>
  );
}
