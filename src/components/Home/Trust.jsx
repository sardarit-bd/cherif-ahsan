"use client";

import { ShieldCheck, BadgeCheck, Home, Star, AlertTriangle } from "lucide-react";

export default function TrustedSection() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: "SSL Secured",
      desc: "Bank-level encryption protects your data",
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-cyan-400" />,
      title: "Industry Certified",
      desc: "Licensed real estate professional",
    },
    {
      icon: <Home className="w-6 h-6 text-cyan-400" />,
      title: "10,000+ Users",
      desc: "Trusted by professionals nationwide",
    },
    {
      icon: <Star className="w-6 h-6 text-cyan-400" />,
      title: "4.9/5 Rating",
      desc: "Highly rated by our community",
    },
  ];

  const stats = [
    { number: "$2.5B+", label: "Properties Analyzed" },
    { number: "50,000+", label: "Successful Deals" },
    { number: "25+", label: "Years Experience" },
    { number: "99.9%", label: "Uptime Guarantee" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#020617] via-[#0a1529] to-[#020617] text-white py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        {/* ===== Heading ===== */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          Trusted by <span className="text-cyan-400">Industry Leaders</span>
        </h2>

        {/* ===== Top Feature Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl py-8 px-4 hover:bg-white/10 transition duration-300"
            >
              <div className="mb-3 bg-white/5 rounded-full p-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ===== Stats Row ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-1">
                {stat.number}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ===== Disclaimer Box ===== */}
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1a1000] to-[#2a1902] border border-yellow-900/50 text-left rounded-2xl p-5 flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-yellow-400 font-semibold mb-1">
              Important Disclaimer
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              This AI assistant provides educational information and analysis tools. All advice
              should be verified with licensed professionals. Real estate investments carry
              inherent risks, and past performance does not guarantee future results. Always consult
              with qualified legal, financial, and real estate professionals before making
              investment decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
