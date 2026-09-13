import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-24 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-100">
          
          {/* Brand Block */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-black text-xs tracking-tight shadow-sm shadow-pink-500/20">
                DS
              </div>
              <div className="flex items-center text-lg font-extrabold tracking-tight">
                <span className="text-slate-900">Dev</span>
                <span className="text-brand-gradient ml-1">Stack</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-1 text-xs font-semibold text-slate-600">
              <a
                href="https://github.com/mominofficial"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Spacer on Desktop */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Column 1: PRODUCT */}
          <div className="lg:col-span-2 text-left space-y-3">
            <h5 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              PRODUCT
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li>
                <a href="#home" className="hover:text-slate-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-slate-900 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-slate-900 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: COMPANY */}
          <div className="lg:col-span-2 text-left space-y-3">
            <h5 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              COMPANY
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-slate-900 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: LEGAL */}
          <div className="lg:col-span-2 text-left space-y-3">
            <h5 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              LEGAL
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              <li>
                <a href="#privacy" className="hover:text-slate-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-slate-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
