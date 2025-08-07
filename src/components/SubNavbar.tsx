import React from 'react';
import { Search } from 'lucide-react';
import { NavigationLink } from '../types';

interface NavbarProps {
  links: NavigationLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {

  return (
    <nav className="bg-gray-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className=" bg-gray-200 rounded-md text-white-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
           <div className="flex items-center space-x-4">
              <Search className="h-8 w-8 text-gray-700 hover:text-green-600 cursor-pointer transition-colors duration-200" />
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;