import Badge from "../common/Badge.jsx";

const TONE = { paid: "green", due_soon: "amber", upcoming: "neutral", overdue: "red" };
const LABEL = { paid: "Paid", due_soon: "Due soon", upcoming: "Upcoming", overdue: "Overdue" };

export default function BillStatus({ status }) {
  return <Badge tone={TONE[status] || "neutral"}>{LABEL[status] || status}</Badge>;
}
