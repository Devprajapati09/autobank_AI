const runSavingsAgent = async (userPrompt, savingsData = []) => {
  return {
    agent: 'SavingsAgent',
    response: `You are 56% towards your emergency goal of ₹5,00,000. At your current pace of ₹15,000/month, you will achieve this by December 2026.`,
    timestamp: new Date()
  };
};
module.exports = { runSavingsAgent };
