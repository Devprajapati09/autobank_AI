const getRecentTransactions = async (userId, limit = 10) => {
  return { success: true, count: limit, data: [] };
};
module.exports = { getRecentTransactions };
