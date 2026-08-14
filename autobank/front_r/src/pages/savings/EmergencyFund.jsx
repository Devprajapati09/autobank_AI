import { demoUser } from "../../data/demoUser";
import EmergencyFundCard from "../../components/savings/EmergencyFundCard.jsx";
import SavingsRecommendation from "../../components/savings/SavingsRecommendation.jsx";

export default function EmergencyFund() {
  return (
    <>
      <div className="page-head"><div><h1>Emergency fund</h1><p className="sub">Your safety net if income stops.</p></div></div>
      <div className="grid grid-2">
        <EmergencyFundCard current={demoUser.emergencyFund} monthsCovered={2.4} />
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: 8 }}>AI notes</h3>
          <SavingsRecommendation text="Moving ₹3,000/month from your Shopping budget would get you to a 6-month emergency fund by March 2027." />
        </div>
      </div>
    </>
  );
}
