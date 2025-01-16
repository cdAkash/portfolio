import React from 'react';
import { Download, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cvdoc.pdf'; // Path to your PDF file in the public directory
    link.download = 'cvdoc.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center font-semibold space-x-8">
            <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/about" active={location.pathname === "/about"}>About</NavLink>
            <NavLink to="/projects" active={location.pathname === "/projects"}>Projects</NavLink>
            <NavLink to="/resume" active={location.pathname === "/resume"}>Resume</NavLink>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleDownload}c
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </button>
            <Link to="/contact" className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors">
              Contact
            </Link>
            <ThemeToggle />
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) => (
  <Link
    to={to}
    className={`${
      active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
    } hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium`}
  >
    {children}
  </Link>
);

export default Navbar;