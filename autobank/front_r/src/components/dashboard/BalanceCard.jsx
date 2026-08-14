import { formatCurrency } from "../../utils/formatCurrency";

export default function BalanceCard({ balance, deltaPct, savings, emergencyFund }) {
  return (
    <div className="hero-balance">
      <span className="eyebrow">Total balance</span>
      <div className="amt-lg">{formatCurrency(balance)}</div>
      <div className="delta" style={{ color: "#8ee0bd" }}>▲ {deltaPct}% vs last month</div>
      <div className="mini-row">
        <div className="mini">
          <div className="label">Savings</div>
          <div className="val">{formatCurrency(savings, { compact: true })}</div>
        </div>
        <div className="mini">
          <div className="label">Emergency fund</div>
          <div className="val">{formatCurrency(emergencyFund, { compact: true })}</div>
        </div>
      </div>
    </div>
  );
}
