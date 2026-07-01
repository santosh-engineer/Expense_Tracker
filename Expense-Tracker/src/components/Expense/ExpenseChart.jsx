import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const COLORS = [
  "#14b8a6",
  "#ef4444",
  "#f59e0b",
  "#8b5cf6",
  "#06b6d4"
];

export default function ExpenseChart() {

  const { expenses } = useContext(ExpenseContext);

  // Group by category
  const data = Object.values(
    expenses.reduce((acc, e) => {
      acc[e.category] = acc[e.category] || {
        name: e.category,
        value: 0
      };
      acc[e.category].value += Number(e.amount);
      return acc;
    }, {})
  );

  return (
    <div className="card">
      <h3>Expense Distribution</h3>

      {data.length === 0 ? (
        <p>No data</p>
      ) : (
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={90}
              label
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}