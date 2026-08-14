import { NavLink } from "react-router-dom";
import { LayoutDashboard, PieChart, Sparkles, ReceiptText, UserRound } from "lucide-react";

const items = [
  { to: "/dashboard", label: "Home", Icon: LayoutDashboard },
  { to: "/budget", label: "Budget", Icon: PieChart },
  { to: "/assistant", label: "AI", Icon: Sparkles },
  { to: "/bills", label: "Bills", Icon: ReceiptText },
  { to: "/profile", label: "Profile", Icon: UserRound },
];

export default function MobileNavbar() {
  return (
    <nav className="mobile-navbar">
      {items.map(({ to, label, Icon }) => (
        <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "active" : "")}>
          <Icon size={20} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
