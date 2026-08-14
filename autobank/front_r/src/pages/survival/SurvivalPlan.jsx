import SurvivalPlanCard from "../../components/survival/SurvivalPlanCard.jsx";

export default function SurvivalPlan() {
  return (
    <>
      <div className="page-head"><div><h1>Your survival plan</h1><p className="sub">Step by step, until things stabilise.</p></div></div>
      <SurvivalPlanCard
        plan={[
          "Pause non-essential subscriptions",
          "Cap discretionary spending at ₹2,000/month",
          "Move remaining surplus into your emergency fund",
          "Check in weekly until income is stable again",
        ]}
      />
    </>
  );
}
