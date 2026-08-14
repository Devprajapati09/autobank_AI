import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

export default function Settings() {
  const { dark, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Settings</h1></div>
      <div className="card row-between" style={{ maxWidth: 420 }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 13.5 }}>Dark mode</div>
          <div className="text-faint" style={{ fontSize: 12 }}>Switch the app's appearance</div>
        </div>
        <input type="checkbox" checked={dark} onChange={toggleTheme} />
      </div>
    </div>
  );
}
