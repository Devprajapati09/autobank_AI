export default function FinancialHealth({ score }) {
  const circumference = 2 * Math.PI * 46;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 70 ? "var(--ledger-green)" : score >= 45 ? "var(--marigold)" : "var(--brick)";

  return (
    <div className="card">
      <h3 className="card-title" style={{ marginBottom: 16 }}>Financial health</h3>
      <div className="health-ring-wrap">
        <svg width="104" height="104" viewBox="0 0 104 104">
          <circle cx="52" cy="52" r="46" fill="none" stroke="var(--paper-dim)" strokeWidth="9" />
          <circle
            cx="52" cy="52" r="46" fill="none" stroke={color} strokeWidth="9"
            strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
            transform="rotate(-90 52 52)" style={{ transition: "stroke-dashoffset 0.8s ease" }}
          />
        </svg>
        <div>
          <div className="health-score">{score}</div>
          <p className="text-soft" style={{ fontSize: 12.5, maxWidth: 160 }}>
            {score >= 70 ? "Strong — on track for your goals." : score >= 45 ? "Fair — a few tweaks will help." : "Needs attention this month."}
          </p>
        </div>
      </div>
    </div>
  );
}
