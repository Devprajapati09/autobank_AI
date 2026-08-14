import { demoUser, spendingByCategory, incomeExpenseHistory } from "../../data/demoUser";
import FinancialSummary from "../../components/finance/FinancialSummary.jsx";
import SpendingCategoryChart from "../../components/charts/SpendingCategoryChart.jsx";
import IncomeExpenseChart from "../../components/charts/IncomeExpenseChart.jsx";

export default function FinancialOverview() {
  return (
    <>
      <div className="page-head">
        <div><h1>Financial overview</h1><p className="sub">Your full money picture, in one place.</p></div>
      </div>
      <div className="grid grid-2" style={{ marginBottom: 18 }}>
        <IncomeExpenseChart data={incomeExpenseHistory} />
        <SpendingCategoryChart data={spendingByCategory} />
      </div>
      <FinancialSummary
        income={demoUser.monthlyIncome}
        expenses={demoUser.monthlyExpenses}
        savings={demoUser.monthlyIncome - demoUser.monthlyExpenses}
      />
    </>
  );
}
