const runBillAgent = async (userPrompt, billData = []) => {
  return {
    agent: 'BillAgent',
    response: `You have 2 upcoming utility bills due in 5 days totaling ₹14,800. Auto-pay is scheduled for August 15th.`,
    timestamp: new Date()
  };
};
module.exports = { runBillAgent };
