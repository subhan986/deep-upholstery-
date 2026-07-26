import React from 'react';
import { ServicesOverview } from '../components/ServicesOverview';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { AiRestorationConsultant } from '../components/AiRestorationConsultant';
import { Sparkles, CheckCircle2, Shield } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onLockInQuote?: (quote: any) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onLockInQuote }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <div className="bg-[#1A2536] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Comprehensive Cleaning & Transparent Rates</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services & Transparent Pricing
          </h1>

          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Professional hot water extraction for carpets, sofas, armchairs, and commercial premises with no hidden fees.
          </p>
        </div>
      </div>

      {/* Services Overview Grid */}
      <ServicesOverview onSelectServiceForQuote={() => {
        const el = document.getElementById('quote-calculator');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Instant Interactive Quote Estimator */}
      <QuoteCalculator onLockInQuote={onLockInQuote} />

      {/* AI Stain Diagnostic Tool & Fabric Guide */}
      <AiRestorationConsultant />
    </div>
  );
};
