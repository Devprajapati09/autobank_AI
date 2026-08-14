import { formatCurrency } from "../../utils/formatCurrency";
import { calcEMI } from "../../utils/calculations";

export default function LoanComparisonCard({ loans, principal, tenure }) {
  return (
    <div className="card" style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ textAlign: "left", color: "var(--ink-faint)", fontSize: 11.5 }}>
            <th style={{ padding: "8px 6px" }}>Bank</th>
            <th style={{ padding: "8px 6px" }}>Rate</th>
            <th style={{ padding: "8px 6px" }}>EMI</th>
            <th style={{ padding: "8px 6px" }}>Total payable</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((l) => {
            const emi = calcEMI(principal, l.rate, tenure);
            return (
              <tr key={l.id} style={{ borderTop: "1px solid var(--hairline)" }}>
                <td style={{ padding: "10px 6px", fontWeight: 600 }}>{l.bank}</td>
                <td style={{ padding: "10px 6px" }} className="mono">{l.rate}%</td>
                <td style={{ padding: "10px 6px" }} className="mono">{formatCurrency(emi)}</td>
                <td style={{ padding: "10px 6px" }} className="mono">{formatCurrency(emi * tenure)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
