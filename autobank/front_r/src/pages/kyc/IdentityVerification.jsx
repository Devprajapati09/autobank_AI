import { useNavigate } from "react-router-dom";
import DocumentUpload from "../../components/documents/DocumentUpload.jsx";
import Button from "../../components/common/Button.jsx";
import { KYC_STEPS } from "../../utils/constants";

export default function IdentityVerification() {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="kyc-progress">
        {KYC_STEPS.map((s, i) => (
          <div key={s} className={`seg${i < 2 ? " done" : i === 2 ? " current" : ""}`} />
        ))}
      </div>
      <h1 style={{ fontSize: 20, marginBottom: 6 }}>Identity verification</h1>
      <p className="text-soft" style={{ fontSize: 13, marginBottom: 18 }}>Upload a government photo ID — Aadhaar, Passport, or Driving Licence.</p>
      <DocumentUpload />
      <Button variant="primary" block style={{ marginTop: 20 }} onClick={() => navigate("/kyc/address-verification")}>
        Continue
      </Button>
    </div>
  );
}
