import AIRecommendation from "../../components/ai/AIRecommendation.jsx";
import ActionStatus from "../../components/ai/ActionStatus.jsx";

export default function RecommendationDetails() {
  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Recommendation details</h1></div>
      <div className="card">
        <AIRecommendation text="Switch your personal loan to SBI at 10.8% — saves ₹8,400 in total interest over the remaining tenure, with no change to your monthly cash flow." />
        <div style={{ marginTop: 12 }}><ActionStatus status="pending" /></div>
      </div>
    </div>
  );
}
