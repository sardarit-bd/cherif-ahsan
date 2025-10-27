"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function HeroSection() {
  const borderAnim = useAnimation();

  useEffect(() => {
    borderAnim.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 10,
      },
    });
  }, [borderAnim]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#020617] via-[#0a1529] to-[#020617] text-white flex flex-col items-center justify-center">
      {/* ===== Animated Globe Background ===== */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
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
        </div>
      </section>

      {/* ===== SHOWCASE IMAGE with Animated Border ===== */}
      <motion.div
        variants={fadeUp}
        custom={0.3}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center mt-4 md:mt-2 pb-20"
      >
        <div className="relative inline-block rounded-2xl overflow-hidden group">
          {/* === Animated border glow === */}
          <motion.div
            animate={borderAnim}
            className="absolute -inset-[3px] rounded-2xl pointer-events-none"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 10%, #0ff 30%, #3b82f6 50%, transparent 90%)",
              filter: "blur(15px)",
              opacity: 0.8,
            }}
          />

          {/* Main Image */}
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.25)]">
            <Image
              src="/saas.png"
              alt="AI Real Estate Showcase"
              width={1200}
              height={900}
              priority
              className="w-full h-auto object-cover rounded-2xl border border-white/30 border-4"
            />
          </div>
        </div>
      </motion.div>

      {/* === Background Animations === */}
      <style jsx global>{`
        @keyframes slow-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-slow-rotate {
          animation: slow-rotate 100s linear infinite;
        }
      `}</style>
    </div>
  );
}
