import { PiggyBank } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function SavingsCard({ amount, ratePct }) {
  return (
    <div className="card stat-card">
      <div className="stat-icon amber"><PiggyBank size={17} /></div>
      <div className="label">Saved this month</div>
      <div className="value">{formatCurrency(amount)}</div>
      <div className="text-faint" style={{ fontSize: 11.5, marginTop: 4 }}>{ratePct}% savings rate</div>
    </div>
  );
}
