"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);

    // For menu items
    const handleClick = (e, item) => {
        if (item.name !== "Home") {
            e.preventDefault();
            setShowModal(true);
        }
    };

    // For user icon
    const handleClickUser = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            {/* === Navbar === */}
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

                    {/* === Right: Menu Items === */}
                    <div className="flex items-center gap-6">
                        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        onClick={(e) => handleClick(e, item)}
                                        className="relative text-gray-300 uppercase hover:text-cyan-400 transition-all duration-300 group"
                                    >
                                        {item.name}
                                        <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* === User Icon === */}
                        <button
                            onClick={handleClickUser}
                            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-white shadow-[0_0_12px_rgba(6,182,212,0.25)] hover:shadow-[0_0_20px_rgba(6,182,212,0.45)] transition-all duration-300"
                            aria-label="Dashboard"
                        >
                            <User2 className="w-5 h-5" />
                        </button>
                    </div>

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

            {/* Spacing below navbar */}
            <div className="mt-[70px]"></div>

            {/* === Demo Modal === */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="relative bg-gradient-to-b from-[#0a1529] to-[#020617] border border-cyan-500/30 text-white rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.25)] max-w-md w-full p-8 text-center mx-4"
                        >
                            <h2 className="text-2xl font-bold mb-3 text-cyan-400">
                                🚧 Demo Mode
                            </h2>
                            <p className="text-gray-300 mb-6">
                                This section is currently in demo preview.
                                The live content will be available soon.
                            </p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-5 py-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 hover:bg-cyan-500/30 hover:text-white transition-all"
                            >
                                Close
                            </button>

                            {/* Floating close icon */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
