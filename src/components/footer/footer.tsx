import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="relative mt-auto bg-[#C9E6F0] border-t border-gray-200 pt-8 pb-6 overflow-hidden">
      {/* Gradient line at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 to-blue-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          {/* About Section */}
          <div className="transform transition-transform duration-300 hover:-translate-y-1 p-2 rounded-lg hover:bg-white/10">
            <h3 className="relative text-lg font-bold text-blue-900 mb-4 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-14">
              About
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Personal portfolio showcasing my work and experience in web development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="transform transition-transform duration-300 hover:-translate-y-1 p-2 rounded-lg hover:bg-white/10">
            <h3 className="relative text-lg font-bold text-blue-900 mb-4 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-14">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['experience', 'projects', 'blog'].map((link) => (
                <li key={link} className="transform transition-transform duration-200 hover:translate-x-1">
                  <Link 
                    href={`/${link}`}
                    className="text-gray-600 hover:text-blue-500 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="transform transition-transform duration-300 hover:-translate-y-1 p-2 rounded-lg hover:bg-white/10">
            <h3 className="relative text-lg font-bold text-blue-900 mb-4 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-14">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600">Email: bagusariobimo7@gmail.com</li>
              <li className="text-gray-600">Tangerang Selatan, Banten, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-5 border-t border-black/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Bagus Ariobimo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;