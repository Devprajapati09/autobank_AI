import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";
import { KYC_STEPS } from "../../utils/constants";

export default function PersonalDetails() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", dob: "", pan: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="card">
      <div className="kyc-progress">
        {KYC_STEPS.map((s, i) => (
          <div key={s} className={`seg${i === 0 ? " done" : i === 1 ? " current" : ""}`} />
        ))}
      </div>
      <h1 style={{ fontSize: 20, marginBottom: 18 }}>Personal details</h1>
      <form onSubmit={(e) => { e.preventDefault(); navigate("/kyc/identity-verification"); }}>
        <Input label="Full legal name" placeholder="As per PAN card" value={form.fullName} onChange={update("fullName")} />
        <Input label="Date of birth" type="date" value={form.dob} onChange={update("dob")} />
        <Input label="PAN number" placeholder="ABCDE1234F" value={form.pan} onChange={update("pan")} />
        <Button variant="primary" block type="submit">Continue</Button>
      </form>
    </div>
  );
}
