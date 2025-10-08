import Image from 'next/image';

const badgesData = [
  {
    href: 'https://www.producthunt.com/products/jobright-ai-2#jobright-ai-2',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/phmonth-4.svg?',
    alt: 'Product of the month - Product Hunt',
    width: 160,
    height: 48,
  },
  {
    href: '#',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/openaitop-5.svg?',
    alt: 'Featured by OpenAI - Top Pick',
    width: 160,
    height: 48,
  },
];

const AwardsBadges = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-6">
      {badgesData.map((badge, index) => (
        <a
          key={index}
          href={badge.href}
          target={badge.href.startsWith('http') ? '_blank' : undefined}
          rel={badge.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={badge.alt}
          className="flex-shrink-0"
        >
          <Image
            src={badge.src}
            alt={badge.alt}
            width={badge.width}
            height={badge.height}
            className="h-12 w-auto"
          />
        </a>
      ))}
    </div>
  );
};

export default AwardsBadges;