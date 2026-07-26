import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/447498333654?text=${encodeURIComponent(
    'Hello! I would like to inquire about carpet & upholstery cleaning services.'
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm px-4 py-3 rounded-full shadow-2xl transition group border border-white/20"
      aria-label="Contact us on WhatsApp"
    >
      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
        <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
      </div>
      <span className="tracking-wide pr-1">Chat on WhatsApp</span>
    </motion.a>
  );
};


