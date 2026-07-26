import React, { useState } from 'react';
import { CleaningAreaSection } from '../components/CleaningAreaSection';
import { MapPin, Phone, MessageCircle, Check, Search, ShieldCheck } from 'lucide-react';

interface CleaningAreaPageProps {
  onNavigate: (page: string) => void;
}

export const CleaningAreaPage: React.FC<CleaningAreaPageProps> = ({ onNavigate }) => {
  const [postcode, setPostcode] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const coveredPrefixes = [
    'OX', 'NN', 'CV', 'LU', 'AL', 'HP', 'MK', 'SL', 'UB', 'HA', 'WD', 'W', 'NW', 'SW', 'SE', 'E', 'EC', 'WC', 'N', 'RG', 'B', 'WS', 'WV', 'DY'
  ];

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode.trim()) return;
    const clean = postcode.trim().toUpperCase();
    const prefix = clean.replace(/[^A-Z]/g, '').slice(0, 2);

    if (coveredPrefixes.some(p => clean.startsWith(p) || prefix === p)) {
      setSearchResult(`Great news! Postcode "${clean}" is fully covered by our mobile extraction unit with zero travel surcharges.`);
    } else {
      setSearchResult(`Postcode "${clean}" is likely within our wider coverage radius! Contact our team on WhatsApp to confirm.`);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <div className="bg-[#1A2536] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Mobile Extraction Radius</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Cleaning Area & Coverage
          </h1>

          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            We are based at 195 Wood Street, London E17 3NU, serving all London, Walthamstow, Watford, Luton, Oxford, and surrounding areas with no travel surcharges.
          </p>
        </div>
      </div>

      {/* Postcode Instant Coverage Checker */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#0B2559]">Check Your Postcode Coverage</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Enter your postal code below to instantly check if your address is within our primary service route.
            </p>
          </div>

          <form onSubmit={handlePostcodeCheck} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="e.g. OX16, WD17, HA1, W1"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#0099FF] hover:bg-cyan-600 text-white font-bold text-sm rounded-xl transition cursor-pointer shrink-0"
            >
              Check Coverage
            </button>
          </form>

          {searchResult && (
            <div className="p-4 bg-cyan-50 border border-cyan-200 text-slate-800 rounded-xl text-xs sm:text-sm font-medium animate-fadeIn flex items-start gap-3 text-left max-w-lg mx-auto">
              <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p>{searchResult}</p>
                <div className="mt-2 pt-2 border-t border-cyan-200/60 flex items-center justify-between">
                  <a
                    href={`https://wa.me/447498333654?text=${encodeURIComponent(
                      `Hi, I want to book cleaning at postcode ${postcode}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#25D366] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#25D366] text-white" />
                    <span>WhatsApp Us Now</span>
                  </a>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#0099FF] font-bold hover:underline"
                  >
                    Request Quote →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Full Cleaning Area Section with Locations & Interactive Map */}
      <CleaningAreaSection onOpenQuote={() => onNavigate('contact')} />

      {/* Direct Contact Banner */}
      <section className="py-14 bg-[#0B2559] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Need cleaning in a nearby town not listed?</h2>
          <p className="text-slate-300 text-sm">
            Our mobile technicians travel regularly across the region. Call us directly on +44 7498 333654 to confirm availability.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+447498333654"
              className="px-6 py-3 rounded-full bg-[#0099FF] hover:bg-cyan-500 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md transition inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL +44 7498 333654</span>
            </a>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs sm:text-sm border border-slate-700 tracking-wider uppercase transition cursor-pointer"
            >
              GET AN ONLINE QUOTE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
