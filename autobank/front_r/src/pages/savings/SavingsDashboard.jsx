import { Link } from "react-router-dom";
import SavingsGoalCard from "../../components/savings/SavingsGoalCard.jsx";
import EmergencyFundCard from "../../components/savings/EmergencyFundCard.jsx";
import SavingsChart from "../../components/charts/SavingsChart.jsx";
import { balanceHistory, demoUser } from "../../data/demoUser";
import Button from "../../components/common/Button.jsx";

const goals = [
  { id: 1, name: "Emergency fund", saved: 42000, target: 150000 },
  { id: 2, name: "New laptop", saved: 18000, target: 60000 },
  { id: 3, name: "Goa trip", saved: 9000, target: 25000 },
];

export default function SavingsDashboard() {
  return (
    <>
      <div className="page-head">
        <div><h1>Savings</h1><p className="sub">Every goal, tracked automatically.</p></div>
        <Link to="/savings/create-goal"><Button variant="primary">New goal</Button></Link>
      </div>
      <div className="grid grid-2" style={{ marginBottom: 18 }}>
        <div className="card"><SavingsChart data={balanceHistory} /></div>
        <EmergencyFundCard current={demoUser.emergencyFund} monthsCovered={2.4} />
      </div>
      <div className="grid grid-3">
        {goals.map((g) => <SavingsGoalCard key={g.id} goal={g} />)}
      </div>
    </>
  );
}
