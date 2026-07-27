"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSent(true);
    else setError("Failed to send. Please try again.");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-400 mb-8">Contact</h2>
        {sent ? (
          <p className="text-green-400 text-lg">✅ Message sent! I&apos;ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
            <input
              required
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
            <textarea
              required
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 resize-none"
            />
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 transition-colors py-3 rounded-lg font-semibold">
              Send Message
            </button>
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </form>
        )}

        <div className="mt-10 flex gap-6 text-gray-400">
          <a href="https://github.com/Ranjith0310" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GitHub</a>
          <a href="mailto:ranjithriyas48@gmail.com" className="hover:text-indigo-400 transition-colors">Email</a>
        </div>
      </div>
    </section>
  );
}
