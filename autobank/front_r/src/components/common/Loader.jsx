export default function Loader({ label }) {
  return (
    <div className="row gap-8">
      <span className="loader" />
      {label && <span className="text-soft" style={{ fontSize: 13 }}>{label}</span>}
    </div>
  );
}
