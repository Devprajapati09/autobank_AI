import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

export default function TransactionCard({ tx }) {
  return (
    <div className="tx-row">
      <div className="tx-left">
        <div className="tx-icon">
          {tx.type === "credit" ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
        </div>
        <div>
          <div className="tx-name">{tx.name}</div>
          <div className="tx-meta">{tx.category} · {formatDate(tx.date, { withYear: true })}</div>
        </div>
      </div>
      <div className={`tx-amt ${tx.type === "credit" ? "in" : "out"}`}>
        {tx.type === "credit" ? "+" : "−"}{formatCurrency(Math.abs(tx.amount))}
      </div>
    </div>
  );
}
