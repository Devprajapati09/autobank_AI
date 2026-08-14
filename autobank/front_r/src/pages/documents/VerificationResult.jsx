import VerificationResult from "../../components/documents/VerificationResult.jsx";

export default function DocumentVerificationResultPage() {
  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Verification result</h1></div>
      <div style={{ maxWidth: 480 }}>
        <VerificationResult
          result={{ status: "verified", message: "Your address proof matches your KYC record. No further action needed." }}
        />
      </div>
    </div>
  );
}
