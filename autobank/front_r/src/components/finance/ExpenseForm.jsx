import { useState } from "react";
import Input from "../common/Input.jsx";
import Select from "../common/Select.jsx";
import Button from "../common/Button.jsx";
import { EXPENSE_CATEGORY_COLORS } from "../../utils/constants";

export default function ExpenseForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", amount: "", category: "Food" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit?.(form); }}>
      <Input label="Expense name" placeholder="e.g. Groceries" value={form.name} onChange={update("name")} />
      <Input label="Amount" type="number" placeholder="1200" value={form.amount} onChange={update("amount")} />
      <Select
        label="Category"
        value={form.category}
        onChange={update("category")}
        options={Object.keys(EXPENSE_CATEGORY_COLORS).map((c) => ({ value: c, label: c }))}
      />
      <Button variant="primary" block type="submit">Save expense</Button>
    </form>
  );
}
