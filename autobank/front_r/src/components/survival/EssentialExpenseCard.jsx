import { formatCurrency } from "../../utils/formatCurrency";
import Badge from "../common/Badge.jsx";

export default function EssentialExpenseCard({ item }) {
  return (
    <div className="essential-card">
      <div>
        <div style={{ fontWeight: 600, fontSize: 13.5 }}>{item.name}</div>
        <div className="text-faint" style={{ fontSize: 11.5 }}>{item.category}</div>
      </div>
      <div className="row gap-12">
        <span className="amt" style={{ fontSize: 13 }}>{formatCurrency(item.amount)}</span>
        <Badge tone={item.essential ? "green" : "amber"}>{item.essential ? "Essential" : "Paused"}</Badge>
      </div>
    </div>
  );
}
