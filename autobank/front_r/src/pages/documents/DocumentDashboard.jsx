import { Link } from "react-router-dom";
import { FileCheck2 } from "lucide-react";
import DocumentCard from "../../components/documents/DocumentCard.jsx";

const docs = [
  { id: "d1", name: "PAN Card", uploadedAt: "12 Feb 2024", status: "verified" },
  { id: "d2", name: "Aadhaar Card", uploadedAt: "12 Feb 2024", status: "verified" },
  { id: "d3", name: "Address Proof — Jio Fiber bill", uploadedAt: "3 Aug 2026", status: "pending" },
  { id: "d4", name: "Salary Slip — July", uploadedAt: "29 Jul 2026", status: "rejected" },
];

export default function DocumentDashboard() {
  return (
    <div className="stack gap-24">
      <div className="page-head">
        <div>
          <h1><FileCheck2 size={22} style={{ verticalAlign: -3, marginRight: 8 }} />Documents</h1>
          <p className="sub">Manage the documents behind your KYC and verifications.</p>
        </div>
        <Link to="/documents/upload" className="btn btn-primary">Upload document</Link>
      </div>
      <div className="stack gap-12">
        {docs.map((d) => <DocumentCard key={d.id} doc={d} />)}
      </div>
    </div>
  );
}
