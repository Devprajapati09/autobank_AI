const analyzeBudgetHealth = (budgets = []) => {
  let totalLimit = 0;
  let totalSpent = 0;

  const categories = budgets.map(b => {
    totalLimit += b.limitAmount || 0;
    totalSpent += b.spentAmount || 0;
    const usagePercent = b.limitAmount > 0 ? ((b.spentAmount / b.limitAmount) * 100).toFixed(1) : 0;

    return {
      category: b.category,
      limit: b.limitAmount,
      spent: b.spentAmount,
      usagePercent: parseFloat(usagePercent),
      status: usagePercent > 90 ? 'OVER_BUDGET' : usagePercent > 75 ? 'WARNING' : 'HEALTHY'
    };
  });

  return {
    totalLimit,
    totalSpent,
    overallUsagePercent: totalLimit > 0 ? parseFloat(((totalSpent / totalLimit) * 100).toFixed(1)) : 0,
    categories
  };
};

module.exports = { analyzeBudgetHealth };
