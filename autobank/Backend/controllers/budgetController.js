const budgetService = require('../services/budgetService');

const getBudgets = async (req, res, next) => {
  try {
    const budgets = await budgetService.getUserBudgets(req.user.id);
    res.status(200).json({ success: true, data: budgets });
  } catch (err) {
    next(err);
  }
};

const updateBudget = async (req, res, next) => {
  try {
    const { category, limitAmount, month, year } = req.body;
    const result = await budgetService.createOrUpdateBudget(req.user.id, category, limitAmount, month, year);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { getBudgets, updateBudget };
