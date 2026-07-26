import React from 'react';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { Phone, Mail, Clock, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  onLockInQuote?: (quote: any) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onLockInQuote }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <div className="bg-[#1A2536] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            <span>Fast Turnaround & Same-Day Enquiries</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Us & Request A Free Quote
          </h1>

          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Fill out the instant quote form below or reach out directly via phone or WhatsApp. We respond promptly 7 days a week.
          </p>
        </div>
      </div>

      {/* Quick Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0099FF] flex items-center justify-center mx-auto sm:mx-0">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0B2559]">Phone Number</h3>
            <a
              href="tel:+447498333654"
              className="text-base font-extrabold text-[#0099FF] hover:underline block"
            >
              +44 7498 333654
            </a>
            <p className="text-[11px] text-slate-500 font-medium">Direct call & WhatsApp line</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0099FF] flex items-center justify-center mx-auto sm:mx-0">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0B2559]">Opening Hours</h3>
            <p className="text-sm font-bold text-slate-800">Mon to Sun: 8am - 8pm</p>
            <p className="text-[11px] text-slate-500 font-medium">7 days a week service</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0099FF] flex items-center justify-center mx-auto sm:mx-0">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0B2559]">Email Address</h3>
            <a
              href="mailto:info@restoredeep.co.uk"
              className="text-sm font-bold text-[#0099FF] hover:underline block break-all"
            >
              info@restoredeep.co.uk
            </a>
            <p className="text-[11px] text-slate-500 font-medium">Fast email support</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0099FF] flex items-center justify-center mx-auto sm:mx-0">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0B2559]">Base Address</h3>
            <p className="text-xs font-bold text-slate-800 leading-snug">195 Wood Street, London, England, E17 3NU</p>
            <p className="text-[11px] text-slate-500 font-medium">Serving all London & Greater London areas</p>
          </div>
        </div>
      </div>

      {/* Main Interactive Quote Estimator & WhatsApp Form */}
      <QuoteCalculator onLockInQuote={onLockInQuote} />

      {/* WhatsApp Fast Direct Action Card */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
              <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-emerald-950">Prefer to send photos directly on WhatsApp?</h3>
              <p className="text-xs sm:text-sm text-emerald-800 font-medium">
                Snap a quick photo of your sofa or carpet stain and send it over for an instant recommendation.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/447498333654?text=${encodeURIComponent(
              'Hello Restore DEEP! I would like a quick quote for cleaning my carpets/sofa.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-md transition transform hover:scale-105 shrink-0 uppercase tracking-wider"
          >
            CHAT ON WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
};
