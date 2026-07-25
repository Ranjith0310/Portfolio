"use client";
import { useState } from "react";

export default function GamingContact() {
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
    else setError("TRANSMISSION_FAILED. Please try again.");
  };

  return (
    <section id="contact" className="py-24 px-6 grid-bg">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-green-500/60 font-mono text-sm">// SECTION_05</span>
          <h2 className="text-3xl font-bold font-mono text-green-400 neon-text">SEND_TRANSMISSION</h2>
        </div>

        <div className="border border-green-500/30 bg-black/80 rounded p-6">
          <div className="font-mono text-xs text-green-500/50 mb-4">
            <span>&gt; establishing secure channel...</span><br />
            <span>&gt; target: ranjithriyas48@gmail.com</span><br />
            <span>&gt; status: <span className="text-green-400">READY</span></span>
          </div>

          {sent ? (
            <div className="font-mono text-green-400 text-sm border border-green-400/30 p-4 rounded">
              <div className="text-green-500/60 mb-1">&gt; TRANSMISSION_STATUS</div>
              ✅ Message delivered successfully. Standing by for response...
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {[
                { key: "name", placeholder: "ENTER_CALLSIGN", type: "text" },
                { key: "email", placeholder: "ENTER_COMM_FREQUENCY", type: "email" },
              ].map(({ key, placeholder, type }) => (
                <div key={key} className="flex items-center border border-green-500/30 bg-black rounded focus-within:border-green-400 transition-colors">
                  <span className="font-mono text-green-500/60 text-xs px-3">&gt;</span>
                  <input
                    required
                    type={type}
                    placeholder={placeholder}
                    value={form[key as "name" | "email"]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="flex-1 bg-transparent py-3 pr-3 text-green-300 font-mono text-sm placeholder-green-500/30 focus:outline-none"
                  />
                </div>
              ))}
              <div className="border border-green-500/30 bg-black rounded focus-within:border-green-400 transition-colors">
                <div className="font-mono text-green-500/60 text-xs px-3 pt-3">&gt; MESSAGE_BODY:</div>
                <textarea
                  required
                  rows={4}
                  placeholder="TYPE_YOUR_MESSAGE_HERE..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent px-3 pb-3 pt-1 text-green-300 font-mono text-sm placeholder-green-500/30 focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="border border-green-400 text-green-400 font-mono text-sm py-3 hover:bg-green-400 hover:text-black transition-all tracking-widest neon-border disabled:opacity-50"
              >
                {loading ? "[ TRANSMITTING... ]" : "[ SEND_TRANSMISSION ]"}
              </button>
              {error && <p className="font-mono text-red-400 text-xs">&gt; ERROR: {error}</p>}
            </form>
          )}
        </div>

        <div className="mt-6 flex gap-6 font-mono text-xs">
          <a href="https://github.com/Ranjith0310" target="_blank" rel="noopener noreferrer" className="text-green-500/50 hover:text-green-400 transition-colors tracking-widest">
            [ GITHUB ]
          </a>
          <a href="mailto:ranjithriyas48@gmail.com" className="text-green-500/50 hover:text-green-400 transition-colors tracking-widest">
            [ EMAIL ]
          </a>
        </div>
      </div>
    </section>
  );
}
