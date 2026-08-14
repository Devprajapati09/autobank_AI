import { useAI } from "../../hooks/useAI";
import AIMessage from "../../components/ai/AIMessage.jsx";

export default function ChatHistory() {
  const { messages } = useAI();
  return (
    <div className="stack gap-24">
      <div className="page-head"><h1>Chat history</h1></div>
      <div className="card stack gap-12">
        {messages.map((m) => <AIMessage key={m.id} message={m} />)}
      </div>
    </div>
  );
}
