import "./v4.css";

export const metadata = {
  title: "Ranjith R · Beta | Gaming Theme Portfolio",
  description: "Beta version of Ranjith R's portfolio with a gaming theme — Senior Full Stack Developer & Associate Project Manager.",
};

export default function BetaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="scanlines bg-black text-green-300 min-h-screen">
      {children}
    </div>
  );
}
