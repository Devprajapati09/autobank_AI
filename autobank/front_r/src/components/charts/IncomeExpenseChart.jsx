import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function IncomeExpenseChart({ data }) {
  return (
    <div className="card">
      <h3 className="card-title" style={{ marginBottom: 16 }}>Income vs expenses</h3>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ left: -20, right: 10 }}>
          <defs>
            <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1f6f54" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#1f6f54" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b4463a" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#b4463a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--hairline)" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--ink-faint)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "var(--ink-faint)" }} axisLine={false} tickLine={false} width={50} />
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid var(--hairline)" }} />
          <Area type="monotone" dataKey="income" stroke="#1f6f54" fill="url(#incomeGrad)" strokeWidth={2} />
          <Area type="monotone" dataKey="expense" stroke="#b4463a" fill="url(#expenseGrad)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
