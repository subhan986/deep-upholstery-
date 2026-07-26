import React from 'react';
import { MapPin, Tag, ShieldCheck, Star, ChevronRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/upholsteryData';
import logoImg from '../assets/images/LOGO (1).png';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenAiConsult?: () => void;
  onOpenGallery?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="hero" className="relative bg-white text-slate-900 overflow-hidden">
      {/* Full-width Background Image of Extraction Cleaning on Carpet */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Professional carpet extraction cleaning in London"
          className="w-full h-full object-cover object-center md:object-right"
          referrerPolicy="no-referrer"
        />
        {/* Soft Left Light Gradient Overlay to make left-aligned text crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 sm:via-white/70 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:pt-14 sm:pb-28">
        <div className="max-w-xl text-left">
          {/* Brand Logo Image directly from assets */}
          <div className="mb-4 inline-block">
            <img
              src={logoImg}
              alt="Restore DEEP Carpet & Upholstery Cleaning"
              className="h-14 sm:h-16 md:h-20 object-contain drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2559] tracking-tight leading-[1.1]">
            Carpet Cleaning <br />
            Near You in London
          </h1>

          {/* Subtitle */}
          <div className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2559] tracking-tight">
            That Actually{' '}
            <span className="relative inline-block text-[#0099FF] italic font-black">
              Works
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#0099FF] overflow-visible"
                viewBox="0 0 120 20"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12 C 35 18, 85 5, 117 11"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          {/* 3 Icon Features Row */}
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-md text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-cyan-50 text-[#0099FF] flex items-center justify-center mb-1.5 shadow-sm border border-cyan-100">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#0B2559] leading-tight">
                Local & Independent
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-cyan-50 text-[#0099FF] flex items-center justify-center mb-1.5 shadow-sm border border-cyan-100">
                <Tag className="w-5 h-5" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#0B2559] leading-tight">
                No Hidden Fees
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-cyan-50 text-[#0099FF] flex items-center justify-center mb-1.5 shadow-sm border border-cyan-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#0B2559] leading-tight">
                Safe for Children & Pets
              </span>
            </div>
          </div>

          {/* Star Rating Line */}
          <div className="mt-6 space-y-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm sm:text-base font-extrabold text-[#0B2559]">
                5 Star Rated <span className="font-medium text-slate-700">by Local Customers</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Trusted by homeowners across London & E17 Wood Street
            </p>
          </div>

          {/* Action CTA Button */}
          <div className="mt-7 flex flex-col items-start">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#1B95E0] via-[#0099FF] to-[#0072CE] hover:from-[#1582C7] hover:to-[#005CA8] text-white font-extrabold text-lg sm:text-xl tracking-wide shadow-xl hover:shadow-2xl transition transform hover:-translate-y-0.5 flex items-center justify-between gap-4 border border-cyan-300/40 group"
            >
              <span>Get Your Quote Today</span>
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition">
                <ChevronRight className="w-5 h-5 text-white stroke-[3]" />
              </div>
            </button>

            <p className="mt-2 text-xs text-slate-600 italic font-medium pl-1">
              No hidden cost. Fast response.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Curved Arc Mask dividing Hero from next section */}
      <div className="absolute bottom-0 inset-x-0 h-10 sm:h-14 bg-white [clip-path:ellipse(65%_100%_at_50%_100%)] z-20 pointer-events-none" />
    </section>
  );
};

