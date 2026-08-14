const understandWorkflow = async (userInput) => {
  return { intent: 'ANALYZE_FINANCES', sentiment: 'positive', extractedEntities: { topic: 'savings' } };
};
module.exports = { understandWorkflow };
