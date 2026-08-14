import { Sparkles } from "lucide-react";

export default function AIRecommendation({ text }) {
  return (
    <div className="row gap-8" style={{ padding: "10px 0" }}>
      <Sparkles size={15} color="var(--marigold-deep)" style={{ flexShrink: 0, marginTop: 2 }} />
      <p style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.5 }}>{text}</p>
    </div>
  );
}
