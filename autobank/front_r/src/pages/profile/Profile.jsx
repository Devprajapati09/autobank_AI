import { useAuth } from "../../hooks/useAuth";
import Badge from "../../components/common/Badge.jsx";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();
  const initials = (user?.name || "AM").split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Profile</h1></div>
      <div className="card row gap-16">
        <div className="avatar" style={{ width: 56, height: 56, fontSize: 18 }}>{initials}</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 17 }}>{user?.name}</div>
          <div className="text-soft" style={{ fontSize: 13 }}>{user?.email}</div>
          <div style={{ marginTop: 8 }}><Badge tone="green">KYC verified</Badge></div>
        </div>
      </div>
      <div className="grid grid-3">
        <Link to="/profile/security" className="card">
          <h3 className="card-title">Security</h3>
          <p className="text-soft" style={{ fontSize: 12.5, marginTop: 6 }}>Password, 2FA, devices</p>
        </Link>
        <Link to="/profile/permissions" className="card">
          <h3 className="card-title">Permissions</h3>
          <p className="text-soft" style={{ fontSize: 12.5, marginTop: 6 }}>What AutoBank AI can do</p>
        </Link>
        <Link to="/profile/settings" className="card">
          <h3 className="card-title">Settings</h3>
          <p className="text-soft" style={{ fontSize: 12.5, marginTop: 6 }}>Preferences & notifications</p>
        </Link>
      </div>
    </div>
  );
}
