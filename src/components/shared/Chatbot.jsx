"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I'm your AI Real Estate Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // === Connect to Hugging Face API ===
  const handleSend = async () => {
    if (!input.trim()) return;

    const newMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: input }),
      });

      const data = await res.json();

      // Extract generated text safely
      const aiReply =
        data?.generated_text ||
        data?.[0]?.generated_text ||
        "🤖 Sorry, I couldn’t process that right now.";

      setMessages((prev) => [...prev, { sender: "bot", text: aiReply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Something went wrong. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-105 transition-transform"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-6 w-80 md:w-96 h-[500px] bg-gradient-to-b from-[#020617]/95 via-[#0a1529]/95 to-[#020617]/95 border border-cyan-500/20 shadow-[0_0_40px_rgba(56,189,248,0.25)] rounded-2xl overflow-hidden backdrop-blur-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-white/5 border-b border-cyan-500/20">
              <h3 className="font-semibold text-cyan-400">AI Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm scrollbar-thin scrollbar-thumb-cyan-700/30">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[75%] ${
                      msg.sender === "user"
                        ? "bg-cyan-500/20 border border-cyan-400/30 text-cyan-100"
                        : "bg-white/5 border border-white/10 text-gray-300"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-gray-400 text-xs italic">🤖 Thinking...</div>
              )}
            </div>

            {/* Input Box */}
            <div className="border-t border-white/10 bg-white/5 p-3 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
