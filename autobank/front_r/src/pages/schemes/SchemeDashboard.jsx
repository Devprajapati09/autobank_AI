import { useState } from "react";
import { BadgePercent } from "lucide-react";
import { schemes } from "../../data/schemes";
import SchemeCard from "../../components/schemes/SchemeCard.jsx";
import SchemeFilter from "../../components/schemes/SchemeFilter.jsx";

export default function SchemeDashboard() {
  const [active, setActive] = useState("All");
  const categories = [...new Set(schemes.map((s) => s.category))];
  const filtered = active === "All" ? schemes : schemes.filter((s) => s.category === active);

  return (
    <div className="stack gap-24">
      <div className="page-head">
        <div>
          <h1><BadgePercent size={22} style={{ verticalAlign: -3, marginRight: 8 }} />Government schemes</h1>
          <p className="sub">Matched to your income, employment, and location.</p>
        </div>
      </div>
      <SchemeFilter categories={categories} active={active} onChange={setActive} />
      <div className="grid grid-2">
        {filtered.map((s) => <SchemeCard key={s.id} scheme={s} />)}
      </div>
    </div>
  );
}
