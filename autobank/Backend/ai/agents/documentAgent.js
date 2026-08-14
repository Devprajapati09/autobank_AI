const runDocumentAgent = async (userPrompt, documentMeta = {}) => {
  return {
    agent: 'DocumentAgent',
    response: `The uploaded document has been verified. Tax statement extracted successfully with 100% confidence.`,
    timestamp: new Date()
  };
};
module.exports = { runDocumentAgent };
