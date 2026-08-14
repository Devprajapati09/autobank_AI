import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import Button from "../../components/common/Button.jsx";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="card" style={{ textAlign: "center", padding: 40 }}>
      <div className="stat-icon amber" style={{ margin: "0 auto 16px" }}><Sparkles size={20} /></div>
      <h1 style={{ fontSize: 24, marginBottom: 10 }}>Welcome to AutoBank AI</h1>
      <p className="text-soft" style={{ fontSize: 14.5, maxWidth: 400, margin: "0 auto 26px" }}>
        Before your AI assistant can help with budgets, bills, and loans, we need to verify your
        identity and understand your finances. It takes about 5 minutes.
      </p>
      <Button variant="primary" onClick={() => navigate("/onboarding/financial-profile")}>Let's get started</Button>
    </div>
  );
}
