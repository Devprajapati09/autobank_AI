import { Link } from "react-router-dom";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

export default function RecentTransactions({ transactions }) {
  const recent = transactions.slice(0, 5);
  return (
    <div className="card">
      <div className="row-between" style={{ marginBottom: 8 }}>
        <h3 className="card-title">Recent transactions</h3>
        <Link to="/transactions" className="text-soft" style={{ fontSize: 12.5 }}>View all</Link>
      </div>
      {recent.map((tx) => (
        <div className="tx-row" key={tx.id}>
          <div className="tx-left">
            <div className="tx-icon">
              {tx.type === "credit" ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
            </div>
            <div>
              <div className="tx-name">{tx.name}</div>
              <div className="tx-meta">{tx.category} · {formatDate(tx.date)}</div>
            </div>
          </div>
          <div className={`tx-amt ${tx.type === "credit" ? "in" : "out"}`}>
            {tx.type === "credit" ? "+" : "−"}{formatCurrency(Math.abs(tx.amount))}
          </div>
        </div>
      ))}
    </div>
  );
}
