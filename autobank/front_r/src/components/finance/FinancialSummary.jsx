import { formatCurrency } from "../../utils/formatCurrency";

export default function FinancialSummary({ income, expenses, savings }) {
  const rows = [
    { label: "Monthly income", value: income },
    { label: "Monthly expenses", value: -expenses },
    { label: "Net savings", value: savings },
  ];
  return (
    <div className="card">
      <h3 className="card-title" style={{ marginBottom: 14 }}>Financial summary</h3>
      {rows.map((r) => (
        <div key={r.label} className="row-between" style={{ padding: "9px 0", borderBottom: "1px solid var(--hairline)" }}>
          <span className="text-soft" style={{ fontSize: 13.5 }}>{r.label}</span>
          <span className="amt" style={{ color: r.value < 0 ? "var(--brick)" : "var(--ink)" }}>
            {r.value < 0 ? "−" : ""}{formatCurrency(Math.abs(r.value))}
          </span>
        </div>
      ))}
    </div>
  );
}
