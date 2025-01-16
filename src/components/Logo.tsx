import React from 'react';
import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Code2 className="w-8 h-8 text-blue-600" />
      <span className="text-xl font-bold dark:text-white">cdAkash</span>
    </Link>
  );
};

export default Logo;