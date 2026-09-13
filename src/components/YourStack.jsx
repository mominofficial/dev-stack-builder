import React from 'react';
import { X, Trash2, Layers } from 'lucide-react';

export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const hasItems = stack.length > 0;

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm sticky top-28 transition-all">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Your Stack
        </h2>
        <p className="text-sm text-slate-400 font-normal mt-1">
          {hasItems
            ? `${stack.length} Technology Selected`
            : 'No technologies selected yet.'}
        </p>
      </div>

      {/* Content Area */}
      {!hasItems ? (
        /* Empty State */
        <div className="border border-dashed border-slate-200 rounded-2xl p-10 text-center flex flex-col items-center justify-center min-h-[160px]">
          <p className="text-sm font-normal text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        /* Populated Stack State */
        <div className="space-y-3">
          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-3.5 flex items-center justify-between shadow-2xs hover:border-slate-300 transition-all group"
              >
                {/* Left: Icon, Name & Category */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<span class="text-xs font-bold text-slate-600">${item.name.substring(0, 2).toUpperCase()}</span>`;
                      }}
                    />
                  </div>
                  <div className="truncate">
                    <h4 className="text-sm font-bold text-slate-900 leading-tight truncate">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-normal capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Right: Remove Button */}
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shrink-0 ml-2"
                  title={`Remove ${item.name}`}
                  aria-label={`Remove ${item.name} from stack`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <div className="pt-3">
            <button
              type="button"
              onClick={onRemoveAll}
              className="w-full py-2.5 px-4 rounded-xl border border-red-200 hover:border-red-300 text-red-600 hover:bg-red-50/70 font-semibold text-sm transition-all duration-200 cursor-pointer text-center"
            >
              Remove All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
