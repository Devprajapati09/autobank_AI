const runLoanAgent = async (userPrompt, loanData = []) => {
  return {
    agent: 'LoanAgent',
    response: `By adding an extra ₹2,500 monthly towards your personal loan principal, you will save ₹18,400 in interest and shorten tenure by 7 months.`,
    timestamp: new Date()
  };
};
module.exports = { runLoanAgent };
