import { useNavigate } from "react-router-dom";
import DocumentUpload from "../../components/documents/DocumentUpload.jsx";
import Button from "../../components/common/Button.jsx";

export default function UploadDocument() {
  const navigate = useNavigate();
  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Upload a document</h1></div>
      <div className="card" style={{ maxWidth: 480 }}>
        <DocumentUpload onUpload={() => navigate("/documents/verify")} />
        <Button variant="primary" block style={{ marginTop: 18 }} onClick={() => navigate("/documents/verify")}>
          Submit for verification
        </Button>
      </div>
    </div>
  );
}
