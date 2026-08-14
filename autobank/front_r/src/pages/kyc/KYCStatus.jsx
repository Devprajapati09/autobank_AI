import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Button from "../../components/common/Button.jsx";
import { KYC_STEPS } from "../../utils/constants";

export default function KYCStatus() {
  const navigate = useNavigate();
  return (
    <div className="card" style={{ textAlign: "center", padding: 40 }}>
      <div className="kyc-progress">
        {KYC_STEPS.map((s) => (
          <div key={s} className="seg done" />
        ))}
      </div>
      <div className="stat-icon green" style={{ margin: "0 auto 16px" }}><CheckCircle2 size={20} /></div>
      <h1 style={{ fontSize: 22, marginBottom: 10 }}>You're verified</h1>
      <p className="text-soft" style={{ fontSize: 13.5, maxWidth: 380, margin: "0 auto 24px" }}>
        KYC complete. AutoBank AI is now learning your income, bills, and spending to build your
        first budget and recommendations.
      </p>
      <Button variant="primary" onClick={() => navigate("/dashboard")}>Go to dashboard</Button>
    </div>
  );
}
