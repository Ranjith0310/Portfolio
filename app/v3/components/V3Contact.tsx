"use client";
import { useState } from "react";
import Lottie from "./Lottie";
import { Send } from "lucide-react";

// Lottie: mail/contact animation
const MAIL_LOTTIE = "/lottie/mail.json";
const SUCCESS_LOTTIE = "/lottie/success.json";

export default function V3Contact() {
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
    <section
      id="contact"
      className="py-28 px-6 bg-white/[0.02] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="v3-label mb-3">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Let&apos;s <span className="v3-grad">Work Together</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Have a project in mind or want to collaborate? Drop me a message
              and I&apos;ll get back to you.
            </p>
            <Lottie src={MAIL_LOTTIE} className="w-56 h-56" />
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/Ranjith0310"
                target="_blank"
                rel="noopener noreferrer"
                className="v3-btn-outline !py-2 !px-4 text-xs"
              >
                GitHub ↗
              </a>
              <a
                href="mailto:ranjithriyas48@gmail.com"
                className="v3-btn-outline !py-2 !px-4 text-xs"
              >
                Email ↗
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="v3-card p-8">
            {sent ? (
              <div className="text-center py-4">
                <Lottie src={SUCCESS_LOTTIE} className="w-40 h-40 mx-auto" />
                <p className="text-white font-bold text-lg mt-2">
                  Message Sent!
                </p>
                <p className="text-white/40 text-sm mt-1">
                  I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-indigo-500/50 text-sm transition-colors"
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-indigo-500/50 text-sm transition-colors"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-indigo-500/50 text-sm resize-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="v3-btn w-full text-center flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>
                {error && (
                  <p className="text-red-400 text-xs text-center">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
