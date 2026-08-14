import { FileText } from "lucide-react";
import VerificationStatus from "./VerificationStatus.jsx";

export default function DocumentCard({ doc }) {
  return (
    <div className="card row-between">
      <div className="row gap-12">
        <div className="stat-icon navy" style={{ marginBottom: 0 }}><FileText size={17} /></div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{doc.name}</div>
          <div className="text-faint" style={{ fontSize: 12 }}>Uploaded {doc.uploadedAt}</div>
        </div>
      </div>
      <VerificationStatus status={doc.status} />
    </div>
  );
}
