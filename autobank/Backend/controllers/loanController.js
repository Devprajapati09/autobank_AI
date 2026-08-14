const loanService = require('../services/loanService');

const getLoans = async (req, res, next) => {
  try {
    const loans = await loanService.getUserLoans(req.user.id);
    res.status(200).json({ success: true, data: loans });
  } catch (err) {
    next(err);
  }
};

const applyLoan = async (req, res, next) => {
  try {
    const { loanType, principalAmount, interestRate, tenureMonths } = req.body;
    const loan = await loanService.applyForLoan(req.user.id, loanType, principalAmount, interestRate, tenureMonths);
    res.status(201).json({ success: true, data: loan });
  } catch (err) {
    next(err);
  }
};

module.exports = { getLoans, applyLoan };
