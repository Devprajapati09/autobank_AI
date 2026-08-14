export default function AffordabilityScore({ score, disposable }) {
  const color = score >= 65 ? "var(--ledger-green)" : score >= 35 ? "var(--marigold)" : "var(--brick)";
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <span className="eyebrow">Affordability score</span>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 700, color, margin: "8px 0" }}>{score}</div>
      <p className="text-soft" style={{ fontSize: 13 }}>
        ₹{disposable.toLocaleString("en-IN")} disposable income/month after this EMI.
      </p>
    </div>
  );
}
