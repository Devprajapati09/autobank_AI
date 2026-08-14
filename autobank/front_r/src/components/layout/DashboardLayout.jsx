import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import MobileNavbar from "./MobileNavbar.jsx";

export default function DashboardLayout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Navbar />
        <div className="app-content fade-up">
          <Outlet />
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
}
