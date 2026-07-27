import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center text-center px-6">
      <p className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
        404
      </p>
      <h1 className="text-2xl font-bold text-white mb-2">Page Not Found</h1>
      <p className="text-white/40 text-sm mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
      >
        Go Home
      </Link>
    </main>
  );
}
