"use client";

import Image from 'next/image';

const JobSearchWidget = () => {
  return (
    <section className="bg-white py-12">
      <div className="container">
        <h2 className="text-3xl font-semibold text-center text-black mb-8">
          Find Your Perfect Job in a Click!
        </h2>
        
        <div className="max-w-[1100px] mx-auto bg-white p-4 sm:p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]" role="search">
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            
            <input 
              type="text" 
              placeholder="Job Title"
              className="w-full h-12 bg-[#F3F4F6] border border-border rounded-lg px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" 
            />

            <button type="button" className="w-full h-12 bg-[#F3F4F6] border border-border rounded-lg px-4 text-left flex justify-between items-center text-gray-500 hover:border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <span>Work Model</span>
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/drop_down-2.svg?" width={16} height={16} alt="dropdown icon" className="flex-shrink-0" />
            </button>

            <button type="button" className="w-full h-12 bg-[#F3F4F6] border border-border rounded-lg px-4 text-left flex justify-between items-center text-gray-500 hover:border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <span>City</span>
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/drop_down-2.svg?" width={16} height={16} alt="dropdown icon" className="flex-shrink-0" />
            </button>
            
            <button type="button" className="w-full h-12 bg-[#F3F4F6] border border-border rounded-lg px-4 text-left flex justify-between items-center text-gray-500 hover:border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <span>Experience Level</span>
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/drop_down-2.svg?" width={16} height={16} alt="dropdown icon" className="flex-shrink-0" />
            </button>

            <button type="submit" className="w-full h-12 bg-primary text-primary-foreground font-semibold rounded-lg text-lg hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              GO
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobSearchWidget;