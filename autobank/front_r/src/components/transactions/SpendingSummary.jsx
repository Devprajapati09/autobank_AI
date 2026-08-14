import { formatCurrency } from "../../utils/formatCurrency";

export default function SpendingSummary({ totalIn, totalOut }) {
  return (
    <div className="grid grid-2">
      <div className="card">
        <span className="text-soft" style={{ fontSize: 12.5 }}>Money in</span>
        <div className="amt-lg text-green" style={{ fontSize: 24, marginTop: 4 }}>{formatCurrency(totalIn)}</div>
      </div>
      <div className="card">
        <span className="text-soft" style={{ fontSize: 12.5 }}>Money out</span>
        <div className="amt-lg text-brick" style={{ fontSize: 24, marginTop: 4 }}>{formatCurrency(totalOut)}</div>
      </div>
    </div>
  );
}
