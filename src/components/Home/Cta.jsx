"use client";

import { MessageCircle } from "lucide-react";

export default function ChatCTA() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white px-6 py-16 flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full bg-[#141414] border border-white/10 rounded-3xl text-center px-6 py-10 shadow-[0_0_25px_rgba(0,0,0,0.2)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Need Something Specific?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Chat directly with <span className="text-cyan-400">Cherif</span>, your AI real estate expert, 
          for personalized guidance and custom analysis tailored to your unique situation.
        </p>

        <button className="inline-flex items-center gap-2 bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
          <MessageCircle className="w-5 h-5" />
          Start Chatting
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
