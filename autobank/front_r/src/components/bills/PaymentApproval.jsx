import { ShieldCheck } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";
import Button from "../common/Button.jsx";

export default function PaymentApproval({ bill, onApprove, onDecline }) {
  return (
    <div className="card" style={{ borderColor: "var(--marigold)" }}>
      <div className="row gap-8" style={{ marginBottom: 10, color: "var(--marigold-deep)" }}>
        <ShieldCheck size={16} />
        <span style={{ fontSize: 12.5, fontWeight: 600 }}>AI wants to pay this bill</span>
      </div>
      <p style={{ fontSize: 13.5 }}>
        Pay <strong>{bill.name}</strong> — {formatCurrency(bill.amount)} — to avoid a late fee.
      </p>
      <div className="row gap-12" style={{ marginTop: 14 }}>
        <Button size="sm" variant="accent" onClick={onApprove}>Approve payment</Button>
        <Button size="sm" variant="ghost" onClick={onDecline}>Not now</Button>
      </div>
    </div>
  );
}
