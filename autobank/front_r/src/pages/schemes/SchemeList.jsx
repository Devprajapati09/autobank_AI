import { schemes } from "../../data/schemes";
import SchemeCard from "../../components/schemes/SchemeCard.jsx";

export default function SchemeList() {
  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>All schemes</h1></div>
      <div className="grid grid-3">
        {schemes.map((s) => <SchemeCard key={s.id} scheme={s} />)}
      </div>
    </div>
  );
}
