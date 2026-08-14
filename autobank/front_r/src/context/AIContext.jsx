import { createContext, useState } from "react";

export const AIContext = createContext(null);

const initialMessages = [
  {
    id: "m1",
    from: "ai",
    text: "Hi Aarav, I'm your AutoBank AI assistant. I can help you budget, pay bills, compare loans, or check what you can afford. What's on your mind?",
  },
];

export function AIProvider({ children }) {
  const [messages, setMessages] = useState(initialMessages);
  const [thinking, setThinking] = useState(false);
  const [pendingApproval, setPendingApproval] = useState(null);

  const respond = (userText) => {
    const lower = userText.toLowerCase();
    if (lower.includes("loan") || lower.includes("afford")) {
      return "Based on your income of ₹78,000/month and current EMIs, you can comfortably afford an EMI up to ₹14,000/month without hurting your savings rate. Want me to compare loan offers?";
    }
    if (lower.includes("save") || lower.includes("saving")) {
      return "You're saving about ₹15,600/month right now, a 20% savings rate. If you trim dining-out spending by ₹1,500/month, you'd hit your emergency fund goal 2 months sooner.";
    }
    if (lower.includes("bill") || lower.includes("pay")) {
      setPendingApproval({
        id: "ap1",
        title: "Pay Jio Fiber bill",
        detail: "₹999 is due on 16 Aug. I can pay it now from your primary account so you don't risk a late fee.",
      });
      return "Your Jio Fiber bill of ₹999 is due in 3 days. I've drafted an action below — I'll only proceed once you approve.";
    }
    return "Got it. I'm keeping an eye on your budget, bills, and goals — let me know if you want a specific recommendation on loans, savings, or your monthly budget.";
  };

  const sendMessage = (text) => {
    const userMsg = { id: crypto.randomUUID(), from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setThinking(true);
    setTimeout(() => {
      const reply = respond(text);
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), from: "ai", text: reply }]);
      setThinking(false);
    }, 900);
  };

  const resolveApproval = (approved) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        from: "ai",
        text: approved
          ? "Done — I've paid the Jio Fiber bill. Your account balance and transaction history are updated."
          : "No problem, I won't make that payment. I'll remind you again closer to the due date.",
      },
    ]);
    setPendingApproval(null);
  };

  return (
    <AIContext.Provider value={{ messages, thinking, sendMessage, pendingApproval, resolveApproval }}>
      {children}
    </AIContext.Provider>
  );
}
