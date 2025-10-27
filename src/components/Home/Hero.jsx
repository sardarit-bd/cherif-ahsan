"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#020617] via-[#0a1529] to-[#020617] text-white flex flex-col items-center justify-center">
      {/* ===== Animated Globe Background ===== */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        {/* Rotating globe */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-[1600px] opacity-20 object-contain animate-slow-rotate"
        >
          <source src="/globe.webm" type="video/webm" />
          <source src="/globe.mp4" type="video/mp4" />
        </video>

        {/* Bluish glow layers */}
        <div className="absolute w-[1100px] h-[1100px] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.25),_transparent_70%)] blur-3xl"></div>
        <div className="absolute w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),_transparent_70%)] blur-2xl"></div>
      </div>

      {/* Subtle electric overlay */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.1]">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,_rgba(255,255,255,0.05)_0px,_rgba(255,255,255,0.05)_2px,_transparent_2px,_transparent_6px)] animate-electric-move" />
      </div>

      {/* ===== HERO CONTENT ===== */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#3b82f6] to-[#0ea5e9] drop-shadow-[0_0_25px_rgba(59,130,246,0.45)]">
              AI-Powered Real Estate Assistant
            </span>
            <br />
            <span className="text-gray-300 font-light">
              Smarter. Faster. More Profitable Deals.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="show"
            className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Harness the intelligence of AI to analyze property markets, predict prices, and
            automate workflows — all within a sleek, next-gen platform.
          </motion.p>

          {/* === Tags === */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-3 mt-8 text-xs md:text-sm"
          >
            {["Apartments", "Luxury", "Commercial", "Beachfront", "Off-Plan"].map((tag) => (
              <span
                key={tag}
                className="bg-white/5 px-5 py-1.5 rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 text-gray-300 hover:text-white cursor-pointer transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SHOWCASE IMAGE ===== */}
      <motion.div
        variants={fadeUp}
        custom={0.3}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center mt-4 md:mt-2 pb-20"
      >
        <div className="inline-block rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.25)] transition-transform duration-500 hover:scale-[1.03] hover:shadow-[0_0_70px_rgba(56,189,248,0.35)]">
          <Image
            src="/saas.png"
            alt="AI Real Estate Showcase"
            width={1200}
            height={700}
            priority
            className="w-full h-auto object-cover border border-white/20 border-10"
          />
        </div>
      </motion.div>
    </div>
  );
}
