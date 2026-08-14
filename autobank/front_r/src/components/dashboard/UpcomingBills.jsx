import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate, daysUntil } from "../../utils/formatDate";
import Badge from "../common/Badge.jsx";

export default function UpcomingBills({ bills }) {
  const upcoming = bills.filter((b) => b.status !== "paid").slice(0, 4);
  return (
    <div className="card">
      <div className="row-between" style={{ marginBottom: 8 }}>
        <h3 className="card-title">Upcoming bills</h3>
        <Link to="/bills" className="text-soft" style={{ fontSize: 12.5 }}>View all</Link>
      </div>
      {upcoming.map((b) => {
        const days = daysUntil(b.dueDate);
        return (
          <div className="bill-row" key={b.id}>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600 }}>{b.name}</div>
              <div className="text-faint" style={{ fontSize: 11.5 }}>Due {formatDate(b.dueDate)}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="amt">{formatCurrency(b.amount)}</div>
              <Badge tone={days <= 3 ? "amber" : "neutral"}>{days <= 0 ? "Due today" : `${days}d left`}</Badge>
            </div>
          </div>
        );
      })}
    </div>
  );
}
