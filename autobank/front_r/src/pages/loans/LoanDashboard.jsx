import { Link } from "react-router-dom";
import { loanOffers, activeLoans } from "../../data/loans";
import LoanCard from "../../components/loans/LoanCard.jsx";
import { formatCurrency } from "../../utils/formatCurrency";
import Button from "../../components/common/Button.jsx";

export default function LoanDashboard() {
  return (
    <>
      <div className="page-head">
        <div><h1>Loans</h1><p className="sub">Compare offers and see what you can afford.</p></div>
        <Link to="/loans/calculator"><Button variant="primary">EMI calculator</Button></Link>
      </div>

      {activeLoans.length > 0 && (
        <div className="card" style={{ marginBottom: 18 }}>
          <h3 className="card-title" style={{ marginBottom: 10 }}>Active loans</h3>
          {activeLoans.map((l) => (
            <div key={l.id} className="row-between" style={{ padding: "10px 0" }}>
              <span style={{ fontSize: 13.5 }}>{l.name} — {l.lender}</span>
              <span className="amt">{formatCurrency(l.emi)}/mo · {l.tenureLeft} mo left</span>
            </div>
          ))}
        </div>
      )}

      <h3 className="card-title" style={{ marginBottom: 12 }}>Personal loan offers</h3>
      <div className="grid grid-4">
        {loanOffers.map((l) => <LoanCard key={l.id} loan={l} />)}
      </div>
    </>
  );
}
