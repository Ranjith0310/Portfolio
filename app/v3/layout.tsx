import "./v3.css";

export const metadata = {
  title: "Ranjith R · v3 | Lottie Portfolio",
  description: "Lottie-animated portfolio of Ranjith R — Senior Full Stack Developer & Associate Project Manager.",
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#080b14] text-white min-h-screen">
      {children}
    </div>
  );
}
