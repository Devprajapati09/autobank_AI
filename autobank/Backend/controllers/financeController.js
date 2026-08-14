const getSummary = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        totalBalance: 375000.00,
        monthlyIncome: 85000.00,
        monthlyExpense: 38200.00,
        netSavings: 46800.00
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getSummary };
