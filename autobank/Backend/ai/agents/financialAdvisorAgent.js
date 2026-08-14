const { SYSTEM_PROMPT } = require('../prompts/systemPrompt');

const runFinancialAdvisorAgent = async (userPrompt, contextData = {}) => {
  return {
    agent: 'FinancialAdvisorAgent',
    response: `Based on your overall net worth and cash flow, your finances are in a healthy position. I recommend allocating 20% of your net monthly flow to high-yield savings.`,
    timestamp: new Date()
  };
};

module.exports = { runFinancialAdvisorAgent };
