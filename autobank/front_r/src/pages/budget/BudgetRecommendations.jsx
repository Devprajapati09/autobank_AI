import { useFinance } from "../../hooks/useFinance";
import BudgetRecommendation from "../../components/budget/BudgetRecommendation.jsx";

export default function BudgetRecommendations() {
  const { budget } = useFinance();
  const overBudget = budget.filter((c) => c.spent > c.limit);

  return (
    <>
      <div className="page-head"><div><h1>Budget recommendations</h1><p className="sub">What AutoBank AI suggests this month.</p></div></div>
      <div className="card">
        <BudgetRecommendation overBudgetCategories={overBudget} />
      </div>
    </>
  );
}
