'use client';

import { useState } from 'react';
import { HamburgerIcon, CloseIcon, FaciteSynergyLogo } from '../icons/index';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <FaciteSynergyLogo width={40} height={40} />
            <div className="text-2xl font-bold text-blue-900">
              Facite Synergy
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>


      {/* Mobile Menu Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-full bg-white shadow-2xl border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-50 md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6 h-full relative">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-blue-100">
            <div className="flex items-center space-x-3">
              <FaciteSynergyLogo width={32} height={32} />
              <div className="text-xl font-bold text-blue-900">
                Facite Synergy
              </div>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-900 hover:bg-blue-100 transition-colors"
              aria-label="Close mobile menu"
            >
              <CloseIcon />
            </button>
          </div>
          
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block py-4 px-4 text-gray-700 hover:text-blue-900 hover:bg-blue-100 rounded-xl transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Info in Mobile Menu */}
          <div className="mt-8 pt-6 border-t border-blue-100">
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-blue-900">📱</span>
                <span>07036041395</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-blue-900">✉️</span>
                <span>Facitesynergy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;