const savingsService = require('../services/savingsService');

const getSavings = async (req, res, next) => {
  try {
    const savings = await savingsService.getUserSavingsGoals(req.user.id);
    res.status(200).json({ success: true, data: savings });
  } catch (err) {
    next(err);
  }
};

const createSavings = async (req, res, next) => {
  try {
    const { goalName, targetAmount, targetDate } = req.body;
    const result = await savingsService.createSavingsGoal(req.user.id, goalName, targetAmount, targetDate);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { getSavings, createSavings };
