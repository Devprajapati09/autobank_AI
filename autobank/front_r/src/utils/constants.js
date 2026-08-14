export const APP_NAME = "AutoBank AI";

export const EXPENSE_CATEGORY_COLORS = {
  Housing: "#28396e",
  Food: "#e2972e",
  Transport: "#1f6f54",
  Utilities: "#4a5a94",
  Entertainment: "#b4463a",
  Healthcare: "#8b93ab",
  Shopping: "#a86618",
  Other: "#c7cee6",
};

export const KYC_STEPS = ["Personal", "Identity", "Address", "Documents", "Review"];

export const NAV_SECTIONS = [
  {
    label: "Overview",
    items: [{ label: "Dashboard", to: "/dashboard", icon: "LayoutDashboard" }],
  },
  {
    label: "Money",
    items: [
      { label: "Budget", to: "/budget", icon: "PieChart" },
      { label: "Bills", to: "/bills", icon: "ReceiptText" },
      { label: "Transactions", to: "/transactions", icon: "ArrowLeftRight" },
      { label: "Savings", to: "/savings", icon: "PiggyBank" },
      { label: "Loans", to: "/loans", icon: "Landmark" },
    ],
  },
  {
    label: "Support",
    items: [
      { label: "Survival Mode", to: "/survival", icon: "LifeBuoy" },
      { label: "Documents", to: "/documents", icon: "FileCheck2" },
      { label: "Gov Schemes", to: "/schemes", icon: "BadgePercent" },
      { label: "AI Assistant", to: "/assistant", icon: "Sparkles" },
    ],
  },
  {
    label: "Account",
    items: [
      { label: "Notifications", to: "/notifications", icon: "Bell" },
      { label: "Profile", to: "/profile", icon: "UserRound" },
    ],
  },
];
