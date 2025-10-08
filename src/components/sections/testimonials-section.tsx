import Image from 'next/image';

interface Testimonial {
  quote: string;
  avatar: string | null;
  name: string | null;
  title: string | null;
  video?: boolean;
}

const testimonialsData: Testimonial[] = [
{
  quote: "I am able to find more relevant jobs faster, since using Jobright I have tripled my interview rate. I am truly impressed.",
  avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/icons/fh-1.jpeg?",
  name: "Fred H.",
  title: "Senior Software Engineer"
},
{
  quote: "Thanks to this platform I've landed a few interviews and accepted an offer within 1 week of interviewing!!",
  avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/icons/tc-2.jpeg?",
  name: "Tracy C.",
  title: "Sr. Digital Marketing Manager"
},
{
  quote: "You must check out Jobright. It has been saving me hours in my job search! I'm blown away at how easy it is to use!!",
  avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/icons/ts-3.jpeg?",
  name: "Tyler S.",
  title: "Instructional Designer"
},
{
  quote: "I've enjoyed seeing so many matching jobs. This has completely revamped my job search process. Excited to keep exploring!",
  avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/icons/cl-4.jpeg?",
  name: "Chelsea L.",
  title: "Senior Recruiter"
},
{
  quote: "It's a 10/10!! Especially the resume editor which helps me very easily write the content to match the job description. The AI guidance and support has been game changing. Loving it so far!",
  avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/icons/bg-5.jpeg?",
  name: "Brandi G.",
  title: "Software Engineer"
},
{
  quote: "Not only does jobright show you the most relevant jobs it ALSO helps you network and get potential referrals! The matching system uses my experience, skills, and so much more to find the best fit. Definitely recommend!",
  avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/icons/gb-6.jpeg?",
  name: "Gabriella B.",
  title: "LinkedIn Strategist"
},
{
  quote: "It's an AI tool that is just amazing. It scans your resume and finds jobs and tells you within a percentage exactly how likely you are to be a match for that job.",
  avatar: null,
  name: null,
  title: null,
  video: true
}];


const TestimonialCard = ({ quote, avatar, name, title, video }: Testimonial) =>
<div className="w-[360px] flex-shrink-0 bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/60 flex flex-col hover:bg-white/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
    <div className="flex-grow">
      <Image
      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/quote-7.svg?"
      alt="quote"
      width={28}
      height={22}
      className="opacity-70" />

      <p className="mt-4 text-[15px] leading-6 text-gray-700">{quote}</p>
    </div>
    <div className="mt-6">
      {video ?
    <a href="#" className="flex items-center gap-2 text-primary font-semibold text-[15px] hover:underline">
          <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/play-8.svg?"
        alt="play icon"
        width={24}
        height={24} />

          <span>Watch full video</span>
        </a> :

    <div className="flex items-center gap-4">
          <Image
        src={avatar!}
        alt={name!}
        width={64}
        height={64}
        className="rounded-full object-cover w-16 h-16 ring-2 ring-white/60" />

          <div>
            <p className="font-bold text-[15px] text-gray-900">{name}</p>
            <p className="text-[15px] text-gray-500">{title}</p>
          </div>
        </div>
    }
    </div>
  </div>;


const TestimonialsSection = () => {
  return (
    <section className="relative pt-12 md:pt-24 pb-12 w-full overflow-hidden bg-gradient-to-br from-[#F0F9FF] via-[#F5F3FF] to-[#FAF5FF]">
      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      
      <div className="container relative z-10">
        <div className="text-center">
          <div className="relative inline-block mx-auto bg-white/50 backdrop-blur-lg rounded-3xl px-12 py-8 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
              520,000+ happy<br />
              users' love
            </h2>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/love_landing-6.svg?"
              alt="love decoration"
              width={110}
              height={49}
              className="absolute hidden md:block top-1/2 right-0 transform -translate-y-[40%] translate-x-[70%] scale-110 !w-[82px] !h-[53px] !max-w-[82px] opacity-80" />

          </div>
          <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto">
            Thank you for your praise and suggestions. With your support, we can go further. We hope to accompany you throughout your job search journey.
          </p>
        </div>
      </div>
      <div className="mt-12 relative z-10">
        <div
          className="flex gap-4 pb-4 overflow-x-auto"
          style={{
            paddingLeft: 'calc(max(24px, (100% - 1280px) / 2))',
            paddingRight: '24px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>

          <style>
            {`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          <div
            className="flex gap-4 no-scrollbar">

            {testimonialsData.map((testimonial, index) =>
            <TestimonialCard key={index} {...testimonial} />
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;