export default function NotificationItem({ notif, onRead }) {
  return (
    <li className={`notif-item${notif.read ? " read" : ""}`} onClick={() => onRead?.(notif.id)}>
      <span className="notif-dot" />
      <div>
        <p style={{ fontSize: 13.5, fontWeight: 600 }}>{notif.title}</p>
        <p className="text-soft" style={{ fontSize: 12.5, marginTop: 2 }}>{notif.body}</p>
        <span className="text-faint" style={{ fontSize: 11 }}>{notif.time}</span>
      </div>
    </li>
  );
}
