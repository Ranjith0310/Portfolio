import "./beta.css";

export const metadata = {
  title: "Ranjith R · Beta",
  description: "Gaming theme portfolio - beta version",
};

export default function BetaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="scanlines bg-black text-green-300 min-h-screen">
      {children}
    </div>
  );
}
