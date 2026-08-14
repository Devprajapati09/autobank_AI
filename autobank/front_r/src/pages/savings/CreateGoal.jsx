import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";

export default function CreateGoal() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", target: "", byDate: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <div className="page-head"><div><h1>New savings goal</h1><p className="sub">AutoBank AI will suggest a monthly amount to hit it.</p></div></div>
      <form className="card" style={{ maxWidth: 440 }} onSubmit={(e) => { e.preventDefault(); navigate("/savings"); }}>
        <Input label="Goal name" placeholder="e.g. New laptop" value={form.name} onChange={update("name")} />
        <Input label="Target amount (₹)" type="number" value={form.target} onChange={update("target")} />
        <Input label="Target date" type="date" value={form.byDate} onChange={update("byDate")} />
        <Button variant="primary" block type="submit">Create goal</Button>
      </form>
    </>
  );
}
