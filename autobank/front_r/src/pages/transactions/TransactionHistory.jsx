import { useMemo, useState } from "react";
import { useFinance } from "../../hooks/useFinance";
import TransactionList from "../../components/transactions/TransactionList.jsx";
import TransactionFilter from "../../components/transactions/TransactionFilter.jsx";
import SpendingSummary from "../../components/transactions/SpendingSummary.jsx";

export default function TransactionHistory() {
  const { transactions } = useFinance();
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? transactions : transactions.filter((t) => t.category === active);
  const { totalIn, totalOut } = useMemo(() => {
    return transactions.reduce(
      (acc, t) => (t.type === "credit" ? { ...acc, totalIn: acc.totalIn + t.amount } : { ...acc, totalOut: acc.totalOut + Math.abs(t.amount) }),
      { totalIn: 0, totalOut: 0 }
    );
  }, [transactions]);

  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Transactions</h1></div>
      <SpendingSummary totalIn={totalIn} totalOut={totalOut} />
      <TransactionFilter active={active} onChange={setActive} />
      <TransactionList transactions={filtered} />
    </div>
  );
}
