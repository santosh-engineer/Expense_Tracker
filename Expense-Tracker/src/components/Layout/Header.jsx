import { Moon, Sun, LogOut } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Header({ setUser }) {

  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className="header">
      <h2>Expense Tracker</h2>

      <div>
        <button onClick={() => setUser(null)}>
          <LogOut size={16} /> Sign Out
        </button>

        <button onClick={() => setDark(!dark)}>
          {dark ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
}