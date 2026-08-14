import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../../components/common/Loader.jsx";
import Button from "../../components/common/Button.jsx";

export default function DocumentVerification() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  setTimeout(() => setChecking(false), 1200);

  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Verifying your document</h1></div>
      <div className="card" style={{ maxWidth: 480, textAlign: "center", padding: 36 }}>
        {checking ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loader label="Running checks against your KYC record..." />
          </div>
        ) : (
          <>
            <p style={{ fontWeight: 600, marginBottom: 12 }}>Almost there</p>
            <p className="text-soft" style={{ fontSize: 13.5, marginBottom: 20 }}>
              We're cross-checking this against your existing KYC. You'll see a result shortly.
            </p>
            <Button variant="primary" onClick={() => navigate("/documents/result")}>See result</Button>
          </>
        )}
      </div>
    </div>
  );
}
