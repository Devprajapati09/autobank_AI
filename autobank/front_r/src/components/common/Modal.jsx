export default function Modal({ open, onClose, title, children, footer }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {title && <h3 style={{ marginBottom: 14 }}>{title}</h3>}
        <div>{children}</div>
        {footer && <div className="row gap-12" style={{ marginTop: 20, justifyContent: "flex-end" }}>{footer}</div>}
      </div>
    </div>
  );
}
