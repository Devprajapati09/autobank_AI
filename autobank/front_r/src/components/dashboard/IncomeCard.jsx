import { TrendingUp } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function IncomeCard({ amount }) {
  return (
    <div className="card stat-card">
      <div className="stat-icon green"><TrendingUp size={17} /></div>
      <div className="label">Monthly income</div>
      <div className="value">{formatCurrency(amount)}</div>
    </div>
  );
}
