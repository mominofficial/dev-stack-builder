import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingSkeleton() {
  return (
    <div className="py-12 space-y-8">
      {/* Loading Indicator Spinner */}
      <div className="flex flex-col items-center justify-center gap-3 py-6">
        <Loader2 className="w-8 h-8 animate-spin text-pink-500" />
        <p className="text-sm font-semibold text-slate-600 animate-pulse">
          Loading technologies...
        </p>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white border border-slate-200/60 rounded-2xl p-5 space-y-4 animate-pulse"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-slate-200" />
              <div className="w-16 h-5 rounded-full bg-slate-200" />
            </div>
            <div className="h-5 w-3/5 bg-slate-200 rounded" />
            <div className="space-y-2">
              <div className="h-3 w-full bg-slate-200 rounded" />
              <div className="h-3 w-4/5 bg-slate-200 rounded" />
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="h-4 w-14 bg-slate-200 rounded" />
              <div className="h-4 w-12 bg-slate-200 rounded" />
            </div>
            <div className="h-9 w-full bg-slate-200 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
