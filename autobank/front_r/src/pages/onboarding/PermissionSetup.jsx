import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import Button from "../../components/common/Button.jsx";

const PERMISSIONS = [
  { key: "view", label: "View my accounts, income & spending", required: true },
  { key: "budget", label: "Build and adjust my monthly budget", required: false },
  { key: "pay", label: "Pay bills on my behalf, after my approval", required: false },
  { key: "recommend", label: "Recommend loans and government schemes", required: false },
];

export default function PermissionSetup() {
  const navigate = useNavigate();
  const [granted, setGranted] = useState({ view: true, budget: true, pay: true, recommend: true });

  return (
    <div className="card">
      <div className="row gap-8" style={{ marginBottom: 6 }}>
        <ShieldCheck size={18} color="var(--ledger-green)" />
        <h1 style={{ fontSize: 22 }}>Permissions</h1>
      </div>
      <p className="text-soft" style={{ fontSize: 13.5, marginBottom: 20 }}>
        AutoBank AI only acts within what you allow — and always asks before spending money.
      </p>
      {PERMISSIONS.map((p) => (
        <label key={p.key} className="row-between" style={{ padding: "12px 0", borderBottom: "1px solid var(--hairline)" }}>
          <span style={{ fontSize: 13.5 }}>{p.label}</span>
          <input
            type="checkbox"
            checked={granted[p.key]}
            disabled={p.required}
            onChange={(e) => setGranted((g) => ({ ...g, [p.key]: e.target.checked }))}
          />
        </label>
      ))}
      <Button variant="primary" block style={{ marginTop: 20 }} onClick={() => navigate("/kyc/start")}>
        Continue to KYC
      </Button>
    </div>
  );
}
