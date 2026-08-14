import { CheckCircle2 } from "lucide-react";

export default function EligibilityResult({ scheme }) {
  return (
    <div className="card" style={{ textAlign: "center", padding: 32 }}>
      <CheckCircle2 size={28} color="var(--ledger-green)" style={{ marginBottom: 10 }} />
      <h2 style={{ fontSize: 20, marginBottom: 8 }}>You're eligible</h2>
      <p className="text-soft" style={{ fontSize: 13.5 }}>
        You meet {scheme?.matchPct ?? 90}% of the criteria for {scheme?.name ?? "this scheme"}.
      </p>
    </div>
  );
}
