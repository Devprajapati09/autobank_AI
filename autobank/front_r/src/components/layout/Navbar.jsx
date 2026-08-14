import { Search } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import NotificationBell from "../notifications/NotificationBell.jsx";

export default function Navbar({ title }) {
  const { user } = useAuth();
  const initials = (user?.name || "AM")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <header className="navbar">
      <div>
        {title && <h2 style={{ fontSize: 18 }}>{title}</h2>}
      </div>
      <div className="navbar-search">
        <Search size={15} />
        <input placeholder="Search transactions, bills, schemes..." />
      </div>
      <div className="navbar-right">
        <NotificationBell />
        <div className="avatar">{initials}</div>
      </div>
    </header>
  );
}
