export function calcEMI(principal, annualRatePct, tenureMonths) {
  const r = annualRatePct / 12 / 100;
  if (r === 0) return principal / tenureMonths;
  const emi = (principal * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1);
  return Math.round(emi);
}

export function calcAffordabilityScore({ monthlyIncome, monthlyExpenses, existingEmi, newEmi }) {
  const disposable = monthlyIncome - monthlyExpenses - existingEmi;
  const ratio = (existingEmi + newEmi) / monthlyIncome;
  let score = Math.round(100 - ratio * 140);
  score = Math.max(5, Math.min(98, score));
  return { score, disposable, ratio: Math.round(ratio * 100) };
}

export function calcBudgetHealth(categories) {
  const total = categories.reduce((s, c) => s + c.limit, 0);
  const spent = categories.reduce((s, c) => s + c.spent, 0);
  return { total, spent, pct: total ? Math.round((spent / total) * 100) : 0 };
}

export function calcSurvivalRunway(savings, essentialMonthlySpend) {
  if (!essentialMonthlySpend) return 0;
  return Math.round((savings / essentialMonthlySpend) * 10) / 10;
}

export function calcFinancialHealthScore({ savingsRate, billsOnTimePct, debtToIncome, emergencyFundMonths }) {
  const s1 = Math.min(30, savingsRate * 1.2);
  const s2 = Math.min(25, (billsOnTimePct / 100) * 25);
  const s3 = Math.min(25, Math.max(0, 25 - debtToIncome * 0.6));
  const s4 = Math.min(20, emergencyFundMonths * 4);
  return Math.round(s1 + s2 + s3 + s4);
}
