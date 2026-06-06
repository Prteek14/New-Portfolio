import React, { useState, useRef, useEffect } from "react";

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const TypingDots = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

function AiChat() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chat_history");
    return saved
      ? JSON.parse(saved)
      : [
          {
            role: "bot",
            text: "Hi! I'm Prteek's AI assistant. Ask me anything about him — his skills, projects, or experience! 👋",
          },
        ];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chat_history", JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const query = input.trim();
    if (!query || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: query }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are Prteek Gupta's personal AI assistant on his portfolio website. Answer questions only about Prteek. Here's info about him:
                  - Full Stack Developer (MERN Stack)
                  - Skills: React, Node.js, Express, MongoDB, Tailwind CSS, JWT, Cloudinary, Git
                  - Projects: CPMS (Campus Placement Management System) at cpms-six.vercel.app, Jira Board at jira-board-tau.vercel.app
                  - Internship: Frontend Developer at Unified Mentor
                  - Education: BCA from Invertis University, Bareilly (2026)
                  - Location: Bareilly, U.P., India
                  - Email: prteekgupta36@gmail.com
                  - GitHub: github.com/Prteek14
                  - LinkedIn: linkedin.com/in/Prteek-gupta

                  If asked anything unrelated to Prteek, politely say you can only answer about Prteek.

User question: ${query}`,
                  },
                ],
              },
            ],
          }),
        },
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error?.message || "Gemini API request failed");
      }

      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't get a response. Try again!";

      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong. Please try again!" },
      ]);
    } finally {
      setLoading(false);
    }
  };
  const clearChat = () => {
    localStorage.removeItem("chat_history");
    setMessages([
      {
        role: "bot",
        text: "Hi! I'm Prteek's AI assistant. Ask me anything about him — his skills, projects, or experience! 👋",
      },
    ]);
  };
  return (
    <div className="relative flex flex-col min-h-[85vh] bg-[#090f1d]">
      {/* Header */}
      <div className="flex flex-col items-center pt-10 pb-4 gap-2">
        <img
          src="./bot-assistant-ezgif.com-effects.gif"
          alt="Ai_Bot_Icon"
          className="w-20 h-20 md:w-30 md:h-30 p-2 bg-sky-900 rounded-full"
          style={{ mixBlendMode: "screen" }}
        />
        <p className="bg-linear-to-r p-2 text-center from-cyan-400 to-violet-400 bg-clip-text text-transparent text-md font-medium">
          Hi, I'm Prteek's assistant — ask me about him
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 md:px-0 flex flex-col gap-3 mx-auto w-full md:w-3/5 pb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] text-md px-4 py-2.5 rounded-2xl leading-relaxed ${
                msg.role === "user"
                  ? "bg-linear-to-r from-cyan-500 to-violet-500 text-white rounded-br-sm"
                  : "bg-[#111827] border border-[#1e293b] text-slate-200 rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#111827] border border-[#1e293b] rounded-2xl rounded-bl-sm">
              <TypingDots />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-0 pb-6 pt-2 bg-[#090f1d] px-2 md:p-4">
        <form
          onSubmit={sendMessage}
          className="flex mx-auto w-full md:w-3/5 gap-3 rounded-2xl border border-[#1e293b] bg-[#111827] p-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about Prteek..."
            autoComplete="off"
            className="flex-1 bg-transparent px-3 py-2 text-sm text-slate-200 placeholder-[#334155] focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="p-2.5 rounded-xl bg-linear-to-r from-cyan-500 to-violet-500 text-white disabled:opacity-40 transition-opacity"
          >
            <SendIcon />
          </button>
          <button
            onClick={clearChat}
            className="text-xs text-slate-100 hover:bg-red-500 transition-colors bg-red-800 rounded-2xl p-2"
          >
            Clear chat
          </button>
        </form>
      </div>
    </div>
  );
}

export default AiChat;
