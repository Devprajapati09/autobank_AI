import { ShieldAlert } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function EmergencyFundCard({ current, monthsCovered }) {
  return (
    <div className="card">
      <div className="row gap-8" style={{ marginBottom: 10 }}>
        <ShieldAlert size={17} color="var(--marigold-deep)" />
        <h3 className="card-title">Emergency fund</h3>
      </div>
      <div className="amt-lg">{formatCurrency(current)}</div>
      <p className="text-soft" style={{ fontSize: 13, marginTop: 6 }}>
        Covers {monthsCovered} months of essential expenses. Aim for 6 months of runway.
      </p>
    </div>
  );
}
