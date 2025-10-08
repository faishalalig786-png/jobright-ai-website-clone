"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Jobright is a game changer for job seekers. The AI-powered job matching and resume optimization features are incredibly powerful. I highly recommend it to anyone looking for a new job.",
    name: "Kenny Mendes",
    title: "HR Leader, Chief People Officer @ Grammarly",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/km-25.jpeg?",
  },
  {
    quote:
      "I've been using Jobright for a few weeks now and I'm blown away by how easy it is to find relevant jobs. The AI copilot is like having a career coach in your pocket!",
    name: "Alex XU",
    title: "Author of System Design Interview - Amazon Bestseller",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/ax-26.jpeg?",
  },
];

const IndustryLeadersSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-[#FAFAFA] to-[#F5F5F5]">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-12">
          Trusted by Industry Leaders
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:bg-white/70 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/quote-7.svg?"
                alt="quote"
                width={32}
                height={24}
                className="mb-4 opacity-70"
              />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover ring-2 ring-white/60 shadow-md"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryLeadersSection;