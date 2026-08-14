import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth-shell">
      <div className="auth-visual">
        <div className="row gap-8">
          <div className="sidebar-brand" style={{ padding: 0 }}>
            <div className="mark">AB</div>
            <div className="name">AutoBank <span>AI</span></div>
          </div>
        </div>
        <p className="quote">
          "It understands what's going on, makes a plan, asks before it acts,
          and checks the result." — banking that finally handles money for you.
        </p>
        <p className="text-faint" style={{ color: "#8b93ab", fontSize: 12.5 }}>
          © {new Date().getFullYear()} AutoBank AI. A concept banking experience.
        </p>
      </div>
      <div className="auth-form-side">
        <Outlet />
      </div>
    </div>
  );
}
