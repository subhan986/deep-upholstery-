import React from 'react';
import { Sparkles, Armchair, Layers, ShieldAlert, Target, ShieldCheck, ArrowRight } from 'lucide-react';
import { CLEANING_SERVICES } from '../data/upholsteryData';

interface ServicesOverviewProps {
  onSelectServiceForQuote?: (serviceName: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectServiceForQuote }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-8 h-8 text-cyan-600" />,
    Sofa: <Armchair className="w-8 h-8 text-cyan-600" />,
    Layers: <Layers className="w-8 h-8 text-cyan-600" />,
    ShieldAlert: <ShieldAlert className="w-8 h-8 text-cyan-600" />,
    Target: <Target className="w-8 h-8 text-cyan-600" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-cyan-600" />,
  };

  return (
    <section id="services" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <div className="space-y-2 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2559] tracking-tight">
            Our Professional Cleaning Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            We offer a wide range of cleaning services to meet your needs, from carpets to commercial spaces.
          </p>
        </div>

        {/* 6 Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CLEANING_SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onSelectServiceForQuote && onSelectServiceForQuote(srv.title)}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-between hover:shadow-md hover:border-cyan-500 transition cursor-pointer group text-center"
            >
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white transition duration-300">
                {React.cloneElement(iconMap[srv.iconName] as React.ReactElement, {
                  className: "w-8 h-8 group-hover:text-white transition"
                })}
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="font-extrabold text-slate-900 text-sm group-hover:text-cyan-600 transition">
                  {srv.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center text-[11px] font-bold text-cyan-600 group-hover:text-cyan-700">
                <span>View Options</span>
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
