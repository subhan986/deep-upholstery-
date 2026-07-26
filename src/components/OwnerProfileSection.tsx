import React from 'react';
import { Star, ArrowRight, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import fabricSwatchesImg from '../assets/images/fabric_swatches_1784829154153.jpg';

interface OwnerProfileSectionProps {
  onOpenQuote: () => void;
}

export const OwnerProfileSection: React.FC<OwnerProfileSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-lg overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Image Card */}
            <div className="md:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src={fabricSwatchesImg}
                  alt="Restore DEEP Professional Carpet & Upholstery Cleaning"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 text-white p-3 rounded-xl backdrop-blur-sm border border-white/10 text-center">
                  <div className="font-extrabold text-sm text-white">Restore DEEP London</div>
                  <div className="text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>195 Wood Street, London E17 3NU</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div>
                <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  Quality Service Guarantee
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Restore DEEP Carpet & Upholstery Cleaning
                </h2>
              </div>

              <div className="space-y-3 text-slate-800 text-lg sm:text-xl font-bold">
                <p className="text-[#0099FF] font-extrabold">
                  Independent Hot Water Extraction Specialists in London
                </p>
                <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed">
                  Based at <strong>195 Wood Street, London, England, E17 3NU</strong>. We deliver high-pressure 400 PSI hot water extraction for carpets, sofas, armchairs, and commercial spaces with zero hidden fees.
                </p>
                <ul className="space-y-2 text-sm text-slate-700 font-semibold pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>No contractors — dedicated trained extraction technicians</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Safe child & pet-friendly eco pre-treatments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Fast 2–4 hour drying time with high air movers</span>
                  </li>
                </ul>
              </div>

              {/* Star Rating Line */}
              <div className="flex items-center gap-2 pt-2">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-extrabold text-slate-900 text-sm">
                  5 Star rated by London homeowners
                </span>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-white font-extrabold text-lg tracking-wide shadow-xl hover:shadow-2xl transition transform hover:-translate-y-0.5 flex items-center gap-3 border border-cyan-300/40"
                >
                  <span>Get Your Quote Today</span>
                  <ArrowRight className="w-6 h-6 stroke-[3]" />
                </button>
                <p className="mt-2 text-xs text-slate-500 italic font-medium">
                  No obligation. Fast response 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
