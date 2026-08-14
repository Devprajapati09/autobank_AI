import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="auth-card">
      <h1>Set a new password</h1>
      <p className="sub">Make it something you haven't used before.</p>
      <form onSubmit={(e) => { e.preventDefault(); navigate("/login"); }}>
        <Input label="New password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="primary" block type="submit">Update password</Button>
      </form>
    </div>
  );
}
