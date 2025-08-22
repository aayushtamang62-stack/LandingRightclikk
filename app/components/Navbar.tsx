// app/components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="font-extrabold text-xl text-gray-900">
                        RightClikk.
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-900 hover:text-yellow-500">Home</Link>
                        <Link href="/about" className="text-gray-900 hover:text-yellow-500">About</Link>
                        <Link href="/contact" className="text-gray-900 hover:text-yellow-500">Contact</Link>
                        <Link href="/login" className="text-gray-900 hover:text-yellow-500">Login</Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-900 text-2xl focus:outline-none hover:text-yellow-500"
                        >
                            ☰
                        </button>

                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-4 pb-4 text-gray-900">
                    <Link href="/" className="block py-2 hover:text-yellow-500">Home</Link>
                    <Link href="/about" className="block py-2 hover:text-yellow-500">About</Link>
                    <Link href="/contact" className="block py-2 hover:text-yellow-500">Contact</Link>
                    <Link href="/login" className="block py-2 hover:text-yellow-500">Login</Link>
                </div>

            )}
        </nav>
    );
}
