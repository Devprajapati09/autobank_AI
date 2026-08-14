import Button from "../../components/common/Button.jsx";
import Input from "../../components/common/Input.jsx";

export default function Security() {
  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Security</h1></div>
      <div className="card" style={{ maxWidth: 420 }}>
        <Input label="Current password" type="password" />
        <Input label="New password" type="password" />
        <Button variant="primary">Update password</Button>
      </div>
    </div>
  );
}
