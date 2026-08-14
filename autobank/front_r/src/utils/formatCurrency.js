export function formatCurrency(amount, { compact = false } = {}) {
  const n = Number(amount) || 0;
  if (compact && Math.abs(n) >= 100000) {
    return `₹${(n / 100000).toFixed(1)}L`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}
