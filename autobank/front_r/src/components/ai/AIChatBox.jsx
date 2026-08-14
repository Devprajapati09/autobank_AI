import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { useAI } from "../../hooks/useAI";
import AIMessage from "./AIMessage.jsx";
import AIThinking from "./AIThinking.jsx";
import ApprovalCard from "./ApprovalCard.jsx";

const SUGGESTIONS = [
  "Can I afford a ₹5L personal loan?",
  "How long will my savings last?",
  "Pay my upcoming bills",
  "How can I save more this month?",
];

export default function AIChatBox() {
  const { messages, thinking, sendMessage, pendingApproval, resolveApproval } = useAI();
  const [text, setText] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking, pendingApproval]);

  const submit = (e) => {
    e?.preventDefault();
    if (!text.trim()) return;
    sendMessage(text.trim());
    setText("");
  };

  return (
    <div className="ai-chat">
      <div className="ai-chat-body" ref={bodyRef}>
        {messages.map((m) => (
          <AIMessage key={m.id} message={m} />
        ))}
        {pendingApproval && <ApprovalCard approval={pendingApproval} onResolve={resolveApproval} />}
        {thinking && <AIThinking />}
      </div>

      <div className="ai-suggestions">
        {SUGGESTIONS.map((s) => (
          <button key={s} className="ai-suggestion-chip" onClick={() => sendMessage(s)}>{s}</button>
        ))}
      </div>

      <form className="ai-chat-input" onSubmit={submit}>
        <input
          className="input"
          placeholder="Ask AutoBank AI anything about your money..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" aria-label="Send">
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
