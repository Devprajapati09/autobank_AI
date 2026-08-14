const getBudgetStatus = async (userId) => {
  return { success: true, health: 'HEALTHY', usage: '48%' };
};
module.exports = { getBudgetStatus };
