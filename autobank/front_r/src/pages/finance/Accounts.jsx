import AccountCard from "../../components/finance/AccountCard.jsx";

const accounts = [
  { id: 1, bank: "SBI Savings", last4: "4821", balance: 142300 },
  { id: 2, bank: "HDFC Salary Account", last4: "9012", balance: 72000 },
];

export default function Accounts() {
  return (
    <>
      <div className="page-head"><div><h1>Linked accounts</h1><p className="sub">Everything AutoBank AI reads to build your picture.</p></div></div>
      <div className="stack gap-16">
        {accounts.map((a) => <AccountCard key={a.id} account={a} />)}
      </div>
    </>
  );
}
