import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="auth-card">
      <h1>Welcome back</h1>
      <p className="sub">Log in to keep your money on track.</p>
      <form onSubmit={submit}>
        <Input label="Email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="row-between" style={{ marginBottom: 18 }}>
          <Link to="/forgot-password" className="text-soft" style={{ fontSize: 12.5 }}>Forgot password?</Link>
        </div>
        <Button variant="primary" block type="submit" disabled={loading}>{loading ? "Logging in..." : "Log in"}</Button>
      </form>
      <div className="auth-divider">or</div>
      <Button variant="ghost" block onClick={submit}>Continue with demo account</Button>
      <p className="auth-foot">New to AutoBank AI? <Link to="/register" style={{ fontWeight: 600 }}>Create an account</Link></p>
    </div>
  );
}
