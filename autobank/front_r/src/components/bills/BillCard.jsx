import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate, daysUntil } from "../../utils/formatDate";
import Badge from "../common/Badge.jsx";
import Button from "../common/Button.jsx";

export default function BillCard({ bill, onMarkPaid }) {
  const days = daysUntil(bill.dueDate);
  const tone = bill.status === "paid" ? "green" : days <= 3 ? "amber" : "neutral";
  const label = bill.status === "paid" ? "Paid" : days <= 0 ? "Due today" : `Due in ${days}d`;

  return (
    <div className="card row-between">
      <div>
        <div style={{ fontWeight: 600, fontSize: 14.5 }}>{bill.name}</div>
        <div className="text-faint" style={{ fontSize: 12, marginTop: 2 }}>{bill.category} · {formatDate(bill.dueDate)}</div>
        {bill.autopay && <Badge tone="green" style={{ marginTop: 6 }}>Autopay on</Badge>}
      </div>
      <div style={{ textAlign: "right" }}>
        <div className="amt" style={{ fontSize: 16 }}>{formatCurrency(bill.amount)}</div>
        <Badge tone={tone}>{label}</Badge>
        {bill.status !== "paid" && (
          <div style={{ marginTop: 8 }}>
            <Button size="sm" variant="ghost" onClick={() => onMarkPaid?.(bill.id)}>Mark paid</Button>
          </div>
        )}
      </div>
    </div>
  );
}
