const AIConversation = require('../models/aiConversationModel');
const { runFinancialAdvisorAgent } = require('../ai/agents/financialAdvisorAgent');

const handleAiChat = async (userId, message, agentType = 'financial_advisor') => {
  await AIConversation.create({ userId, role: 'user', message, agentType });
  const aiResult = await runFinancialAdvisorAgent(message);
  await AIConversation.create({ userId, role: 'assistant', message: aiResult.response, agentType });
  return aiResult;
};

const getChatHistory = async (userId) => {
  return await AIConversation.find({ userId }).sort({ createdAt: 1 });
};

module.exports = { handleAiChat, getChatHistory };
