import { useParams } from "react-router-dom";
import { useFinance } from "../../hooks/useFinance";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

export default function TransactionDetails() {
  const { id } = useParams();
  const { transactions } = useFinance();
  const tx = transactions.find((t) => t.id === id) || transactions[0];

  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Transaction details</h1></div>
      <div className="card" style={{ maxWidth: 420 }}>
        <div className="row-between" style={{ marginBottom: 14 }}>
          <span style={{ fontWeight: 600, fontSize: 16 }}>{tx.name}</span>
          <span className={`amt ${tx.type === "credit" ? "text-green" : ""}`}>
            {tx.type === "credit" ? "+" : "−"}{formatCurrency(Math.abs(tx.amount))}
          </span>
        </div>
        <div className="row-between" style={{ padding: "8px 0", borderTop: "1px solid var(--hairline)" }}>
          <span className="text-faint" style={{ fontSize: 12.5 }}>Category</span>
          <span style={{ fontSize: 13 }}>{tx.category}</span>
        </div>
        <div className="row-between" style={{ padding: "8px 0", borderTop: "1px solid var(--hairline)" }}>
          <span className="text-faint" style={{ fontSize: 12.5 }}>Date</span>
          <span style={{ fontSize: 13 }}>{formatDate(tx.date, { withYear: true })}</span>
        </div>
      </div>
    </div>
  );
}
