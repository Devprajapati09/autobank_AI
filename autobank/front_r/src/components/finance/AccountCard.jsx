import { formatCurrency } from "../../utils/formatCurrency";
import { Landmark } from "lucide-react";

export default function AccountCard({ account }) {
  return (
    <div className="card row-between">
      <div className="row gap-12">
        <div className="stat-icon navy" style={{ marginBottom: 0 }}><Landmark size={17} /></div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{account.bank}</div>
          <div className="text-faint" style={{ fontSize: 12 }}>•••• {account.last4}</div>
        </div>
      </div>
      <div className="amt">{formatCurrency(account.balance)}</div>
    </div>
  );
}
