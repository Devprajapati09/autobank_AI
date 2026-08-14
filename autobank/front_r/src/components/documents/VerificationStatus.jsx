import Badge from "../common/Badge.jsx";

const TONE = { verified: "green", pending: "amber", rejected: "red" };
const LABEL = { verified: "Verified", pending: "In review", rejected: "Needs re-upload" };

export default function VerificationStatus({ status }) {
  return <Badge tone={TONE[status] || "neutral"}>{LABEL[status] || status}</Badge>;
}
