import React from 'react';
import Image from 'next/image';

const FinalCtaSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1232px] mx-auto bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] rounded-[2rem] py-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/rocket-14.svg?"
            alt="rocket"
            width={48}
            height={48}
          />
        </div>
        <h2 className="text-[40px] font-bold leading-[1.4] text-black max-w-[800px] mb-10">
          Ensure a Fast and Successful Journey to Your Next Career Move
        </h2>
        <a
          href="/onboarding-v3/signup"
          className="inline-block bg-black text-white font-semibold text-base py-4 px-10 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Try Jobright for Free
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;