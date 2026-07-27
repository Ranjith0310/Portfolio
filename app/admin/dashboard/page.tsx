"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Email = {
  id: string;
  from: string;
  to: string[];
  subject: string;
  created_at: string;
  last_event: string;
};

type EmailDetail = Email & {
  text?: string;
  html?: string;
};

const statusColor: Record<string, string> = {
  delivered: "text-green-400 bg-green-400/10 border-green-400/30",
  sent:      "text-blue-400 bg-blue-400/10 border-blue-400/30",
  opened:    "text-indigo-400 bg-indigo-400/10 border-indigo-400/30",
  clicked:   "text-purple-400 bg-purple-400/10 border-purple-400/30",
  bounced:   "text-red-400 bg-red-400/10 border-red-400/30",
  failed:    "text-red-400 bg-red-400/10 border-red-400/30",
};

export default function AdminDashboard() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<EmailDetail | null>(null);
  const [modalLoading, setModalLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/admin/emails", { signal: controller.signal })
      .then((r) => {
        if (r.status === 401) { router.push("/admin"); return null; }
        return r.json();
      })
      .then((data) => {
        if (!data) return;
        if (data.error) setError("Failed to load emails.");
        else setEmails(data.data ?? data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError("Failed to load emails.");
      });
    return () => controller.abort();
  }, [router]);

  const openEmail = async (id: string) => {
    setModalLoading(true);
    setSelected(null);
    const res = await fetch(`/api/admin/emails/${id}`);
    const data = await res.json();
    setSelected(data);
    setModalLoading(false);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-500 text-xs mt-0.5">Resend Email Logs</p>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-400 hover:text-red-400 transition-colors border border-gray-700 hover:border-red-400/50 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Sent",  value: emails.length },
            { label: "Delivered",   value: emails.filter((e) => e.last_event === "delivered").length },
            { label: "Opened",      value: emails.filter((e) => e.last_event === "opened").length },
            { label: "Failed",      value: emails.filter((e) => ["bounced", "failed"].includes(e.last_event)).length },
          ].map(({ label, value }) => (
            <div key={label} className="border border-gray-800 rounded-xl bg-gray-900 p-4">
              <div className="text-2xl font-bold text-indigo-400">{loading ? "—" : value}</div>
              <div className="text-gray-500 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="border border-gray-800 rounded-xl bg-gray-900 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
            <h2 className="font-semibold text-sm">Email Logs</h2>
            <span className="text-gray-500 text-xs">{emails.length} records</span>
          </div>

          {loading && (
            <div className="px-6 py-12 text-center text-gray-500 text-sm">Loading logs...</div>
          )}
          {!loading && error && (
            <div className="px-6 py-12 text-center text-red-400 text-sm">{error}</div>
          )}
          {!loading && !error && emails.length === 0 && (
            <div className="px-6 py-12 text-center text-gray-500 text-sm">No emails found.</div>
          )}
          {!loading && !error && emails.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800 text-gray-500 text-xs uppercase tracking-wider">
                    <th className="px-6 py-3 text-left">Subject</th>
                    <th className="px-6 py-3 text-left">To</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Date</th>
                    <th className="px-6 py-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {emails.map((email) => (
                    <tr key={email.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4 text-white font-medium max-w-xs truncate">{email.subject}</td>
                      <td className="px-6 py-4 text-gray-400">{email.to?.[0]}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full border capitalize ${statusColor[email.last_event] ?? "text-gray-400 bg-gray-400/10 border-gray-400/30"}`}>
                          {email.last_event}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-xs">
                        {new Date(email.created_at).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => openEmail(email.id)}
                          className="text-xs text-indigo-400 hover:text-indigo-300 border border-indigo-400/30 hover:border-indigo-400/60 px-3 py-1 rounded-lg transition-colors"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {(modalLoading || selected) && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
              <h3 className="font-semibold text-white text-sm">{selected?.subject ?? "Loading..."}</h3>
              <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-white transition-colors text-lg">✕</button>
            </div>

            {modalLoading && (
              <div className="px-6 py-12 text-center text-gray-500 text-sm">Loading email...</div>
            )}

            {selected && (
              <>
                {/* Meta */}
                <div className="px-6 py-3 border-b border-gray-800 flex flex-col gap-1 text-xs text-gray-400">
                  <div><span className="text-gray-600">From:</span> {selected.from}</div>
                  <div><span className="text-gray-600">To:</span> {selected.to?.[0]}</div>
                  <div><span className="text-gray-600">Date:</span> {new Date(selected.created_at).toLocaleString()}</div>
                </div>

                {/* Body */}
                <div className="px-6 py-5 overflow-y-auto flex-1">
                  {selected.text ? (
                    <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">{selected.text}</pre>
                  ) : selected.html ? (
                    <iframe srcDoc={selected.html} className="w-full h-96 rounded-lg border border-gray-700 bg-white" title="Email body" />
                  ) : (
                    <p className="text-gray-500 text-sm">No body content available.</p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
