export const metadata = {
  title: "Ranjith R · v1 | Full Stack Developer Portfolio",
  description: "Portfolio of Ranjith R — Senior Full Stack Developer & Associate Project Manager.",
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-950 text-white min-h-screen">{children}</div>;
}
