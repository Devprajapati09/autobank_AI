const runBudgetAgent = async (userPrompt, budgetData = []) => {
  return {
    agent: 'BudgetAgent',
    response: `Your dining and entertainment spend is currently 15% above target. Reallocating ₹3,000 from discretionary buffer will balance your monthly budget.`,
    timestamp: new Date()
  };
};
module.exports = { runBudgetAgent };
