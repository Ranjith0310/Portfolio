export default function V3Footer() {
  return (
    <footer className="py-6 border-t border-white/5 text-center text-white/25 text-xs">
      © {new Date().getFullYear()} <span className="v3-grad font-semibold">Ranjith R</span> · Built with Next.js & Tailwind CSS
    </footer>
  );
}
