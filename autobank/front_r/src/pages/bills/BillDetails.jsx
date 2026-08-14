import { useParams } from "react-router-dom";
import { useFinance } from "../../hooks/useFinance";
import BillCard from "../../components/bills/BillCard.jsx";
import EmptyState from "../../components/common/EmptyState.jsx";

export default function BillDetails() {
  const { billId } = useParams();
  const { bills, markBillPaid } = useFinance();
  const bill = bills.find((b) => b.id === billId);

  if (!bill) return <EmptyState title="Bill not found" />;

  return (
    <>
      <div className="page-head"><div><h1>{bill.name}</h1><p className="sub">Bill details and payment history.</p></div></div>
      <div style={{ maxWidth: 420 }}>
        <BillCard bill={bill} onMarkPaid={markBillPaid} />
      </div>
    </>
  );
}
