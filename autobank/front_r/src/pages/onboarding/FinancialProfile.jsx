import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input.jsx";
import Select from "../../components/common/Select.jsx";
import Button from "../../components/common/Button.jsx";

export default function FinancialProfile() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ income: "", employment: "salaried", goal: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="card">
      <h1 style={{ fontSize: 22, marginBottom: 6 }}>Tell us about your finances</h1>
      <p className="text-soft" style={{ fontSize: 13.5, marginBottom: 22 }}>This helps AutoBank AI tailor your budget and recommendations.</p>
      <form onSubmit={(e) => { e.preventDefault(); navigate("/onboarding/permissions"); }}>
        <Input label="Monthly income (₹)" type="number" placeholder="78000" value={form.income} onChange={update("income")} />
        <Select
          label="Employment type"
          value={form.employment}
          onChange={update("employment")}
          options={[
            { value: "salaried", label: "Salaried" },
            { value: "self-employed", label: "Self-employed" },
            { value: "student", label: "Student" },
          ]}
        />
        <Input label="Biggest financial goal" placeholder="e.g. Build a 6-month emergency fund" value={form.goal} onChange={update("goal")} />
        <Button variant="primary" block type="submit">Continue</Button>
      </form>
    </div>
  );
}
