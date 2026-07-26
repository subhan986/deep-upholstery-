import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import logoImg from '../assets/images/LOGO (1).png';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenQuote: () => void;
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A2536] text-slate-300 pt-14 pb-8 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-700/60">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div
              onClick={() => handleNav('home')}
              className="inline-block p-2 bg-white/95 rounded-xl shadow-md cursor-pointer"
            >
              <img
                src={logoImg}
                alt="Restore DEEP Carpet & Upholstery Cleaning"
                className="h-12 sm:h-14 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-white tracking-tight">Restore DEEP</h3>
              <p className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                Carpets & Upholstery Cleaning
              </p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              London's independent extraction specialists based at 195 Wood Street, E17 3NU. Hot water extraction for carpets, sofas & upholstery. Safe for children & pets.
            </p>
          </div>

          {/* Column 2: About Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#0099FF] uppercase tracking-wider">About</h4>
            <ul className="space-y-2 font-medium text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  Request A Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Cleaning Area Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#0099FF] uppercase tracking-wider">Cleaning Area</h4>
            <ul className="space-y-2 font-medium text-slate-300">
              <li>London</li>
              <li>Watford</li>
              <li>Harrow</li>
              <li>Uxbridge</li>
              <li>Hounslow</li>
              <li>
                <button
                  onClick={() => handleNav('cleaning-area')}
                  className="text-cyan-400 hover:underline font-bold transition cursor-pointer inline-flex items-center gap-1"
                >
                  ...and more
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#0099FF] uppercase tracking-wider">Contact Details</h4>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white flex items-center justify-center transition border border-slate-700"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <ul className="space-y-2.5 font-medium text-slate-300 pt-1">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mon to Sun - 8am to 8pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+447498333654" className="hover:text-cyan-400 font-bold transition">
                  +44 7498 333654
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@restoredeep.co.uk" className="hover:text-cyan-400 transition">
                  info@restoredeep.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>195 Wood Street, London, England, E17 3NU</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="pt-8 text-center text-xs text-slate-400 font-medium">
          Copyright © 2026 Restore DEEP Carpets & Upholstery Cleaning | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
