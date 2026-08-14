import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";
import { useState } from "react";
import { useFinance } from "../../hooks/useFinance";

export default function IncomeDrop() {
  const [reason, setReason] = useState("job_loss");
  const { toggleSurvivalMode, survivalMode } = useFinance();
  const navigate = useNavigate();

  return (
    <>
      <div className="page-head"><div><h1>Report an income change</h1><p className="sub">We'll adjust your plan right away.</p></div></div>
      <form
        className="card"
        style={{ maxWidth: 440 }}
        onSubmit={(e) => {
          e.preventDefault();
          if (!survivalMode) toggleSurvivalMode();
          navigate("/survival");
        }}
      >
        <div className="field">
          <label>What happened?</label>
          <select className="select" value={reason} onChange={(e) => setReason(e.target.value)}>
            <option value="job_loss">Lost my job</option>
            <option value="pay_cut">Pay cut</option>
            <option value="medical">Medical emergency</option>
            <option value="other">Other</option>
          </select>
        </div>
        <Input label="New monthly income (₹, if any)" type="number" placeholder="0" />
        <Button variant="danger" block type="submit">Activate Survival Mode</Button>
      </form>
    </>
  );
}
