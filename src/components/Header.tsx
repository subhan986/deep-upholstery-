import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Clock, Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/images/LOGO (1).png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenQuote: () => void;
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES & PRICING' },
    { id: 'cleaning-area', label: 'CLEANING AREA' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Dark Bar */}
      <div className="bg-[#1A2536] text-white text-xs sm:text-sm py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-6 font-medium">
          <div className="flex items-center gap-2 text-slate-200">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Mon to Sun - 8am to 8pm</span>
          </div>

          <a
            href="tel:+447498333654"
            className="flex items-center gap-2 text-white font-bold hover:text-cyan-400 transition"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>+44 7498 333654</span>
          </a>
        </div>
      </div>

      {/* Main Light Header Bar */}
      <div className="bg-[#EEF3F8] border-b border-slate-300/80 px-4 sm:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo - Returns Home with Motion Hover */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-3 group shrink-0"
          >
            <img
              src={logoImg}
              alt="Restore DEEP Carpet & Upholstery Cleaning"
              className="h-10 sm:h-12 md:h-14 object-contain transition drop-shadow-xs"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 sm:gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs sm:text-sm font-bold tracking-wider transition uppercase cursor-pointer relative ${
                  currentPage === item.id
                    ? 'text-[#0099FF]'
                    : 'text-[#2C3E50] hover:text-[#0099FF]'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0099FF] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-full bg-[#38A6DE] hover:bg-[#2892CA] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md transition uppercase cursor-pointer"
            >
              REQUEST A QUOTE
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded bg-slate-200 text-slate-800 hover:bg-slate-300"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#1A2536] border-b border-slate-800 px-4 py-4 space-y-2 shadow-xl text-white overflow-hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded text-xs font-bold tracking-wider uppercase transition flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-[#0099FF] text-white'
                    : 'text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-full bg-[#38A6DE] hover:bg-[#2892CA] text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
              >
                <span>REQUEST A QUOTE</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

