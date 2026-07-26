import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface QuoteCalculatorProps {
  onLockInQuote?: (quoteData: any) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onLockInQuote }) => {
  const [rooms, setRooms] = useState('');
  const [postcode, setPostcode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const quotePayload = {
      rooms,
      postcode,
      email,
      phone,
      message,
    };

    if (onLockInQuote) {
      onLockInQuote(quotePayload);
    }

    let text = `Hello Restore DEEP! I would like to request a quote.\n`;
    if (rooms) text += `• Rooms to Clean: ${rooms}\n`;
    if (postcode) text += `• Postcode: ${postcode}\n`;
    if (email) text += `• Email: ${email}\n`;
    if (phone) text += `• Phone: ${phone}\n`;
    if (message) text += `• Message: ${message}\n`;

    const whatsappUrl = `https://wa.me/447498333654?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="quote-calculator" className="py-16 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#38A6DE] tracking-tight">
            Request A Free Quote
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
            Fill out the form below. We'll send your message directly to our team via WhatsApp.
          </p>
        </div>

        {/* Card Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 text-left max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Row 1: Rooms & Postcode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#1E293B] mb-1.5">
                  Rooms to Clean
                </label>
                <input
                  type="text"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="e.g., Living Room, 2 Bedrooms"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38A6DE] focus:bg-white transition placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#1E293B] mb-1.5">
                  Postcode
                </label>
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="Your postal code"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38A6DE] focus:bg-white transition placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#1E293B] mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38A6DE] focus:bg-white transition placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#1E293B] mb-1.5">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your contact number"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38A6DE] focus:bg-white transition placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-[#1E293B] mb-1.5">
                Message
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about what you need cleaned, any specific stains, etc."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38A6DE] focus:bg-white transition placeholder:text-slate-400 resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#38A6DE] hover:bg-[#2892CA] active:bg-[#1E7FB6] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-[#38A6DE]" />
                <span>Send Request via WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

