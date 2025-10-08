"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-[#F0FDFA] to-[#F0F9FF]">
      {/* Glassmorphic overlay layer */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      
      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
              No More Solo Job Hunting
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent font-black">
              DO IT WITH AI COPILOT
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our AI makes landing job interviews dramatically easier and faster! - get matched jobs, tailored resume, and recommended insider connections in less than 1 min!
          </p>

          <Button asChild className="rounded-full bg-gradient-to-r from-[#00D9A3] to-[#00B88A] text-white text-base md:text-lg font-semibold px-10 py-6 h-auto hover:scale-105 shadow-[0_8px_30px_rgba(0,217,163,0.3)] hover:shadow-[0_12px_40px_rgba(0,217,163,0.4)] transition-all duration-300 backdrop-blur-sm">
            <Link href="/onboarding-v3/signup">Try Jobright for Free</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;