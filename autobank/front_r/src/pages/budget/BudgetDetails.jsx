import { useParams } from "react-router-dom";
import { useFinance } from "../../hooks/useFinance";
import BudgetCategory from "../../components/budget/BudgetCategory.jsx";
import EmptyState from "../../components/common/EmptyState.jsx";

export default function BudgetDetails() {
  const { categoryId } = useParams();
  const { budget } = useFinance();
  const category = budget.find((c) => c.id === categoryId) || budget[0];

  if (!category) return <EmptyState title="Category not found" />;

  return (
    <>
      <div className="page-head"><div><h1>{category.name}</h1><p className="sub">Category detail and recent activity.</p></div></div>
      <div className="card">
        <BudgetCategory category={category} />
      </div>
    </>
  );
}
