import ProgressBar from "../common/ProgressBar.jsx";

export default function SavingsProgress({ label, current, target }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div className="row-between" style={{ marginBottom: 6 }}>
        <span className="text-soft" style={{ fontSize: 13 }}>{label}</span>
        <span className="amt" style={{ fontSize: 13 }}>{Math.round((current / target) * 100)}%</span>
      </div>
      <ProgressBar value={current} max={target} />
    </div>
  );
}
