import { LifeBuoy } from "lucide-react";
import Button from "../common/Button.jsx";

export default function SurvivalModeBanner({ active, onToggle }) {
  if (!active) {
    return (
      <div className="card row-between" style={{ borderColor: "var(--brick)" }}>
        <div className="row gap-12">
          <LifeBuoy size={20} color="var(--brick)" />
          <div>
            <div style={{ fontWeight: 600 }}>Lost your income or had a sudden drop?</div>
            <div className="text-soft" style={{ fontSize: 13 }}>Smart Survival Mode protects your savings and covers essentials only.</div>
          </div>
        </div>
        <Button variant="danger" onClick={onToggle}>Activate Survival Mode</Button>
      </div>
    );
  }
  return (
    <div className="survival-banner">
      <div>
        <span className="tag">Survival mode active</span>
        <h2 style={{ color: "#fff", fontSize: 22, marginTop: 6 }}>You're protected. Here's the plan.</h2>
      </div>
      <Button variant="ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }} onClick={onToggle}>
        Turn off
      </Button>
    </div>
  );
}
