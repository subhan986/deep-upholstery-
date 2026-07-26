import React from 'react';
import { MapPin, Truck, Tag, Phone, ExternalLink } from 'lucide-react';

interface CleaningAreaSectionProps {
  onOpenQuote?: () => void;
}

export const CleaningAreaSection: React.FC<CleaningAreaSectionProps> = ({ onOpenQuote }) => {
  const col1 = [
    'London',
    'Watford',
    'Harrow',
    'Uxbridge',
    'Hounslow',
    'Slough',
    'Windsor',
    'Maidenhead',
    'Reading',
    'Bracknell',
    'Wokingham',
    'High Wycombe',
    'Amersham',
    'Chesham',
  ];

  const col2 = [
    'Beaconsfield',
    'Aylesbury',
    'Milton Keynes',
    'Luton',
    'Dunstable',
    'Hemel Hempstead',
    'St Albans',
    'Stevenage',
    'Bedford',
    'Banbury',
    'Bicester',
    'Didcot',
    'Abingdon',
    'Witney',
  ];

  const col3 = [
    'Oxford',
    'Leamington Spa',
    'Warwick',
    'Stratford-upon-Avon',
    'Coventry',
    'Rugby',
    'Northampton',
    'Solihull',
    'Dudley',
    'Walsall',
    'Wolverhampton',
    'Sutton Coldfield',
    'Birmingham',
  ];

  return (
    <section id="cleaning-area" className="py-16 sm:py-20 bg-slate-100/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2559] tracking-tight">
            Our Cleaning Area
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            We proudly serve a wide range of locations. Find out if we cover your area.
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Locations List Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-[#0B2559]">
              <MapPin className="w-5 h-5 text-[#0099FF]" />
              <h3 className="text-xl font-bold tracking-tight text-[#0B2559]">Service Locations</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 font-medium leading-relaxed">
              Our team is ready to serve you in the following areas and beyond. If you don't see your location, please get in touch!
            </p>

            {/* 3 Columns of Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-slate-600">
              <div className="space-y-2">
                {col1.map((loc) => (
                  <div key={loc} className="hover:text-[#0099FF] transition cursor-pointer flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{loc}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {col2.map((loc) => (
                  <div key={loc} className="hover:text-[#0099FF] transition cursor-pointer flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{loc}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {col3.map((loc) => (
                  <div key={loc} className="hover:text-[#0099FF] transition cursor-pointer flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Map Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#0B2559] mb-4">Our Coverage Map</h3>

              {/* Map Iframe */}
              <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  title="Restore DEEP Coverage Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.8000!2d-0.0020!3d51.5870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d87e0c00000%3A0x0!2s195%20Wood%20St%2C%20London%20E17%203NU%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <p className="mt-3 text-xs text-slate-500 font-medium">
                Our base is located at 195 Wood Street, London, E17 3NU, covering London and surrounding areas.
              </p>
            </div>

            {/* Quick Contact Link */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-600 font-bold">Unsure if we cover your postcode?</span>
              <a
                href="tel:+447498333654"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0099FF] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                Call +44 7498 333654
              </a>
            </div>
          </div>
        </div>

        {/* Feature Badges below Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 text-[#0099FF] flex items-center justify-center shrink-0">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B2559]">Area-Specific Deals</h4>
              <p className="text-xs text-slate-500 font-medium">Multi-room package discounts available in all listed towns.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 text-[#0099FF] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B2559]">Zero Travel Fees</h4>
              <p className="text-xs text-slate-500 font-medium">No hidden call-out charges or mileage surcharges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
