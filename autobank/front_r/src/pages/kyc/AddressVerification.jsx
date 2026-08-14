import { useNavigate } from "react-router-dom";
import DocumentUpload from "../../components/documents/DocumentUpload.jsx";
import Button from "../../components/common/Button.jsx";
import { KYC_STEPS } from "../../utils/constants";

export default function AddressVerification() {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="kyc-progress">
        {KYC_STEPS.map((s, i) => (
          <div key={s} className={`seg${i < 3 ? " done" : i === 3 ? " current" : ""}`} />
        ))}
      </div>
      <h1 style={{ fontSize: 20, marginBottom: 6 }}>Proof of address</h1>
      <p className="text-soft" style={{ fontSize: 13, marginBottom: 18 }}>Upload a utility bill, rental agreement, or bank statement from the last 3 months.</p>
      <DocumentUpload />
      <Button variant="primary" block style={{ marginTop: 20 }} onClick={() => navigate("/kyc/document-upload")}>
        Continue
      </Button>
    </div>
  );
}
