import { NavLink } from "react-router-dom";
import * as Icons from "lucide-react";
import { NAV_SECTIONS } from "../../utils/constants";
import { useFinance } from "../../hooks/useFinance";

export default function Sidebar() {
  const { survivalMode } = useFinance();
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="mark">AB</div>
        <div className="name">
          AutoBank <span>AI</span>
        </div>
      </div>

      <div style={{ overflowY: "auto", flex: 1 }}>
        {NAV_SECTIONS.map((section) => (
          <div className="sidebar-section" key={section.label}>
            <span className="eyebrow">{section.label}</span>
            {section.items.map((item) => {
              const Icon = Icons[item.icon] || Icons.Circle;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `sidebar-link${isActive ? " active" : ""}`}
                >
                  <Icon size={17} strokeWidth={2} />
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        ))}
      </div>

      <div className="sidebar-foot">
        {survivalMode && (
          <div className="sidebar-survival-flag">
            <Icons.LifeBuoy size={16} />
            Survival Mode is active — essentials only.
          </div>
        )}
      </div>
    </aside>
  );
}
