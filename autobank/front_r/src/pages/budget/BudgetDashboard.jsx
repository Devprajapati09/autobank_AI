import { Link } from "react-router-dom";
import { useFinance } from "../../hooks/useFinance";
import BudgetCard from "../../components/budget/BudgetCard.jsx";
import BudgetProgress from "../../components/budget/BudgetProgress.jsx";
import BudgetChart from "../../components/charts/BudgetChart.jsx";
import BudgetRecommendation from "../../components/budget/BudgetRecommendation.jsx";
import Button from "../../components/common/Button.jsx";
import { calcBudgetHealth } from "../../utils/calculations";

export default function BudgetDashboard() {
  const { budget } = useFinance();
  const { pct } = calcBudgetHealth(budget);
  const overBudget = budget.filter((c) => c.spent > c.limit);

  return (
    <>
      <div className="page-head">
        <div><h1>Budget</h1><p className="sub">Set by AutoBank AI from your income and habits — you're always in control.</p></div>
        <Link to="/budget/create"><Button variant="primary">Adjust budget</Button></Link>
      </div>

      <div className="card" style={{ marginBottom: 18 }}>
        <BudgetProgress pct={pct} />
      </div>

      <div className="grid grid-2">
        <BudgetCard categories={budget} />
        <div className="stack gap-16">
          <div className="card"><BudgetChart data={budget} /></div>
          <div className="card">
            <h3 className="card-title" style={{ marginBottom: 4 }}>AI notes</h3>
            <BudgetRecommendation overBudgetCategories={overBudget} />
          </div>
        </div>
      </div>
    </>
  );
}
