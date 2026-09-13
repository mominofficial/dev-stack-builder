import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroStackImg from '../assets/hero-stack.png';

export default function Hero({ onExploreClick, onLearnMoreClick }) {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-200/30 via-pink-200/30 to-purple-200/30 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Main Heading (Two-Tone) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="text-brand-gradient">Development Stack</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreClick}
                className="bg-brand-gradient text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Technologies</span>
              </button>

              <button
                type="button"
                onClick={onLearnMoreClick}
                className="bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs active:scale-[0.98] transition-all cursor-pointer"
              >
                Learn More
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 15+ Modern Frameworks
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span> Real-time Stack Preview
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Zero Configuration
              </span>
            </div>
          </div>

          {/* Right Column: 3D Isometric Stack Banner Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-[480px]">
              {/* Background ambient lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-purple-500/15 to-blue-500/10 rounded-3xl filter blur-2xl transform -rotate-3 scale-95" />
              
              <img
                src={heroStackImg}
                alt="Development Stack 3D Visual"
                className="relative w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105 select-none"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

