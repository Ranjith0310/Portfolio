import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ranjith R | Associate Project Manager & Senior Full Stack Developer",
  description:
    "Portfolio of Ranjith R — Senior Full Stack Developer with 4.5+ years of experience in React.js, Next.js, Node.js, Laravel, and Generative AI solutions.",
  keywords: [
    "Ranjith R",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Laravel",
    "Generative AI",
    "OpenAI",
    "RAG",
    "Elasticsearch",
    "Associate Project Manager",
  ],
  authors: [{ name: "Ranjith R", url: "https://github.com/Ranjith0310" }],
  openGraph: {
    title: "Ranjith R | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in React.js, Next.js, Node.js, Laravel, and Generative AI.",
    url: "https://github.com/Ranjith0310",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ranjith R | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in React.js, Next.js, Node.js, Laravel, and Generative AI.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>{children}</body>
    </html>
  );
}
