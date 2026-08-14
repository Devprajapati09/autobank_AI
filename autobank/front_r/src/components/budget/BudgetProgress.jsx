import ProgressBar from "../common/ProgressBar.jsx";

export default function BudgetProgress({ pct }) {
  const tone = pct >= 100 ? "brick" : pct >= 80 ? "amber" : "";
  return (
    <div>
      <div className="row-between" style={{ marginBottom: 6 }}>
        <span className="text-soft" style={{ fontSize: 13 }}>Overall budget used</span>
        <span className="amt" style={{ fontSize: 13 }}>{pct}%</span>
      </div>
      <ProgressBar value={pct} max={100} tone={tone} />
    </div>
  );
}
