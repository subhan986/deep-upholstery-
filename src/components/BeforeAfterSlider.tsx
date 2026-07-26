import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BEFORE_AFTER_RESULTS } from '../data/upholsteryData';
import { BeforeAfterProject } from '../types';

interface BeforeAfterSliderProps {
  onSelectProjectForQuote?: (project: BeforeAfterProject) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onSelectProjectForQuote }) => {

  return (
    <section id="results" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2559] tracking-tight">
            See the Transformation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
            Our cleaning process delivers stunning results. Check out these before and after photos.
          </p>
        </div>

        {/* Clean Static Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {BEFORE_AFTER_RESULTS.map((item) => {
            return (
              <div key={item.id} className="flex flex-col bg-slate-50 border border-slate-200/80 rounded-[28px] p-5 shadow-sm hover:shadow-md transition">
                {/* Title */}
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Single Transformation Image without overlay tags */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[20px] overflow-hidden border border-slate-200 group">
                  <img
                    src={item.beforeImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Description & Detail Footer */}
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {item.beforeDescription}
                  </p>
                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">{item.era} • {item.fabricUsed}</span>
                    {onSelectProjectForQuote && (
                      <button
                        onClick={() => onSelectProjectForQuote(item)}
                        className="text-cyan-700 font-bold hover:underline flex items-center gap-1"
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
