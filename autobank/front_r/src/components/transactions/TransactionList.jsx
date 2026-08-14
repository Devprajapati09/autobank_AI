import TransactionCard from "./TransactionCard.jsx";
import EmptyState from "../common/EmptyState.jsx";

export default function TransactionList({ transactions }) {
  if (!transactions.length) {
    return <EmptyState title="No transactions found" body="Try a different filter or date range." />;
  }
  return (
    <div className="card">
      {transactions.map((tx) => (
        <TransactionCard key={tx.id} tx={tx} />
      ))}
    </div>
  );
}
