import { useState } from "react";
import { notifications as demoNotifications } from "../data/notifications";

export function useNotifications() {
  const [items, setItems] = useState(demoNotifications);
  const unreadCount = items.filter((n) => !n.read).length;
  const markAllRead = () => setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  const markRead = (id) => setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  return { items, unreadCount, markAllRead, markRead };
}
