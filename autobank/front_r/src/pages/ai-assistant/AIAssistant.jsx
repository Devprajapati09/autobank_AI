import { Sparkles } from "lucide-react";
import AIChatBox from "../../components/ai/AIChatBox.jsx";

export default function AIAssistant() {
  return (
    <div className="stack gap-16">
      <div className="page-head">
        <div>
          <h1><Sparkles size={22} style={{ verticalAlign: -3, marginRight: 8, color: "var(--marigold)" }} />AI Assistant</h1>
          <p className="sub">Ask about budgets, bills, loans, or your savings runway. It always asks before it acts.</p>
        </div>
      </div>
      <div className="card">
        <AIChatBox />
      </div>
    </div>
  );
}
