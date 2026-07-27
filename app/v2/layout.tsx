import "./v2.css";

export const metadata = {
  title: "Ranjith R · v2 | Bold & Creative Portfolio",
  description: "Bold & Glassmorphism portfolio of Ranjith R — Senior Full Stack Developer & Associate Project Manager.",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0a0612] text-white min-h-screen relative overflow-x-hidden">
      {/* Floating background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      {children}
    </div>
  );
}
