'use client';

import { useState, useEffect } from 'react';
import { Home, Briefcase, Code, BookOpen, Mail, Menu, X } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  icon: JSX.Element;
}

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Moved navigationItems inside component to access in useEffect
  const navigationItems: NavigationItem[] = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'skills', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={20} /> },
    { id: 'blog', label: 'Blog', icon: <BookOpen size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile sidebar if open
      setIsSidebarOpen(false);
      
      // Smooth scroll to section
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]); // Added navigationItems to dependency array

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50">
      {/* Main Header */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-shrink-0">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            BA&apos;s Portfolio
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-2 text-pretty font-bold transition-colors duration-200 subpixel-antialiased
                ${activeSection === item.id
                  ? 'text-blue-600'
                  : 'text-gray-800 hover:text-blue-600'
                }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-200 ease-in-out md:hidden z-50`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="space-y-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-4 text-sm font-bold transition-colors duration-200 w-full
                  ${activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;