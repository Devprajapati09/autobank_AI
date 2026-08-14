import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { EXPENSE_CATEGORY_COLORS } from "../../utils/constants";

export default function SpendingCategoryChart({ data }) {
  return (
    <div className="card">
      <h3 className="card-title" style={{ marginBottom: 16 }}>Spending by category</h3>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={58} outerRadius={90} paddingAngle={2}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={EXPENSE_CATEGORY_COLORS[entry.name] || "#8b93ab"} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid var(--hairline)" }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
