export default function EmptyState({ eyebrow, title, body, action }) {
  return (
    <div className="empty-state">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h3>{title}</h3>
      {body && <p>{body}</p>}
      {action && <div style={{ marginTop: 16 }}>{action}</div>}
    </div>
  );
}
