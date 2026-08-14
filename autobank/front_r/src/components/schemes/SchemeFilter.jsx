export default function SchemeFilter({ categories, active, onChange }) {
  return (
    <div className="filter-bar">
      <button className={`chip${active === "All" ? " active" : ""}`} onClick={() => onChange("All")}>All</button>
      {categories.map((c) => (
        <button key={c} className={`chip${active === c ? " active" : ""}`} onClick={() => onChange(c)}>{c}</button>
      ))}
    </div>
  );
}
