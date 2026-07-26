import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/447498333654?text=${encodeURIComponent(
    'Hello! I would like to inquire about carpet & upholstery cleaning services.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm px-4 py-3 rounded-full shadow-2xl transition transform hover:scale-105 active:scale-95 group border border-white/20"
      aria-label="Contact us on WhatsApp"
    >
      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
        <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
      </div>
      <span className="tracking-wide">How can I help you?</span>
    </a>
  );
};
