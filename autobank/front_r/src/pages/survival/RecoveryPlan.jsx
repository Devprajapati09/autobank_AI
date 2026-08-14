import RecoveryPlan from "../../components/survival/RecoveryPlan.jsx";

const steps = [
  { title: "Week 1–2: Stabilise", body: "Essentials-only spending, subscriptions paused, emergency fund protected." },
  { title: "Week 3–6: Rebuild income", body: "AI surfaces gig-work and government scheme options matched to your skills." },
  { title: "Month 2+: Resume normal budget", body: "Gradually reintroduce discretionary spending as income returns to baseline." },
];

export default function RecoveryPlanPage() {
  return (
    <>
      <div className="page-head"><div><h1>Recovery plan</h1><p className="sub">The path back to your normal budget.</p></div></div>
      <RecoveryPlan steps={steps} />
    </>
  );
}
