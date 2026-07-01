import { useContext, useState } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

export default function ExpenseForm() {

  const { addExpense, selectedDate } =
    useContext(ExpenseContext);

  const [form, setForm] = useState({
    category: "Food",
    amount: ""
  });

  const submit = (e) => {
    e.preventDefault();

    addExpense({
      id: Date.now(),
      date: selectedDate.toLocaleDateString(),
      ...form
    });

    setForm({ category: "Food", amount: "" });
  };

  return (
    <form className="card" onSubmit={submit}>
      <h3>Add Expense</h3>

      <select
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Bills</option>
        <option>Shopping</option>
        <option>Travel</option>
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) =>
          setForm({ ...form, amount: e.target.value })
        }
      />

      <button>Add Expense</button>
    </form>
  );
}