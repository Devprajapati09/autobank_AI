export default function RecoveryPlan({ steps }) {
  return (
    <div className="card">
      <h3 className="card-title" style={{ marginBottom: 12 }}>Recovery plan</h3>
      {steps.map((s, i) => (
        <div key={i} style={{ padding: "10px 0", borderBottom: i < steps.length - 1 ? "1px solid var(--hairline)" : "none" }}>
          <div style={{ fontWeight: 600, fontSize: 13.5 }}>{s.title}</div>
          <div className="text-soft" style={{ fontSize: 12.5, marginTop: 2 }}>{s.body}</div>
        </div>
      ))}
    </div>
  );
}
