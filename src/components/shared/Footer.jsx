"use client";

import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#020617] via-[#0a1529] to-[#020617] text-gray-300 border-t border-white/10 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* ===== Brand Section ===== */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Image src="/logo.webp" alt="Logo" width={150} height={40} className="rounded" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Revolutionizing real estate with intelligent AI-powered insights and smart automation tools.
                    </p>
                </div>

                {/* ===== Quick Links ===== */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        {["Home", "About", "Services", "Contact", "FAQ"].map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={`/${item.toLowerCase()}`}
                                    className="hover:text-cyan-400 transition-all duration-300"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ===== Resources ===== */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/privacy" className="hover:text-cyan-400 transition">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-cyan-400 transition">Terms & Conditions</Link></li>
                        <li><Link href="/blog" className="hover:text-cyan-400 transition">Blog</Link></li>
                        <li><Link href="/careers" className="hover:text-cyan-400 transition">Careers</Link></li>
                    </ul>
                </div>

                {/* ===== Contact Info ===== */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                            <span>123 Skyline Avenue, New Orleans, LA</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Mail className="w-4 h-4 text-cyan-400 mt-0.5" />
                            <a href="mailto:support@cherifai.com" className="hover:text-cyan-400 transition">
                                support@cherifai.com
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <Phone className="w-4 h-4 text-cyan-400 mt-0.5" />
                            <a href="tel:+123456789" className="hover:text-cyan-400 transition">
                                +1 (234) 567-890
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* ===== Divider ===== */}
            <div className="relative w-full h-px mt-12 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

            {/* ===== Bottom Row ===== */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
                <p>© {new Date().getFullYear()} <span className="text-cyan-400 font-medium">CherifAI</span>. All rights reserved.</p>

                <div className="flex gap-5 mt-3 md:mt-0">
                    <a href="#" className="hover:text-cyan-400 transition">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-cyan-400 transition">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-cyan-400 transition">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* ===== Soft Glow ===== */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15),_transparent_80%)] blur-3xl pointer-events-none"></div>
        </footer>
    );
}
