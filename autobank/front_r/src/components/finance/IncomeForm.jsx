import { useState } from "react";
import Input from "../common/Input.jsx";
import Select from "../common/Select.jsx";
import Button from "../common/Button.jsx";

export default function IncomeForm({ onSubmit }) {
  const [form, setForm] = useState({ source: "", amount: "", frequency: "monthly" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit?.(form); }}>
      <Input label="Income source" placeholder="e.g. Salary — Infosys" value={form.source} onChange={update("source")} />
      <Input label="Amount" type="number" placeholder="78000" value={form.amount} onChange={update("amount")} />
      <Select
        label="Frequency"
        value={form.frequency}
        onChange={update("frequency")}
        options={[
          { value: "monthly", label: "Monthly" },
          { value: "weekly", label: "Weekly" },
          { value: "onetime", label: "One-time" },
        ]}
      />
      <Button variant="primary" block type="submit">Save income</Button>
    </form>
  );
}
