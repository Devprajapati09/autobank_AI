import { createContext, useState } from "react";
import { budgetCategories } from "../data/budget";
import { bills as demoBills } from "../data/bills";
import { transactions as demoTransactions } from "../data/transactions";

export const FinanceContext = createContext(null);

export function FinanceProvider({ children }) {
  const [budget, setBudget] = useState(budgetCategories);
  const [bills, setBills] = useState(demoBills);
  const [transactions] = useState(demoTransactions);
  const [survivalMode, setSurvivalMode] = useState(false);

  const markBillPaid = (billId) => {
    setBills((prev) => prev.map((b) => (b.id === billId ? { ...b, status: "paid" } : b)));
  };

  const toggleSurvivalMode = () => setSurvivalMode((s) => !s);

  return (
    <FinanceContext.Provider
      value={{ budget, setBudget, bills, markBillPaid, transactions, survivalMode, toggleSurvivalMode }}
    >
      {children}
    </FinanceContext.Provider>
  );
}
