import { useNavigate } from "react-router-dom";
import DocumentUpload from "../../components/documents/DocumentUpload.jsx";
import Button from "../../components/common/Button.jsx";
import { KYC_STEPS } from "../../utils/constants";

export default function KYCDocumentUploadPage() {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="kyc-progress">
        {KYC_STEPS.map((s, i) => (
          <div key={s} className={`seg${i < 4 ? " done" : " current"}`} />
        ))}
      </div>
      <h1 style={{ fontSize: 20, marginBottom: 6 }}>Anything else to add?</h1>
      <p className="text-soft" style={{ fontSize: 13, marginBottom: 18 }}>Optional: income proof or additional documents speed up loan and scheme matching.</p>
      <DocumentUpload />
      <Button variant="primary" block style={{ marginTop: 20 }} onClick={() => navigate("/kyc/status")}>
        Submit for review
      </Button>
    </div>
  );
}
