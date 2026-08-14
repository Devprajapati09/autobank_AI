import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFinance } from "../../hooks/useFinance";
import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";

export default function CreateBudget() {
  const { budget, setBudget } = useFinance();
  const [limits, setLimits] = useState(Object.fromEntries(budget.map((c) => [c.id, c.limit])));
  const navigate = useNavigate();

  const save = (e) => {
    e.preventDefault();
    setBudget((prev) => prev.map((c) => ({ ...c, limit: Number(limits[c.id]) || c.limit })));
    navigate("/budget");
  };

  return (
    <>
      <div className="page-head"><div><h1>Adjust your budget</h1><p className="sub">Set category limits that fit your month.</p></div></div>
      <form className="card" onSubmit={save} style={{ maxWidth: 480 }}>
        {budget.map((c) => (
          <Input
            key={c.id}
            label={c.name}
            type="number"
            value={limits[c.id]}
            onChange={(e) => setLimits((l) => ({ ...l, [c.id]: e.target.value }))}
          />
        ))}
        <Button variant="primary" block type="submit">Save budget</Button>
      </form>
    </>
  );
}
