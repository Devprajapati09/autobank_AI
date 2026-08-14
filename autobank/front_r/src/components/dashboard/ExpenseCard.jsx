import { TrendingDown } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function ExpenseCard({ amount }) {
  return (
    <div className="card stat-card">
      <div className="stat-icon brick"><TrendingDown size={17} /></div>
      <div className="label">Monthly expenses</div>
      <div className="value">{formatCurrency(amount)}</div>
    </div>
  );
}
