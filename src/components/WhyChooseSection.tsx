import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, User, Clock, Tag } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/upholsteryData';

export const WhyChooseSection: React.FC = () => {
  const icons = [Sparkles, User, Clock, Tag, ShieldCheck];

  return (
    <section id="why-us" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Heading */}
        <div className="space-y-2 mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Restore DEEP
          </h2>
          <p className="text-base text-slate-600 font-medium">
            A local, independent service you can trust from start to finish.
          </p>
        </div>

        {/* 5 Bullet Points */}
        <div className="space-y-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const IconComp = icons[index % icons.length];
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 hover:border-cyan-400 hover:bg-cyan-50/20 transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-cyan-700 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
