import { formatCurrency } from "../../utils/formatCurrency";
import Badge from "../common/Badge.jsx";
import Button from "../common/Button.jsx";

export default function LoanCard({ loan }) {
  return (
    <div className={`loan-card${loan.recommended ? " best" : ""}`}>
      {loan.recommended && <Badge tone="green" style={{ marginBottom: 10 }}>AI recommended</Badge>}
      <div className="bank">{loan.bank}</div>
      <div className="rate">{loan.rate}% <span style={{ fontSize: 12, fontWeight: 500, color: "var(--ink-faint)" }}>p.a.</span></div>
      <div className="grid-mini">
        <span className="k">Max amount</span><span className="v">{formatCurrency(loan.maxAmount, { compact: true })}</span>
        <span className="k">Tenure</span><span className="v">{loan.tenureMonths} mo</span>
        <span className="k">Processing fee</span><span className="v">{loan.processingFee}</span>
      </div>
      <Button variant={loan.recommended ? "primary" : "ghost"} block>Compare</Button>
    </div>
  );
}
