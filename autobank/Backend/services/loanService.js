const Loan = require('../models/loanModel');
const { calculateEMI } = require('../utils/loanCalculator');

const getUserLoans = async (userId) => {
  return await Loan.find({ userId });
};

const applyForLoan = async (userId, loanType, principalAmount, interestRate, tenureMonths) => {
  const monthlyEmi = calculateEMI(principalAmount, interestRate, tenureMonths);
  return await Loan.create({
    userId,
    loanType,
    principalAmount,
    interestRate,
    tenureMonths,
    remainingBalance: principalAmount,
    monthlyEmi,
    status: 'active'
  });
};

module.exports = { getUserLoans, applyForLoan };
