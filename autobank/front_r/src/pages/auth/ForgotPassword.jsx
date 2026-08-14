import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="auth-card">
      <h1>Reset your password</h1>
      <p className="sub">We'll email you a link to get back in.</p>
      {sent ? (
        <p className="text-soft" style={{ fontSize: 14 }}>Check {email || "your inbox"} for a reset link.</p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <Input label="Email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button variant="primary" block type="submit">Send reset link</Button>
        </form>
      )}
      <p className="auth-foot"><Link to="/login" style={{ fontWeight: 600 }}>Back to log in</Link></p>
    </div>
  );
}
