import { CheckCircle2, AlertCircle } from "lucide-react";

export default function VerificationResult({ result }) {
  const ok = result.status === "verified";
  return (
    <div className="card">
      <div className="row gap-8" style={{ color: ok ? "var(--ledger-green)" : "var(--marigold-deep)" }}>
        {ok ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
        <span style={{ fontWeight: 600 }}>{ok ? "Document verified" : "Needs attention"}</span>
      </div>
      <p className="text-soft" style={{ fontSize: 13, marginTop: 8 }}>{result.message}</p>
    </div>
  );
}
