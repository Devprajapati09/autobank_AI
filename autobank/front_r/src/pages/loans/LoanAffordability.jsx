import { useState } from "react";
import { demoUser } from "../../data/demoUser";
import Input from "../../components/common/Input.jsx";
import AffordabilityScore from "../../components/loans/AffordabilityScore.jsx";
import { calcAffordabilityScore, calcEMI } from "../../utils/calculations";

export default function LoanAffordability() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(11);
  const [tenure, setTenure] = useState(48);
  const newEmi = calcEMI(principal, rate, tenure);
  const { score, disposable } = calcAffordabilityScore({
    monthlyIncome: demoUser.monthlyIncome,
    monthlyExpenses: demoUser.monthlyExpenses,
    existingEmi: 3200,
    newEmi,
  });

  return (
    <>
      <div className="page-head"><div><h1>Can I afford this?</h1><p className="sub">A quick check before you apply.</p></div></div>
      <div className="grid grid-2">
        <div className="card">
          <Input label="Loan amount (₹)" type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
          <Input label="Interest rate (% p.a.)" type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
          <Input label="Tenure (months)" type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
        </div>
        <AffordabilityScore score={score} disposable={disposable} />
      </div>
    </>
  );
}
