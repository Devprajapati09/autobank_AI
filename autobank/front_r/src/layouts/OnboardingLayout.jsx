import { Outlet } from "react-router-dom";

export default function OnboardingLayout() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 520 }}>
        <Outlet />
      </div>
    </div>
  );
}
