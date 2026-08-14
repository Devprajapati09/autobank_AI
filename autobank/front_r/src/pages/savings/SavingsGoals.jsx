import SavingsGoalCard from "../../components/savings/SavingsGoalCard.jsx";

const goals = [
  { id: 1, name: "Emergency fund", saved: 42000, target: 150000 },
  { id: 2, name: "New laptop", saved: 18000, target: 60000 },
  { id: 3, name: "Goa trip", saved: 9000, target: 25000 },
  { id: 4, name: "Wedding fund", saved: 5000, target: 200000 },
];

export default function SavingsGoals() {
  return (
    <>
      <div className="page-head"><div><h1>Savings goals</h1><p className="sub">All your goals in one view.</p></div></div>
      <div className="grid grid-3">
        {goals.map((g) => <SavingsGoalCard key={g.id} goal={g} />)}
      </div>
    </>
  );
}
