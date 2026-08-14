import { useState } from "react";
import { loanOffers } from "../../data/loans";
import LoanComparisonCard from "../../components/loans/LoanComparisonCard.jsx";
import Input from "../../components/common/Input.jsx";
import LoanRecommendation from "../../components/loans/LoanRecommendation.jsx";

export default function LoanComparison() {
  const [principal, setPrincipal] = useState(500000);
  const [tenure, setTenure] = useState(48);
  const best = [...loanOffers].sort((a, b) => a.rate - b.rate)[0];

  return (
    <>
      <div className="page-head"><div><h1>Compare loans</h1><p className="sub">Real EMI math, side by side.</p></div></div>
      <div className="grid grid-2" style={{ marginBottom: 18 }}>
        <Input label="Loan amount (₹)" type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
        <Input label="Tenure (months)" type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
      </div>
      <LoanComparisonCard loans={loanOffers} principal={principal} tenure={tenure} />
      <div className="card" style={{ marginTop: 18 }}>
        <LoanRecommendation loan={best} />
      </div>
    </>
  );
}
