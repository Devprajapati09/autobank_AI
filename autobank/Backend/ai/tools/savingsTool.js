const getSavingsProgress = async (userId) => {
  return { success: true, totalSavingsGoal: 500000.00, currentSaved: 280000.00 };
};
module.exports = { getSavingsProgress };
