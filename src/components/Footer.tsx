import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          © 2024 cdAkash. All rights reserved. Unauthorized reproduction or distribution is prohibited.

          </div>
          
          <div className="flex space-x-6">
            <SocialLink href="https://github.com/cdAkash" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com/in/cdAkash" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="https://twitter.com/Akashya82291098" icon={<Twitter className="w-5 h-5" />} />
    
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Footer;