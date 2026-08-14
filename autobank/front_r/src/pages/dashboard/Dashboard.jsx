import { useAuth } from "../../hooks/useAuth";
import { useFinance } from "../../hooks/useFinance";
import BalanceCard from "../../components/dashboard/BalanceCard.jsx";
import IncomeCard from "../../components/dashboard/IncomeCard.jsx";
import ExpenseCard from "../../components/dashboard/ExpenseCard.jsx";
import SavingsCard from "../../components/dashboard/SavingsCard.jsx";
import FinancialHealth from "../../components/dashboard/FinancialHealth.jsx";
import UpcomingBills from "../../components/dashboard/UpcomingBills.jsx";
import RecentTransactions from "../../components/dashboard/RecentTransactions.jsx";
import AIRecommendationCard from "../../components/dashboard/AIRecommendationCard.jsx";
import IncomeExpenseChart from "../../components/charts/IncomeExpenseChart.jsx";
import { demoUser, incomeExpenseHistory } from "../../data/demoUser";
import { calcFinancialHealthScore } from "../../utils/calculations";

export default function Dashboard() {
  const { user } = useAuth();
  const { bills, transactions } = useFinance();
  const u = user || demoUser;
  const firstName = u.name.split(" ")[0];

  const healthScore = calcFinancialHealthScore({
    savingsRate: 20,
    billsOnTimePct: 92,
    debtToIncome: 18,
    emergencyFundMonths: 2.4,
  });

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Good to see you, {firstName}</h1>
          <p className="sub">Here's where your money stands today.</p>
        </div>
      </div>

      <div className="grid grid-2" style={{ gridTemplateColumns: "1.4fr 1fr", marginBottom: 18 }}>
        <BalanceCard balance={u.totalBalance} deltaPct={7.3} savings={u.savingsBalance} emergencyFund={u.emergencyFund} />
        <FinancialHealth score={healthScore} />
      </div>

      <div className="grid grid-3" style={{ marginBottom: 18 }}>
        <IncomeCard amount={u.monthlyIncome} />
        <ExpenseCard amount={u.monthlyExpenses} />
        <SavingsCard amount={u.monthlyIncome - u.monthlyExpenses} ratePct={20} />
      </div>

      <div className="grid grid-2" style={{ gridTemplateColumns: "1.4fr 1fr", marginBottom: 18 }}>
        <IncomeExpenseChart data={incomeExpenseHistory} />
        <AIRecommendationCard
          title="Switch your personal loan to SBI"
          body="You could save around ₹8,400 in total interest by refinancing at 10.8% instead of your current 13.2% rate."
        />
      </div>

      <div className="grid grid-2">
        <UpcomingBills bills={bills} />
        <RecentTransactions transactions={transactions} />
      </div>
    </>
  );
}
