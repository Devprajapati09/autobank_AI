export default function ProgressBar({ value = 0, max = 100, tone = "" }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="progress-track">
      <div className={`progress-fill ${tone}`} style={{ width: `${pct}%` }} />
    </div>
  );
}
