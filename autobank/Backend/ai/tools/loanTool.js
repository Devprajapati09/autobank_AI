const getLoanSummary = async (userId) => {
  return { success: true, activeLoans: 1, totalEmi: 18500.00 };
};
module.exports = { getLoanSummary };
