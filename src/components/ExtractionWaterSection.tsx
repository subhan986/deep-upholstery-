import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { DIRTY_WATER_COLLECTION } from '../data/upholsteryData';

interface ExtractionWaterSectionProps {
  onOpenQuote: () => void;
}

export const ExtractionWaterSection: React.FC<ExtractionWaterSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="extraction" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          This is what comes out of your carpet
        </h2>
        <p className="mt-2 text-base text-slate-600 font-medium max-w-2xl mx-auto">
          Look at the actual murky extracted soil, pet dander, and deep grime pulled from local London carpets & upholstery.
        </p>

        {/* 4 Photo Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIRTY_WATER_COLLECTION.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 text-left hover:shadow-lg transition group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>{item.location}</span>
                </div>
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col items-center">
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-white font-extrabold text-lg sm:text-xl tracking-wide shadow-xl hover:shadow-2xl transition transform hover:-translate-y-0.5 flex items-center justify-center gap-3 border border-cyan-300/40"
          >
            <span>Get Your Quote Today</span>
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </button>
        </div>
      </div>
    </section>
  );
};
