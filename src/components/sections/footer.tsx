import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { name: 'LinkedIn', href: '#', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/linkedin-16.svg?' },
  { name: 'Instagram', href: '#', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/instagram-17.svg?' },
  { name: 'TikTok', href: '#', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/tiktok-18.svg?' },
  { name: 'Twitter', href: '#', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/twitter-19.svg?' },
  { name: 'YouTube', href: '#', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/youtube-20.svg?' },
  { name: 'Facebook', href: '#', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/facebook-21.svg?' }
];

const linkColumns = [
  {
    title: 'Features',
    links: [
      { name: 'Resume AI', href: '#' },
      { name: 'AI Job Match', href: '#' },
      { name: 'Insider Connections', href: '#' },
      { name: 'AI Copilot Orion', href: '#' },
      { name: 'Job Autofill', href: '#' },
      { name: 'H1B Jobs', href: '#' }
    ]
  },
  {
    title: 'Blog',
    links: [
      { name: 'Is Jobright Legit?', href: '#' },
      { name: 'Success Stories', href: '#' },
      { name: 'What Top AI Companies Are Looking For', href: '#' },
      { name: 'Jobright AI Agent Launch', href: '#' },
      { name: 'Top Entry Level Jobs', href: '#' }
    ]
  },
  {
    title: 'Related Tools',
    links: [
      { name: 'AI Job Assistant', href: '#' },
      { name: 'AI Cover Letter Generator', href: '#' },
      { name: 'AI Resume Helper', href: '#' },
      { name: 'AI Job Tracker', href: '#' }
    ]
  },
  {
    title: 'Information',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Partners', href: '#' }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/logo-1.svg?"
                alt="Jobright Logo"
                width={115}
                height={28}
                priority
              />
            </Link>
          </div>
          <div className="flex items-center space-x-5">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <Image
                  src={social.iconUrl}
                  alt={`${social.name} logo`}
                  width={24}
                  height={24}
                  className="opacity-100 hover:opacity-75 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-black mb-4 text-base">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-500 text-[0.95rem] hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;