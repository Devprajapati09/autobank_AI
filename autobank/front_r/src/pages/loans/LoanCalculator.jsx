import { useState } from "react";
import Input from "../../components/common/Input.jsx";
import { calcEMI } from "../../utils/calculations";
import { formatCurrency } from "../../utils/formatCurrency";

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(11);
  const [tenure, setTenure] = useState(48);
  const emi = calcEMI(principal, rate, tenure);

  return (
    <>
      <div className="page-head"><div><h1>EMI calculator</h1><p className="sub">Model out any loan before you apply.</p></div></div>
      <div className="grid grid-2">
        <div className="card">
          <Input label="Loan amount (₹)" type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
          <Input label="Interest rate (% p.a.)" type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
          <Input label="Tenure (months)" type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
        </div>
        <div className="card" style={{ textAlign: "center" }}>
          <span className="eyebrow">Monthly EMI</span>
          <div className="amt-lg" style={{ fontSize: 40, margin: "10px 0" }}>{formatCurrency(emi)}</div>
          <p className="text-faint" style={{ fontSize: 12.5 }}>Total payable: {formatCurrency(emi * tenure)}</p>
        </div>
      </div>
    </>
  );
}
