import { useFinance } from "../../hooks/useFinance";
import SurvivalModeBanner from "../../components/survival/SurvivalModeBanner.jsx";
import EssentialExpenseCard from "../../components/survival/EssentialExpenseCard.jsx";
import SurvivalPlanCard from "../../components/survival/SurvivalPlanCard.jsx";
import { calcSurvivalRunway } from "../../utils/calculations";
import { demoUser } from "../../data/demoUser";

const essentials = [
  { name: "House Rent", category: "Housing", amount: 18000, essential: true },
  { name: "Groceries", category: "Food", amount: 6000, essential: true },
  { name: "Electricity", category: "Utilities", amount: 1500, essential: true },
  { name: "Netflix", category: "Entertainment", amount: 649, essential: false },
  { name: "Gym Membership", category: "Health", amount: 1200, essential: false },
];

export default function SurvivalDashboard() {
  const { survivalMode, toggleSurvivalMode } = useFinance();
  const essentialSpend = essentials.filter((e) => e.essential).reduce((s, e) => s + e.amount, 0);
  const runway = calcSurvivalRunway(demoUser.savingsBalance, essentialSpend);

  return (
    <>
      <div className="page-head"><div><h1>Smart Survival Mode</h1><p className="sub">Automatic protection if your income drops.</p></div></div>
      <SurvivalModeBanner active={survivalMode} onToggle={toggleSurvivalMode} />

      {survivalMode && (
        <div className="grid grid-2" style={{ marginTop: 18 }}>
          <div className="card">
            <h3 className="card-title" style={{ marginBottom: 4 }}>Savings runway</h3>
            <div className="amt-lg" style={{ margin: "10px 0" }}>{runway} months</div>
            <p className="text-soft" style={{ fontSize: 13 }}>At essential-only spending, your savings will last this long.</p>
          </div>
          <SurvivalPlanCard
            plan={[
              "Pause non-essential subscriptions (Netflix, Gym)",
              "Cap discretionary spending at ₹2,000/month",
              "Move ₹6,200/month into your emergency fund",
              "Check in weekly until income is stable again",
            ]}
          />
        </div>
      )}

      <h3 className="card-title" style={{ margin: "24px 0 12px" }}>Your essential expenses</h3>
      {essentials.map((e) => <EssentialExpenseCard key={e.name} item={e} />)}
    </>
  );
}
