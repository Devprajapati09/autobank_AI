import { formatCurrency } from "../../utils/formatCurrency";

export default function SurvivalPlanCard({ plan }) {
  return (
    <div className="card">
      <h3 className="card-title" style={{ marginBottom: 12 }}>Your survival plan</h3>
      <ul className="stack gap-12">
        {plan.map((step, i) => (
          <li key={i} className="row gap-12">
            <div className="avatar" style={{ width: 26, height: 26, fontSize: 11, background: "var(--navy-200)", color: "var(--navy-900)" }}>
              {i + 1}
            </div>
            <span style={{ fontSize: 13.5 }}>{step}</span>
          </li>
        ))}
      </ul>
      <p className="text-faint" style={{ fontSize: 11.5, marginTop: 14 }}>
        Runway extended to cover essentials — recalculated as {formatCurrency(0)} changes hit your account.
      </p>
    </div>
  );
}
