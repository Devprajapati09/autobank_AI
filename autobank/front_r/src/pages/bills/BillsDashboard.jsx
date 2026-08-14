import { Link } from "react-router-dom";
import { useFinance } from "../../hooks/useFinance";
import BillCard from "../../components/bills/BillCard.jsx";
import Button from "../../components/common/Button.jsx";

export default function BillsDashboard() {
  const { bills, markBillPaid } = useFinance();
  return (
    <>
      <div className="page-head">
        <div><h1>Bills</h1><p className="sub">Never miss a due date again.</p></div>
        <Link to="/bills/add"><Button variant="primary">Add bill</Button></Link>
      </div>
      <div className="grid grid-2">
        {bills.map((b) => (
          <BillCard key={b.id} bill={b} onMarkPaid={markBillPaid} />
        ))}
      </div>
    </>
  );
}
