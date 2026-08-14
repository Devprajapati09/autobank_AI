import { useFinance } from "../../hooks/useFinance";
import BillCard from "../../components/bills/BillCard.jsx";

export default function UpcomingBillsPage() {
  const { bills, markBillPaid } = useFinance();
  const upcoming = bills.filter((b) => b.status !== "paid");
  return (
    <>
      <div className="page-head"><div><h1>Upcoming bills</h1><p className="sub">Everything due in the next few weeks.</p></div></div>
      <div className="grid grid-2">
        {upcoming.map((b) => <BillCard key={b.id} bill={b} onMarkPaid={markBillPaid} />)}
      </div>
    </>
  );
}
