import GoalCard from "../../components/finance/GoalCard.jsx";

const goals = [
  { id: 1, name: "Emergency fund", saved: 42000, target: 150000 },
  { id: 2, name: "New laptop", saved: 18000, target: 60000 },
  { id: 3, name: "Goa trip", saved: 9000, target: 25000 },
];

export default function FinancialGoals() {
  return (
    <>
      <div className="page-head"><div><h1>Financial goals</h1><p className="sub">What you're working toward.</p></div></div>
      <div className="grid grid-3">
        {goals.map((g) => <GoalCard key={g.id} goal={g} />)}
      </div>
    </>
  );
}
