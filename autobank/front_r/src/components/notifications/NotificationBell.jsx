import { useState } from "react";
import { Bell } from "lucide-react";
import { useNotifications } from "../../hooks/useNotifications";
import NotificationPanel from "./NotificationPanel.jsx";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const { items, unreadCount, markRead, markAllRead } = useNotifications();

  return (
    <div style={{ position: "relative" }}>
      <button className="icon-btn" onClick={() => setOpen((o) => !o)} aria-label="Notifications">
        <Bell size={17} />
      </button>
      {unreadCount > 0 && (
        <span
          className="mono"
          style={{
            position: "absolute", top: -2, right: -2, background: "var(--brick)", color: "#fff",
            fontSize: 9.5, borderRadius: 999, minWidth: 15, height: 15, display: "flex",
            alignItems: "center", justifyContent: "center", padding: "0 3px",
          }}
        >
          {unreadCount}
        </span>
      )}
      {open && <NotificationPanel items={items} onRead={markRead} onMarkAllRead={markAllRead} />}
    </div>
  );
}
