import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIRecommendationCard({ title, body }) {
  return (
    <div className="ai-rec-card">
      <div className="head">
        <Sparkles size={16} color="var(--marigold-deep)" />
        <span className="tag">AI recommendation</span>
      </div>
      <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{title}</p>
      <p className="text-soft" style={{ fontSize: 13, lineHeight: 1.5 }}>{body}</p>
      <Link to="/assistant" className="btn btn-accent btn-sm" style={{ marginTop: 14 }}>Ask AI about this</Link>
    </div>
  );
}
