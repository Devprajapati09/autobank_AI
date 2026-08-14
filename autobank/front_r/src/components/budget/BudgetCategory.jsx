import { formatCurrency } from "../../utils/formatCurrency";
import ProgressBar from "../common/ProgressBar.jsx";

export default function BudgetCategory({ category }) {
  const pct = Math.round((category.spent / category.limit) * 100);
  const tone = pct >= 100 ? "brick" : pct >= 80 ? "amber" : "";
  return (
    <div className="budget-cat-row">
      <span className="cat-name">{category.name}</span>
      <div className="bar-wrap"><ProgressBar value={category.spent} max={category.limit} tone={tone} /></div>
      <span className="cat-amt">{formatCurrency(category.spent)} / {formatCurrency(category.limit)}</span>
    </div>
  );
}
