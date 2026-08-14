import { formatCurrency } from "../../utils/formatCurrency";
import ProgressBar from "../common/ProgressBar.jsx";

export default function GoalCard({ goal }) {
  const pct = Math.round((goal.saved / goal.target) * 100);
  return (
    <div className="card goal-card">
      <div className="row-between" style={{ marginBottom: 6 }}>
        <span style={{ fontWeight: 600, fontSize: 14.5 }}>{goal.name}</span>
        <span className="text-faint" style={{ fontSize: 12 }}>{pct}%</span>
      </div>
      <ProgressBar value={goal.saved} max={goal.target} />
      <div className="goal-target">{formatCurrency(goal.saved)} of {formatCurrency(goal.target)}</div>
    </div>
  );
}
