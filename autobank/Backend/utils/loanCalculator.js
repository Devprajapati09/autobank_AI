const calculateEMI = (principal, annualInterestRate, tenureMonths) => {
  if (!principal || !annualInterestRate || !tenureMonths) return 0;
  const monthlyRate = annualInterestRate / 12 / 100;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
              (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return parseFloat(emi.toFixed(2));
};

const generateAmortizationSchedule = (principal, annualInterestRate, tenureMonths) => {
  const emi = calculateEMI(principal, annualInterestRate, tenureMonths);
  let balance = principal;
  const monthlyRate = annualInterestRate / 12 / 100;
  const schedule = [];

  for (let i = 1; i <= tenureMonths; i++) {
    const interest = balance * monthlyRate;
    const principalPaid = emi - interest;
    balance -= principalPaid;

    schedule.push({
      month: i,
      emi,
      principalPaid: parseFloat(principalPaid.toFixed(2)),
      interestPaid: parseFloat(interest.toFixed(2)),
      remainingBalance: parseFloat(Math.max(0, balance).toFixed(2))
    });
  }

  return schedule;
};

module.exports = { calculateEMI, generateAmortizationSchedule };
