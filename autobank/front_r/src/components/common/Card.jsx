export default function Card({ title, action, children, className = "", ...rest }) {
  return (
    <div className={`card ${className}`} {...rest}>
      {(title || action) && (
        <div className="row-between" style={{ marginBottom: 14 }}>
          {title && <h3 className="card-title">{title}</h3>}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}
