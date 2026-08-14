import { CheckCircle2, Clock, XCircle } from "lucide-react";

const STATUS_MAP = {
  done: { Icon: CheckCircle2, color: "var(--ledger-green)", label: "Completed" },
  pending: { Icon: Clock, color: "var(--marigold)", label: "Pending approval" },
  declined: { Icon: XCircle, color: "var(--brick)", label: "Declined" },
};

export default function ActionStatus({ status = "pending" }) {
  const { Icon, color, label } = STATUS_MAP[status] || STATUS_MAP.pending;
  return (
    <div className="row gap-8" style={{ fontSize: 12.5, color }}>
      <Icon size={15} /> {label}
    </div>
  );
}
