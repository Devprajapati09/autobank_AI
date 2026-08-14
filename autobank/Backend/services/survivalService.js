const { calculateSurvivalRunway } = require('../utils/survivalCalculator');

const getSurvivalAnalysis = async (userId) => {
  // Demo baseline calculation
  const liquidSavings = 250000;
  const essentialBurn = 35000;
  return calculateSurvivalRunway(liquidSavings, essentialBurn);
};

module.exports = { getSurvivalAnalysis };
