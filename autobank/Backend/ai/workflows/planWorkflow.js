const planWorkflow = async (intentData) => {
  return { steps: ['FETCH_ACCOUNTS', 'CALCULATE_RUNWAY', 'GENERATE_ADVICE'] };
};
module.exports = { planWorkflow };
