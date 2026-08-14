import { useNotifications } from "../../hooks/useNotifications";
import NotificationItem from "../../components/notifications/NotificationItem.jsx";
import EmptyState from "../../components/common/EmptyState.jsx";
import Button from "../../components/common/Button.jsx";

export default function Notifications() {
  const { items, markRead, markAllRead } = useNotifications();

  return (
    <div className="stack gap-24">
      <div className="page-head">
        <h1>Notifications</h1>
        <Button variant="ghost" size="sm" onClick={markAllRead}>Mark all as read</Button>
      </div>
      <div className="card">
        {items.length === 0 ? (
          <EmptyState title="You're all caught up" body="Nothing new right now." />
        ) : (
          <ul>{items.map((n) => <NotificationItem key={n.id} notif={n} onRead={markRead} />)}</ul>
        )}
      </div>
    </div>
  );
}
