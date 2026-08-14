import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

export default function BudgetChart({ data }) {
  const chartData = data.map((c) => ({ name: c.name, Limit: c.limit, Spent: c.spent }));
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={chartData} margin={{ left: -20, right: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--hairline)" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 10.5, fill: "var(--ink-faint)" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "var(--ink-faint)" }} axisLine={false} tickLine={false} width={50} />
        <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid var(--hairline)" }} />
        <Legend wrapperStyle={{ fontSize: 11 }} />
        <Bar dataKey="Limit" fill="#c7cee6" radius={[6, 6, 0, 0]} />
        <Bar dataKey="Spent" fill="#28396e" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
