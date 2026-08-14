const Transaction = require('../models/transactionModel');

const getTransactions = async (req, res, next) => {
  try {
    const txns = await Transaction.find({ userId: req.user.id }).sort({ date: -1 });
    res.status(200).json({ success: true, data: txns });
  } catch (err) {
    next(err);
  }
};

const createTransaction = async (req, res, next) => {
  try {
    const { accountId, amount, type, category, description } = req.body;
    const txn = await Transaction.create({ userId: req.user.id, accountId, amount, type, category, description });
    res.status(201).json({ success: true, data: txn });
  } catch (err) {
    next(err);
  }
};

module.exports = { getTransactions, createTransaction };
