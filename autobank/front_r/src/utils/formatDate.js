export function formatDate(dateStr, { withYear = false } = {}) {
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: withYear ? "numeric" : undefined,
  });
}

export function daysUntil(dateStr) {
  const now = new Date();
  const target = new Date(dateStr);
  return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
}
