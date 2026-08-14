import { Link } from "react-router-dom";
import EligibilityScore from "./EligibilityScore.jsx";

export default function SchemeCard({ scheme }) {
  return (
    <div className="scheme-card">
      <div className="row-between" style={{ marginBottom: 8 }}>
        <span className="eyebrow">{scheme.category}</span>
        <EligibilityScore pct={scheme.matchPct} />
      </div>
      <h3 style={{ fontSize: 16.5, marginBottom: 6 }}>{scheme.name}</h3>
      <p className="text-faint" style={{ fontSize: 12, marginBottom: 10 }}>{scheme.authority}</p>
      <p className="text-soft" style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 14 }}>{scheme.benefit}</p>
      <Link to="/schemes" className="btn btn-ghost btn-sm">View details</Link>
    </div>
  );
}
