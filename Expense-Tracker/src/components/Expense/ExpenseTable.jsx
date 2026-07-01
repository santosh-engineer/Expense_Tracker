import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import { Trash2 } from "lucide-react";

export default function ExpenseTable() {

  const { expenses, deleteExpense } =
    useContext(ExpenseContext);

  return (
    <div className="card">
      <h3>Recent Expenses</h3>

      {expenses.length === 0 ? (
        <p>No expenses added</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {expenses.map(e => (
              <tr key={e.id}>
                <td>{e.date}</td>

                <td className="amount">
                  ${e.amount}
                </td>

                <td>
                  <span className="badge">
                    {e.category}
                  </span>
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteExpense(e.id)}
                  >
                    <Trash2 size={16}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}