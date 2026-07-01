import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

export default function MyCalendar() {

  const { selectedDate, setSelectedDate } =
    useContext(ExpenseContext);

  return (
    <div className="card">
      <h3>{selectedDate.toDateString()}</h3>

      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
      />
    </div>
  );
}