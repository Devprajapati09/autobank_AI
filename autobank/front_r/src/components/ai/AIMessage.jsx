export default function AIMessage({ message }) {
  const isUser = message.from === "user";
  return (
    <div className={`ai-msg ${isUser ? "from-user" : "from-ai"}`}>
      {!isUser && <div className="ai-msg-label">AutoBank AI</div>}
      {message.text}
    </div>
  );
}
