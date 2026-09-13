import React from 'react';
import { Star, Check } from 'lucide-react';

export default function TechCard({ tech, isAdded, onAdd }) {
  // Badge color themes
  const getBadgeClass = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 text-blue-600 border border-blue-100';
      case 'emerald':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-100';
      case 'orange':
        return 'bg-orange-50 text-orange-600 border border-orange-100';
      case 'amber':
        return 'bg-amber-50 text-amber-600 border border-amber-100';
      case 'red':
        return 'bg-rose-50 text-rose-600 border border-rose-100';
      case 'cyan':
        return 'bg-cyan-50 text-cyan-600 border border-cyan-100';
      case 'sky':
        return 'bg-sky-50 text-sky-600 border border-sky-100';
      case 'pink':
        return 'bg-pink-50 text-pink-600 border border-pink-100';
      default:
        return 'bg-slate-100 text-slate-600 border border-slate-200';
    }
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between card-shadow card-shadow-hover transition-all duration-200 hover:border-slate-300">
      <div>
        {/* Top: Icon & Badge */}
        <div className="flex items-center justify-between gap-2">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center shadow-2xs">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
              loading="lazy"
              onError={(e) => {
                // Fallback to text initials if icon fails
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `<span class="text-xs font-bold text-slate-700">${tech.name.substring(0, 2).toUpperCase()}</span>`;
              }}
            />
          </div>

          {tech.badge && (
            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getBadgeClass(tech.badgeColor)}`}>
              {tech.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3.5 tracking-tight">
          {tech.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed line-clamp-3 min-h-[48px]">
          {tech.description}
        </p>

        {/* Meta details: Category, Difficulty, Rating */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 gap-2">
          <span className="bg-slate-100/90 text-slate-700 font-medium px-2 py-0.5 rounded text-[11px]">
            {tech.category}
          </span>
          <span className="text-[11px] text-slate-500 font-medium truncate">
            {tech.difficulty}
          </span>
          <div className="flex items-center gap-1 font-semibold text-slate-700 text-[11px] shrink-0">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{tech.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-4 pt-1">
        <button
          type="button"
          disabled={isAdded}
          onClick={() => onAdd(tech)}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
            isAdded
              ? 'bg-slate-100 text-slate-400 border border-slate-200/60 cursor-not-allowed'
              : 'bg-slate-950 hover:bg-slate-800 active:scale-[0.99] text-white shadow-sm hover:shadow'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
              <span>✓ Added to Stack</span>
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
}
