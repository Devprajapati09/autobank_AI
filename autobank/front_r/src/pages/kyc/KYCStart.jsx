import { useNavigate } from "react-router-dom";
import { FileCheck2 } from "lucide-react";
import Button from "../../components/common/Button.jsx";
import { KYC_STEPS } from "../../utils/constants";

export default function KYCStart() {
  const navigate = useNavigate();
  return (
    <div className="card" style={{ textAlign: "center", padding: 40 }}>
      <div className="kyc-progress">
        {KYC_STEPS.map((s, i) => (
          <div key={s} className={`seg${i === 0 ? " current" : ""}`} />
        ))}
      </div>
      <div className="stat-icon navy" style={{ margin: "0 auto 16px" }}><FileCheck2 size={20} /></div>
      <h1 style={{ fontSize: 22, marginBottom: 10 }}>Let's verify your identity</h1>
      <p className="text-soft" style={{ fontSize: 13.5, maxWidth: 380, margin: "0 auto 24px" }}>
        You'll need a PAN or Aadhaar number, a photo ID, and a proof of address. This unlocks
        budgeting, bill pay, loans, and government scheme matching.
      </p>
      <Button variant="primary" onClick={() => navigate("/kyc/personal-details")}>Begin verification</Button>
    </div>
  );
}
