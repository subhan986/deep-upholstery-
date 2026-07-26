import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CleaningAreaPage } from './pages/CleaningAreaPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [lockedQuote, setLockedQuote] = useState<any>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLockInQuote = (quoteData: any) => {
    setLockedQuote(quoteData);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white flex flex-col justify-between">
      <div>
        {/* Persistent Header with distinct Page Navigation */}
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenQuote={() => handleNavigate('contact')}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Dynamic Multi-Page Router Views */}
        <main>
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onNavigate={handleNavigate}
              onLockInQuote={handleLockInQuote}
            />
          )}

          {currentPage === 'cleaning-area' && (
            <CleaningAreaPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'contact' && (
            <ContactPage onLockInQuote={handleLockInQuote} />
          )}
        </main>
      </div>

      {/* Persistent Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleNavigate('contact')}
      />

      {/* Persistent Floating WhatsApp Direct Contact */}
      <FloatingWhatsApp />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefilledQuote={lockedQuote}
      />
    </div>
  );
}
