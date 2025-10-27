"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#020617]/95 via-[#0a1529]/95 to-[#020617]/95 backdrop-blur-md border-b border-cyan-400/10 shadow-[0_2px_15px_rgba(56,189,248,0.15)] transition-all duration-500">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
                    {/* === Left: Logo === */}
                    <div className="flex items-center">
                        <Link href="/" aria-label="Home">
                            <Image
                                src="/logo.webp"
                                alt="Brand Logo"
                                width={110}
                                height={60}
                                className="h-10 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* === Right: Menu Items (Desktop) === */}
                    <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Services", path: "/services" },
                            { name: "Contact", path: "/contact" },
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                                >
                                    {item.name}
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* === Mobile Menu Icon === */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
                        aria-label="Open Menu"
                    >
                        <span className="block w-6 h-0.5 bg-white rounded"></span>
                        <span className="block w-6 h-0.5 bg-white rounded"></span>
                        <span className="block w-6 h-0.5 bg-white rounded"></span>
                    </button>
                </div>
            </nav>
            <div className="mt-[70px]"></div>
        </>
    );
}
