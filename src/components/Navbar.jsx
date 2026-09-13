import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import hamburgerIcon from '../assets/hamburger.png';

export default function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, name, href) => {
    e.preventDefault();
    setActiveLink(name);
    setMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(name);
    }

    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* MOBILE VIEW (Screens < md) */}
        {/* Left: Hamburger Icon */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -ml-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <img 
                src={hamburgerIcon} 
                alt="Menu" 
                className="w-6 h-4.5 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
            )}
            <Menu className="w-6 h-6 hidden" />
          </button>
        </div>

        {/* Center (Mobile) / Left (Desktop): Brand Logo */}
        <div className="flex items-center">
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            onClick={(e) => handleNavClick(e, 'Home', '#home')}
          >
            <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-black text-sm tracking-tight shadow-sm shadow-pink-500/20 group-hover:scale-105 transition-transform">
              DS
            </div>
            <div className="flex items-center text-xl tracking-tight font-extrabold">
              <span className="text-slate-900">Dev</span>
              <span className="text-brand-gradient ml-1">Stack</span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.name, link.href)}
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-pink-600 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gradient rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Sign In & Sign Up) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-950 px-2 py-1.5 transition-colors"
          >
            Sign In
          </button>
          <button
            type="button"
            className="bg-brand-gradient text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.name, link.href)}
                className={`block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-pink-50 text-pink-600'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
