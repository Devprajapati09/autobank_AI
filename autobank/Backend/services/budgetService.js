const Budget = require('../models/budgetModel');

const getUserBudgets = async (userId) => {
  return await Budget.find({ userId });
};

const createOrUpdateBudget = async (userId, category, limitAmount, month, year) => {
  return await Budget.findOneAndUpdate(
    { userId, category, month, year },
    { limitAmount },
    { new: true, upsert: true }
  );
};

module.exports = { getUserBudgets, createOrUpdateBudget };
