import Link from 'next/link';
import Image from 'next/image';

const AnnouncementBanner = () => {
  return (
    <Link href="/ai-agent" className="inline-block transition-transform duration-300 ease-in-out hover:scale-[1.02]">
      <div className="flex cursor-pointer items-center gap-3 rounded-full bg-[rgba(223,240,234,0.5)] py-3 px-6">
        <span className="rounded-full bg-white py-1 px-3 text-sm font-semibold leading-5 text-black">
          New
        </span>
        <p className="text-[15px] font-normal tracking-tight text-black">
          Introducing <span className="font-semibold">Jobright Agent</span>: the first AI that hunts jobs for you.
        </p>
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/arr_subnav-3.svg?"
            alt="Learn more arrow"
            width={16}
            height={16}
            className="h-4 w-4"
          />
        </div>
      </div>
    </Link>
  );
};

export default AnnouncementBanner;