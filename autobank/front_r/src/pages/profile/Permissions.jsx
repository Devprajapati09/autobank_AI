import { useState } from "react";

const PERMISSIONS = [
  { key: "view", label: "View accounts, income & spending" },
  { key: "budget", label: "Build and adjust my budget" },
  { key: "pay", label: "Pay bills, after my approval" },
  { key: "recommend", label: "Recommend loans and schemes" },
];

export default function Permissions() {
  const [granted, setGranted] = useState({ view: true, budget: true, pay: true, recommend: true });

  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Permissions</h1></div>
      <div className="card" style={{ maxWidth: 480 }}>
        {PERMISSIONS.map((p) => (
          <label key={p.key} className="row-between" style={{ padding: "12px 0", borderBottom: "1px solid var(--hairline)" }}>
            <span style={{ fontSize: 13.5 }}>{p.label}</span>
            <input
              type="checkbox"
              checked={granted[p.key]}
              onChange={(e) => setGranted((g) => ({ ...g, [p.key]: e.target.checked }))}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
