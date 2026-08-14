import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/common/Input.jsx";
import Button from "../../components/common/Button.jsx";

export default function Register() {
  const { register, loading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    await register(form.name, form.email);
    navigate("/onboarding/welcome");
  };

  return (
    <div className="auth-card">
      <h1>Create your account</h1>
      <p className="sub">Takes about 3 minutes. KYC comes right after.</p>
      <form onSubmit={submit}>
        <Input label="Full name" placeholder="Aarav Mehta" value={form.name} onChange={update("name")} />
        <Input label="Email" type="email" placeholder="you@example.com" value={form.email} onChange={update("email")} />
        <Input label="Password" type="password" placeholder="Create a password" value={form.password} onChange={update("password")} />
        <Button variant="primary" block type="submit" disabled={loading}>{loading ? "Creating account..." : "Create account"}</Button>
      </form>
      <p className="auth-foot">Already have an account? <Link to="/login" style={{ fontWeight: 600 }}>Log in</Link></p>
    </div>
  );
}
