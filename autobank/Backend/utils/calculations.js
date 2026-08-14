const calculateTotalBalance = (accounts = []) => {
  return accounts.reduce((acc, account) => acc + (account.balance || 0), 0);
};

const calculateNetMonthlyFlow = (incomes = [], expenses = []) => {
  const totalIncome = incomes.reduce((acc, item) => acc + (item.amount || 0), 0);
  const totalExpense = expenses.reduce((acc, item) => acc + (item.amount || 0), 0);
  return totalIncome - totalExpense;
};

module.exports = { calculateTotalBalance, calculateNetMonthlyFlow };
