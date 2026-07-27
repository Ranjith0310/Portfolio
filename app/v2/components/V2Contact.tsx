"use client";
import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

export default function V2Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) setSent(true);
    else setError("Failed to send. Please try again.");
  };

  return (
    <section id="contact" className="relative py-28 px-6 z-10">
      <div className="max-w-2xl mx-auto">
        <p className="section-label text-center">Get In Touch</p>
        <h2 className="text-5xl font-black text-white text-center mb-4">
          Let&apos;s <span className="grad-text bold-underline">Connect</span>
        </h2>
        <p className="text-white/40 text-center text-sm mb-12">Have a project in mind? Let&apos;s build something great together.</p>

        <div className="glass rounded-3xl p-8">
          {sent ? (
            <div className="text-center py-8">
              <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
              <p className="text-white font-bold text-lg">Message Sent!</p>
              <p className="text-white/40 text-sm mt-2">I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { key: "name", placeholder: "Your Name", type: "text" },
                  { key: "email", placeholder: "Your Email", type: "email" },
                ].map(({ key, placeholder, type }) => (
                  <input
                    key={key}
                    required
                    type={type}
                    placeholder={placeholder}
                    value={form[key as "name" | "email"]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/60 text-sm transition-colors"
                  />
                ))}
              </div>
              <textarea
                required
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/60 text-sm resize-none transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="grad-btn w-full disabled:opacity-50"
              >
                <span className="grad-btn-inner block text-center w-full">
                  {loading ? "Sending..." : <span className="flex items-center justify-center gap-2">Send Message <Send size={16} /></span>}
                </span>
              </button>
              {error && <p className="text-red-400 text-xs text-center">{error}</p>}
            </form>
          )}
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com/Ranjith0310" target="_blank" rel="noopener noreferrer"
            className="glass rounded-xl px-5 py-3 text-white/60 hover:text-white text-sm font-medium transition-all hover:scale-105">
            GitHub ↗
          </a>
          <a href="mailto:ranjithriyas48@gmail.com"
            className="glass rounded-xl px-5 py-3 text-white/60 hover:text-white text-sm font-medium transition-all hover:scale-105">
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}
