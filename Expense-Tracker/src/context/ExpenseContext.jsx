import { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {

  const [user, setUser] = useState(
    localStorage.getItem("currentUser") || null
  );

  const storageKey = user ? `expenses_${user}` : null;

  const [expenses, setExpenses] = useState(() => {
    if (!storageKey) return [];
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(expenses));
    }
  }, [expenses, storageKey]);

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    setExpenses(saved ? JSON.parse(saved) : []);
  }, [storageKey]);

  const addExpense = (expense) =>
    setExpenses(prev => [...prev, expense]);

  const deleteExpense = (id) =>
    setExpenses(prev => prev.filter(e => e.id !== id));

  return (
    <ExpenseContext.Provider value={{
      expenses,
      addExpense,
      deleteExpense,
      selectedDate,
      setSelectedDate,
      user,
      setUser
    }}>
      {children}
    </ExpenseContext.Provider>
  );
};
