"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const NavigationHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/jobs" className="flex items-center space-x-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/logo-1.svg"
              alt="Jobright"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/sign-in"
              className="px-6 py-2.5 text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors"
            >
              SIGN IN
            </Link>
            <Link
              href="/sign-up"
              className="px-6 py-2.5 text-sm font-bold text-white bg-black rounded-full hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
            >
              JOIN NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              href="/sign-in"
              className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100/80 rounded-lg transition-colors"
            >
              SIGN IN
            </Link>
            <Link
              href="/sign-up"
              className="block px-4 py-2 text-sm font-bold text-center text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
            >
              JOIN NOW
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavigationHeader;