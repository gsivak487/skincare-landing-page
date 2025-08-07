import React from 'react';
import { NavigationLink } from '../types';

interface FooterSection {
  title: string;
  links: NavigationLink[];
}

interface FooterProps {
  logo: string;
  description: string;
  sections: FooterSection[];
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({ logo, description, sections, copyright }) => {
  return (
    <footer className="bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">{logo}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;