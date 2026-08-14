import { useFinance } from "../../hooks/useFinance";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import EmptyState from "../../components/common/EmptyState.jsx";

export default function PaymentHistory() {
  const { bills } = useFinance();
  const paid = bills.filter((b) => b.status === "paid");

  return (
    <>
      <div className="page-head"><div><h1>Payment history</h1><p className="sub">Bills AutoBank AI has settled for you.</p></div></div>
      {paid.length === 0 ? (
        <EmptyState title="No payments yet" body="Paid bills will show up here." />
      ) : (
        <div className="card">
          {paid.map((b) => (
            <div key={b.id} className="row-between" style={{ padding: "10px 0", borderBottom: "1px solid var(--hairline)" }}>
              <span style={{ fontSize: 13.5 }}>{b.name}</span>
              <span className="text-faint" style={{ fontSize: 12 }}>{formatDate(b.dueDate)}</span>
              <span className="amt">{formatCurrency(b.amount)}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
