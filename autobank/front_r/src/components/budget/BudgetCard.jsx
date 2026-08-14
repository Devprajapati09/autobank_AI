import BudgetCategory from "./BudgetCategory.jsx";

export default function BudgetCard({ categories }) {
  return (
    <div className="card">
      <h3 className="card-title" style={{ marginBottom: 8 }}>Categories</h3>
      {categories.map((c) => (
        <BudgetCategory key={c.id} category={c} />
      ))}
    </div>
  );
}
