import { ShieldCheck } from "lucide-react";
import Button from "../common/Button.jsx";

export default function ApprovalCard({ approval, onResolve }) {
  if (!approval) return null;
  return (
    <div className="approval-card">
      <div className="head"><ShieldCheck size={15} /> Needs your approval</div>
      <p style={{ fontWeight: 600, marginBottom: 4 }}>{approval.title}</p>
      <p className="body">{approval.detail}</p>
      <div className="actions">
        <Button variant="accent" size="sm" onClick={() => onResolve(true)}>Approve</Button>
        <Button variant="ghost" size="sm" style={{ color: "#cfd5ee", borderColor: "rgba(255,255,255,0.2)" }} onClick={() => onResolve(false)}>Not now</Button>
      </div>
    </div>
  );
}
