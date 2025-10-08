"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

interface Job {
  logo: string;
  company: string;
  time: string;
  title: string;
  location: string;
}

const jobs: Job[] = [
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/microsoft_logo-1.webp?",
    company: "Microsoft",
    time: "15 minutes ago",
    title: "Senior Software Engineer",
    location: "Redmond, WA",
  },
  {
    company: "Starbucks",
    time: "17 minutes ago",
    title: "manager, Product Management Supply Chain",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/1631316692276-2.webp?",
    link: "https://jobright.ai/jobs/info/68e1a073f758fe1f97e55b19",
  },
  {
    company: "Shipt",
    time: "5 minutes ago",
    title: "Director of Shipt Media Operations",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/shipt_logo-3.webp?",
    link: "https://jobright.ai/jobs/info/68e1a351f758fe1f97e55b50",
  },
  {
    company: "Upstream Rehabilitation",
    time: "6 minutes ago",
    title: "Physical Therapist Assistant",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/upstream_rehabilitation_logo-4.webp?",
    link: "https://jobright.ai/jobs/info/68e1a2ec1852e62f007f3494",
  },
  {
    company: "Control Service Company",
    time: "7 minutes ago",
    title: "HVAC Software Engineer",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/1631359636424-5.webp?",
    link: "https://jobright.ai/jobs/info/68e1a2c41852e62f007f3481",
  },
  {
    company: "Known",
    time: "9 minutes ago",
    title: "Senior Marketing Strategist",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/knownis_logo-6.webp?",
    link: "https://jobright.ai/jobs/info/681cf621a8b287cc15ff13b8",
  },
  {
    company: "By The Bay Health",
    time: "9 minutes ago",
    title: "Social Worker",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/by_the_bay_health_logo-7.webp?",
    link: "https://jobright.ai/jobs/info/68758dec5cebcd1dd51c1c3e",
  },
  {
    company: "Skild AI",
    time: "9 minutes ago",
    title: "Machine Learning Intern",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/skild_ai_logo-8.webp?",
    link: "https://jobright.ai/jobs/info/68e1a26f1852e62f007f3450",
  },
  {
    company: "Red Cell Partners",
    time: "12 minutes ago",
    title: "Senior Site Reliability Engineer (Security Clearance)",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/red_cell_partners_logo-9.webp?",
    link: "https://jobright.ai/jobs/info/68e1a186b99ec3563b0d7d08",
  },
  {
    company: "xAI",
    time: "14 minutes ago",
    title: "Software Engineer - Distributed Data Systems",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/xai_logo-10.webp?",
    link: "https://jobright.ai/jobs/info/68df00b0a125e75c422b90aa",
  },
  {
    company: "SurveyMonkey",
    time: "14 minutes ago",
    title: "Senior Product Manager - Core Product",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/surveymonkey_logo-11.webp?",
    link: "https://jobright.ai/jobs/info/68d2bc58f0d9af73038da7f2",
  },
  {
    company: "Mayhill Hospital",
    time: "16 minutes ago",
    title: "STAFFING COORDINATOR",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/mayhill_hospital_logo-12.webp?",
    link: "https://jobright.ai/jobs/info/68e1a0a8f758fe1f97e55b33",
  },
  {
    company: "Nutanix",
    time: "17 minutes ago",
    title: "MTS -4, Full Stack Engineer",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/nutanix_logo-13.webp?",
    link: "https://jobright.ai/jobs/info/68e1a076f758fe1f97e55b1c",
  },
  {
    company: "Ness Digital Engineering",
    time: "17 minutes ago",
    title: "Senior Salesforce Technical Architect",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/ness_ses_logo-14.webp?",
    link: "https://jobright.ai/jobs/info/68e1a080f758fe1f97e55b22",
  },
  {
    company: "Baptist Memorial Health Care",
    time: "18 minutes ago",
    title: "Rehabilitation Tech I",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/images/baptistonline_logo-15.webp?",
    link: "https://jobright.ai/jobs/info/68e1a037f758fe1f97e55afd",
  },
];

const JobCard = ({ job }: { job: Job }) => (
  <div className="flex-shrink-0 w-[320px] bg-white/60 backdrop-blur-xl rounded-2xl p-5 border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:bg-white/70 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-start gap-3 mb-3">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/80 flex items-center justify-center ring-1 ring-white/60 shadow-sm">
        <Image
          src={job.logo}
          alt={job.company}
          width={48}
          height={48}
          className="w-10 h-10 rounded-full object-contain"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-sm">{job.company}</h3>
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
          <Clock className="w-3 h-3" />
          <span>{job.time}</span>
        </div>
      </div>
    </div>
    <h4 className="font-semibold text-base text-gray-900 mb-2 hover:text-primary transition-colors cursor-pointer">
      {job.title}
    </h4>
    <div className="flex items-center gap-1 text-sm text-gray-600">
      <MapPin className="w-4 h-4" />
      <span>{job.location}</span>
    </div>
  </div>
);

const JobListingsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden bg-gradient-to-br from-white via-[#FAFAFA] to-[#F5F5F5]">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-4">
            Never Miss Out On New Jobs Again.
            <br />
            Join The Largest Job Board!
          </h2>
          <div className="flex items-center justify-center gap-12 mt-6">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                400,000+
              </p>
              <p className="text-sm text-gray-600 mt-1">Today's new jobs</p>
            </div>
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                8,000,000+
              </p>
              <p className="text-sm text-gray-600 mt-1">Total jobs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 relative z-10">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 no-scrollbar"
          style={{
            paddingLeft: "calc(max(24px, (100% - 1280px) / 2))",
            paddingRight: "24px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default JobListingsCarousel;