export default function ChatMessage({ role, text }) {
  return <div className={`chat-row ${role === "user" ? "user" : "assistant"}`}><div className="bubble">{text}</div></div>;
}
