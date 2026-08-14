import ExpenseForm from "../../components/finance/ExpenseForm.jsx";
import SpendingCategoryChart from "../../components/charts/SpendingCategoryChart.jsx";
import { spendingByCategory } from "../../data/demoUser";

export default function Expenses() {
  return (
    <>
      <div className="page-head"><div><h1>Expenses</h1><p className="sub">Track and categorise where your money goes.</p></div></div>
      <div className="grid grid-2">
        <SpendingCategoryChart data={spendingByCategory} />
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: 12 }}>Log an expense</h3>
          <ExpenseForm />
        </div>
      </div>
    </>
  );
}
