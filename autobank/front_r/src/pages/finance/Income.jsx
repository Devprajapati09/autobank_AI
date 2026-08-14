import { useState } from "react";
import IncomeForm from "../../components/finance/IncomeForm.jsx";
import { demoUser } from "../../data/demoUser";
import { formatCurrency } from "../../utils/formatCurrency";

export default function Income() {
  const [sources, setSources] = useState([{ id: 1, source: "Salary — Infosys", amount: demoUser.monthlyIncome, frequency: "monthly" }]);

  return (
    <>
      <div className="page-head"><div><h1>Income</h1><p className="sub">What AutoBank AI uses to plan your budget.</p></div></div>
      <div className="grid grid-2">
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: 12 }}>Your income sources</h3>
          {sources.map((s) => (
            <div key={s.id} className="row-between" style={{ padding: "10px 0", borderBottom: "1px solid var(--hairline)" }}>
              <span style={{ fontSize: 13.5 }}>{s.source}</span>
              <span className="amt">{formatCurrency(s.amount)} / {s.frequency}</span>
            </div>
          ))}
        </div>
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: 12 }}>Add income source</h3>
          <IncomeForm onSubmit={(form) => setSources((prev) => [...prev, { id: Date.now(), ...form }])} />
        </div>
      </div>
    </>
  );
}
