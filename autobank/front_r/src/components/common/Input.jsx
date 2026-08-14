export default function Input({ label, hint, error, id, ...rest }) {
  const inputId = id || rest.name;
  return (
    <div className="field">
      {label && <label htmlFor={inputId}>{label}</label>}
      <input id={inputId} className="input" {...rest} />
      {hint && !error && <span className="input-hint">{hint}</span>}
      {error && <span className="input-hint" style={{ color: "var(--brick)" }}>{error}</span>}
    </div>
  );
}
