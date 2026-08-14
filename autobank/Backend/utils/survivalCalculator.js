const calculateSurvivalRunway = (liquidSavings, monthlyEssentialBurnRate) => {
  if (!monthlyEssentialBurnRate || monthlyEssentialBurnRate <= 0) {
    return { runwayMonths: 99, status: 'SECURE', advice: 'Your essential burn rate is zero or invalid.' };
  }

  const runwayMonths = parseFloat((liquidSavings / monthlyEssentialBurnRate).toFixed(1));
  let status = 'SECURE';
  let advice = 'Your emergency reserves are healthy.';

  if (runwayMonths < 3) {
    status = 'CRITICAL';
    advice = 'Urgent: You have less than 3 months of emergency runway. Cut discretionary spending immediately.';
  } else if (runwayMonths < 6) {
    status = 'MODERATE';
    advice = 'Consider building your liquid emergency fund to at least 6 months of essential expenses.';
  }

  return { liquidSavings, monthlyEssentialBurnRate, runwayMonths, status, advice };
};

module.exports = { calculateSurvivalRunway };
