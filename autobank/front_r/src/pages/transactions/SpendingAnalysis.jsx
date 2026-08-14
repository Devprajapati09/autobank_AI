import { spendingByCategory } from "../../data/demoUser";
import SpendingCategoryChart from "../../components/charts/SpendingCategoryChart.jsx";
import BudgetChart from "../../components/charts/BudgetChart.jsx";
import { budgetCategories } from "../../data/budget";

export default function SpendingAnalysis() {
  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Spending analysis</h1></div>
      <div className="grid grid-2">
        <SpendingCategoryChart data={spendingByCategory} />
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: 16 }}>Budget vs actual</h3>
          <BudgetChart data={budgetCategories} />
        </div>
      </div>
    </div>
  );
}
