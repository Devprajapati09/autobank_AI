export default function SchemeDetails({ scheme }) {
  return (
    <div className="card">
      <span className="eyebrow">{scheme.authority}</span>
      <h2 style={{ margin: "8px 0 12px" }}>{scheme.name}</h2>
      <p className="text-soft" style={{ fontSize: 14, lineHeight: 1.6 }}>{scheme.benefit}</p>
    </div>
  );
}
