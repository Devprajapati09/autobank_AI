import { loanOffers } from "../../data/loans";
import LoanRecommendation from "../../components/loans/LoanRecommendation.jsx";
import LoanCard from "../../components/loans/LoanCard.jsx";

export default function LoanRecommendationPage() {
  const best = loanOffers.find((l) => l.recommended) || loanOffers[0];
  return (
    <>
      <div className="page-head"><div><h1>AI loan recommendation</h1><p className="sub">Based on your income, spending, and credit profile.</p></div></div>
      <div className="grid grid-2">
        <LoanCard loan={best} />
        <div className="card"><LoanRecommendation loan={best} /></div>
      </div>
    </>
  );
}
