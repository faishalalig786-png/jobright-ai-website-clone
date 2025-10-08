"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/aistar_landing-9.svg?",
    title: "AI Job Match",
    subtitle: "Get personalized job matches instantly",
    points: [
      "AI matches you with perfect jobs based on your skills",
      "Real-time compatibility scores for every position",
      "Smart filtering saves hours of searching",
    ],
    cta: "Start Matching",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/n1-21.png?",
    href: "/#",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/edit_landing-10.svg?",
    title: "Resume AI",
    subtitle: "Optimize your resume for every application",
    points: [
      "AI tailors your resume for each job instantly",
      "Get keyword optimization suggestions",
      "Professional formatting that passes ATS systems",
    ],
    cta: "Improve Resume",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/n2-22.png?",
    href: "/ai-resume-builder",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/social_landing-11.svg?",
    title: "Insider Connections",
    subtitle: "Get referrals from people already at your dream companies",
    points: [
      "Find alumni and connections at target companies",
      "Get warm introductions to hiring managers",
      "Increase your chances with insider referrals",
    ],
    cta: "Get Connections",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/n3-23.png?",
    href: "/#",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/chatbot_landing-12.svg?",
    title: "Orion, your AI Copilot",
    subtitle: "Your 24/7 AI career assistant",
    points: [
      "Get instant answers to all career questions",
      "Practice interviews with AI feedback",
      "Personalized career guidance anytime",
    ],
    cta: "Ask Orion",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/n4-24.png?",
    href: "/#",
  },
];

const AiFeaturesSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9]">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-cyan-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
            AI features
          </h2>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-block bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-2xl p-4 border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={56}
                    height={56}
                    className="w-14 h-14"
                  />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600">{feature.subtitle}</p>
                </div>
                <ul className="space-y-3">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-[#00B88A] mt-2"></span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                >
                  <span>{feature.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex-1">
                <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-4 border border-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.10)] transition-all duration-300">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiFeaturesSection;