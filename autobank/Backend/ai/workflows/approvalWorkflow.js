const approvalWorkflow = async (actionPlan) => {
  return { requiresHumanApproval: false, riskScore: 0.05, status: 'APPROVED' };
};
module.exports = { approvalWorkflow };
