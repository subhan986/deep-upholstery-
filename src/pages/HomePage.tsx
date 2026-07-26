import React from 'react';
import { Hero } from '../components/Hero';
import { ServicesOverview } from '../components/ServicesOverview';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ReviewsAndGallery } from '../components/ReviewsAndGallery';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Banner */}
      <Hero onOpenQuote={() => {
        const el = document.getElementById('quote-calculator');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          onNavigate('contact');
        }
      }} />

      {/* 2. See the Transformation (Before / After) */}
      <BeforeAfterSlider onSelectProjectForQuote={() => {
        const el = document.getElementById('quote-calculator');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* 3. Our Professional Cleaning Services */}
      <ServicesOverview onSelectServiceForQuote={() => {
        const el = document.getElementById('quote-calculator');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* 4. Request A Free Quote Calculator */}
      <QuoteCalculator />

      {/* 5. Customer Reviews (EXCELLENT 5-Star Reviews) */}
      <ReviewsAndGallery />
    </div>
  );
};
