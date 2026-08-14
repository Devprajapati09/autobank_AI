import { useNavigate } from "react-router-dom";
import BillForm from "../../components/bills/BillForm.jsx";

export default function AddBill() {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-head"><div><h1>Add a bill</h1><p className="sub">AutoBank AI will track it and remind you before it's due.</p></div></div>
      <div className="card" style={{ maxWidth: 440 }}>
        <BillForm onSubmit={() => navigate("/bills")} />
      </div>
    </>
  );
}
