import { useState } from "react";
import Input from "../common/Input.jsx";
import Select from "../common/Select.jsx";
import Button from "../common/Button.jsx";

export default function BillForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", amount: "", dueDate: "", category: "Utilities" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit?.(form); }}>
      <Input label="Bill name" placeholder="e.g. Broadband" value={form.name} onChange={update("name")} />
      <Input label="Amount" type="number" placeholder="999" value={form.amount} onChange={update("amount")} />
      <Input label="Due date" type="date" value={form.dueDate} onChange={update("dueDate")} />
      <Select
        label="Category"
        value={form.category}
        onChange={update("category")}
        options={["Housing", "Utilities", "Insurance", "Debt", "Health", "Other"].map((c) => ({ value: c, label: c }))}
      />
      <Button variant="primary" block type="submit">Add bill</Button>
    </form>
  );
}
