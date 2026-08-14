import NotificationItem from "./NotificationItem.jsx";
import EmptyState from "../common/EmptyState.jsx";

export default function NotificationPanel({ items, onRead, onMarkAllRead }) {
  return (
    <div className="card" style={{ width: 340, position: "absolute", right: 0, top: 52, zIndex: 50 }}>
      <div className="row-between" style={{ marginBottom: 10 }}>
        <h3 className="card-title">Notifications</h3>
        <button className="btn btn-ghost btn-sm" onClick={onMarkAllRead}>Mark all read</button>
      </div>
      {items.length === 0 ? (
        <EmptyState title="You're all caught up" body="No new notifications right now." />
      ) : (
        <ul>
          {items.map((n) => (
            <NotificationItem key={n.id} notif={n} onRead={onRead} />
          ))}
        </ul>
      )}
    </div>
  );
}
