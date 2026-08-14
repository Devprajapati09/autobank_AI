const env = require('./env');

const aiConfig = {
  apiKey: env.GEMINI_API_KEY,
  defaultModel: 'gemini-1.5-flash',
  maxTokens: 2048,
  temperature: 0.7
};

module.exports = aiConfig;
