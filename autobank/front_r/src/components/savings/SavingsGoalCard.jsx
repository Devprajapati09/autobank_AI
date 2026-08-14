import { Target } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";
import ProgressBar from "../common/ProgressBar.jsx";

export default function SavingsGoalCard({ goal }) {
  const pct = Math.round((goal.saved / goal.target) * 100);
  return (
    <div className="card goal-card">
      <div className="goal-icon"><Target size={19} /></div>
      <div style={{ fontWeight: 600, fontSize: 15 }}>{goal.name}</div>
      <div style={{ margin: "10px 0" }}><ProgressBar value={goal.saved} max={goal.target} /></div>
      <div className="row-between">
        <span className="text-faint" style={{ fontSize: 12 }}>{formatCurrency(goal.saved)}</span>
        <span className="text-faint" style={{ fontSize: 12 }}>{pct}% of {formatCurrency(goal.target)}</span>
      </div>
    </div>
  );
}
