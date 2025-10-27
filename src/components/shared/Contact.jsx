"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#020617] via-[#0a1529] to-[#020617] text-white py-20 px-6">
            {/* === Animated Electric Background === */}
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-[200px] bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.3),transparent)] animate-electricFlow blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-[200px] bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.25),transparent)] animate-electricFlow-delayed blur-[80px]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)] blur-3xl"></div>
            </div>

            {/* === Header === */}
            <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    Get in <span className="text-cyan-400">Touch</span>
                </h2>
                <p className="text-gray-400 mt-3">
                    Have a question, project idea, or collaboration in mind?
                    We’d love to hear from you.
                </p>
            </div>

            {/* === Contact Form === */}
            <div className="relative z-10 max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-300 mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 outline-none transition"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-300 mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 outline-none transition"
                        />
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-sm text-gray-300 mb-1">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Type your message..."
                            className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 outline-none transition"
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 flex justify-center mt-4">
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 font-semibold text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                        >
                            Send Message
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            </div>

            {/* === Contact Info Row === */}
            <div className="relative z-10 mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    support@cherifai.com
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    +1 (234) 567-890
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    New Orleans, LA
                </div>
            </div>

            {/* === Keyframes === */}
            <style jsx global>{`
        @keyframes electricFlow {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes electricFlowDelayed {
          0% {
            transform: translateX(-60%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-electricFlow {
          animation: electricFlow 8s linear infinite;
        }
        .animate-electricFlow-delayed {
          animation: electricFlowDelayed 12s linear infinite;
        }
      `}</style>
        </section>
    );
}
