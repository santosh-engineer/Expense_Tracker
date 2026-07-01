import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

import Calendar from "../Calendar/Calendar";
import ExpenseForm from "../Expense/ExpenseForm";
import ExpenseTable from "../Expense/ExpenseTable";
import ExpenseChart from "../Expense/ExpenseChart";

import { DollarSign, CalendarDays, Layers } from "lucide-react";

export default function Dashboard() {

  const { expenses } = useContext(ExpenseContext);

  const total = expenses.reduce(
    (sum, e) => sum + Number(e.amount),
    0
  );

  const today = new Date().toLocaleDateString();

  const todayTotal = expenses
    .filter(e => e.date === today)
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const categories = new Set(
    expenses.map(e => e.category)
  ).size;

  return (
    <div className="container">

      {/* ===== KPI CARDS ===== */}
      <div className="kpi-grid">

        <div className="kpi-card teal">
          <DollarSign size={28}/>
          <h4>Total Expense</h4>
          <p>${total}</p>
        </div>

        <div className="kpi-card blue">
          <CalendarDays size={28}/>
          <h4>Today</h4>
          <p>${todayTotal}</p>
        </div>

        <div className="kpi-card purple">
          <Layers size={28}/>
          <h4>Categories</h4>
          <p>{categories}</p>
        </div>

      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="top-grid">
        <Calendar />
        <ExpenseForm />
        <ExpenseChart />
      </div>

      <ExpenseTable />

    </div>
  );
}