import React from 'react';
import { Star, ShieldCheck, CheckCircle2, User } from 'lucide-react';
import { VERIFIED_REVIEWS } from '../data/upholsteryData';

export const ReviewsAndGallery: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <div className="space-y-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            <span className="text-amber-500 mr-2">5-Star Rated</span> by local customers
          </h2>
          <p className="text-base sm:text-lg font-bold text-slate-700">
            118+ Verified Reviews from homeowners near you.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">{rev.date}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm">
                  "{rev.title}"
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                    <User className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 flex items-center gap-1">
                      <span>{rev.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 fill-cyan-100" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {rev.location} • {rev.service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Footer Badge */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>100% Genuine Local Customer Feedback • Independently Verified</span>
        </div>
      </div>
    </section>
  );
};
