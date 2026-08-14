const CATEGORIES = ["All", "Income", "Housing", "Food", "Transport", "Utilities", "Shopping", "Entertainment"];

export default function TransactionFilter({ active, onChange }) {
  return (
    <div className="filter-bar">
      {CATEGORIES.map((c) => (
        <button key={c} className={`chip${active === c ? " active" : ""}`} onClick={() => onChange(c)}>{c}</button>
      ))}
    </div>
  );
}
