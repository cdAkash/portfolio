import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const SocialSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
        Find me on
      </h2>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex justify-center space-x-8">
          <SocialLink onClick={() => window.open('https://github.com/cdAkash', '_blank')} icon={<Github className="w-8 h-8 cursor-pointer" />} label="GitHub" />
          <SocialLink onClick={() => window.open('https://linkedin.com/in/cdAkash', '_blank')} icon={<Linkedin className="w-8 h-8 cursor-pointer" />} label="LinkedIn" />
          <SocialLink onClick={() => window.open('https://twitter.com/Akashya82291098', '_blank')} icon={<Twitter className="w-8 h-8 cursor-pointer" />} label="Twitter" />
          
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, onClick, icon, label }: { href?: string; onClick?: () => void; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
    target={href && href.startsWith('http') ? "_blank" : undefined}
    rel={href && href.startsWith('http') ? "noopener noreferrer" : undefined}
  >
    {icon}
    <span className="mt-2 text-sm">{label}</span>
  </a>
);

export default SocialSection;