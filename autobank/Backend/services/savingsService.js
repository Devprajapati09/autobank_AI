const Savings = require('../models/savingsModel');

const getUserSavingsGoals = async (userId) => {
  return await Savings.find({ userId });
};

const createSavingsGoal = async (userId, goalName, targetAmount, targetDate) => {
  return await Savings.create({ userId, goalName, targetAmount, targetDate });
};

module.exports = { getUserSavingsGoals, createSavingsGoal };
