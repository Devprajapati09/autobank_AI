export default function Select({ label, options = [], id, ...rest }) {
  const selectId = id || rest.name;
  return (
    <div className="field">
      {label && <label htmlFor={selectId}>{label}</label>}
      <select id={selectId} className="select" {...rest}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
