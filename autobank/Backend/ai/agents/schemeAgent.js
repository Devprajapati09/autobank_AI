const runSchemeAgent = async (userPrompt, userProfile = {}) => {
  return {
    agent: 'SchemeAgent',
    response: `Found 3 government schemes matching your profile: PM-Vidyalaxmi Education Loan Subsidy, National Pension System Tax Saver, and MSME Credit Subsidy.`,
    timestamp: new Date()
  };
};
module.exports = { runSchemeAgent };
