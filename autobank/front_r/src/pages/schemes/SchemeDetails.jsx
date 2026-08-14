import { useParams } from "react-router-dom";
import { schemes } from "../../data/schemes";
import SchemeDetails from "../../components/schemes/SchemeDetails.jsx";
import EligibilityScore from "../../components/schemes/EligibilityScore.jsx";

export default function SchemeDetailsPage() {
  const { id } = useParams();
  const scheme = schemes.find((s) => s.id === id) || schemes[0];

  return (
    <div className="stack gap-24">
      <div className="page-head">
        <h1>{scheme.name}</h1>
        <EligibilityScore pct={scheme.matchPct} />
      </div>
      <SchemeDetails scheme={scheme} />
    </div>
  );
}
