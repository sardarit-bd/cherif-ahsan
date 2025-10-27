"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  LineChart,
  Calculator,
  TrendingUp,
  FileText,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Property Analysis",
      desc: "Deep dive into property metrics, ROI calculations, and market comparisons.",
      points: [
        "Cash flow analysis",
        "Market comparables",
        "Investment projections",
        "Risk assessment",
      ],
      icon: <LineChart className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Mortgage Calculator",
      desc: "Advanced mortgage calculations with multiple scenario planning.",
      points: [
        "Payment calculations",
        "Amortization schedules",
        "Rate comparisons",
        "Refinance analysis",
      ],
      icon: <Calculator className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Market Trends",
      desc: "Real-time market insights and predictive analytics.",
      points: [
        "Market forecasts",
        "Price trends",
        "Neighborhood analysis",
        "Investment opportunities",
      ],
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Legal Documents",
      desc: "AI-generated contracts, agreements, and legal templates.",
      points: [
        "Purchase agreements",
        "Lease contracts",
        "Disclosure forms",
        "Legal templates",
      ],
      icon: <FileText className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#020617] via-[#0a1529] to-[#020617] text-white py-20 px-6">
      {/* ===== Animated Background ===== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
        {/* Moving glow orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-cyan-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 3 }}
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-3xl"
        />

        {/* Electric grid animation */}
        <div className="absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(90deg,_rgba(255,255,255,0.06)_1px,_transparent_2px),repeating-linear-gradient(0deg,_rgba(255,255,255,0.06)_1px,_transparent_2px)] animate-bgShift" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* === Header === */}
        <div className="mb-10">
          <button className="text-xs font-semibold border border-white/20 px-4 py-1 rounded-full mb-4 hover:bg-white/10 transition">
            ⚡ Quick Actions
          </button>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            WHAT WOULD YOU LIKE TO DO?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3">
            Choose from our powerful AI-powered tools designed to streamline
            your real estate workflow and provide professional-grade analysis
            in seconds.
          </p>
        </div>

        {/* === Action Cards === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {actions.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="group bg-[#0b0f1a]/60 border border-white/10 rounded-2xl p-6 text-left transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] backdrop-blur-md"
            >
              <div className="mb-4 p-2 bg-white/5 rounded-xl w-fit">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{item.desc}</p>

              <ul className="text-gray-400 text-sm list-disc list-inside space-y-1 mb-5">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <button className="mt-auto flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition">
                Get Started <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === Background Animation Keyframes === */}
      <style jsx global>{`
        @keyframes bgShift {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 100px 100px, 100px 100px;
          }
        }
        .animate-bgShift {
          animation: bgShift 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
