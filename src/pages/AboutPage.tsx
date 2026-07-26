import React from 'react';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { PhotoGridGallery } from '../components/PhotoGridGallery';
import { ReviewsAndGallery } from '../components/ReviewsAndGallery';
import { ShieldCheck, Award, HeartHandshake, ArrowRight, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const servicesList = [
    'Carpet Cleaning',
    'Upholstery Cleaning',
    'Hard Floor Cleaning',
    'Professional Cleaning',
    'Stain Removal',
    'Deep Cleaning',
    'Carpet Maintenance',
    'Floor Restoration',
    'Carpet Sanitizing'
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <div className="bg-[#1A2536] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Local Cleaning Expertise</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            About
          </h1>

          <p className="max-w-2xl mx-auto text-slate-200 text-base sm:text-xl font-medium leading-relaxed">
            Your trusted partner for professional carpet and upholstery cleaning.
          </p>
        </div>
      </div>

      {/* Main Who We Are Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Who We Are Block */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 text-[#0099FF] font-bold text-xs uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-lg">
              <Sparkles className="w-4 h-4" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2559] tracking-tight">
              Dedicated to Keeping Your Carpets & Upholstery Fresh
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              We understand the importance of keeping your carpets, upholstery, and hard floors looking and feeling their best. This is why we offer a variety of services to meet your needs. Whether you’re in need of a deep clean, stain removal, or regular maintenance, we’ve got you covered with our local carpet cleaning expertise.
            </p>

            {/* Services Bullet Badges */}
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Our Services Include:</h3>
              <div className="flex flex-wrap gap-2.5">
                {servicesList.map((service, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold shadow-xs hover:border-cyan-500 transition"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location & Reputation Block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#0B2559] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-lg">
                <MapPin className="w-4 h-4" />
                <span>Our Base Location</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Serving the Community for Many Years
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our local company, based at <strong className="text-white">Suite RA01, 195-197 Wood Street, London</strong>, has been serving the community for many years. We’ve built a reputation for providing high-quality, reliable service.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We use the latest techniques and equipment. Consequently, your carpets, upholstery, and hard floors are left looking and feeling fresh, clean, and revitalized. Consider us for your local needs.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-white/10 rounded-2xl border border-white/10 text-center space-y-3">
              <MapPin className="w-10 h-10 text-cyan-400" />
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Base Address</div>
              <div className="text-sm font-extrabold text-white leading-snug">
                Suite RA01, 195-197 Wood Street, London
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="mt-2 w-full py-2.5 px-4 rounded-xl bg-[#0099FF] hover:bg-cyan-500 text-white font-bold text-xs transition"
              >
                Get In Touch
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Company Guarantees */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2559]">Our Core Promises</h2>
            <p className="text-slate-600 text-sm sm:text-base">What sets our local professional cleaning service apart.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#0099FF] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B2559]">100% Satisfaction Guarantee</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you aren't completely delighted with the transformation, we will re-clean the area free of charge.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#0099FF] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B2559]">Child & Pet Safe Solutions</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We use eco-friendly, non-toxic extraction solutions that leave zero hazardous chemical residues behind.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#0099FF] flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B2559]">Honest Fixed Quotes</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No surprises on the day. The quote we provide is the exact price you pay for complete deep extraction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Transformations Gallery */}
      <PhotoGridGallery />

      {/* Customer Reviews */}
      <ReviewsAndGallery />

      {/* Call To Action */}
      <section className="py-14 bg-[#0B2559] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to discuss your cleaning project?</h2>
          <p className="text-slate-300 text-sm sm:text-base">Speak directly with our team or request a fast quote online.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-[#0099FF] hover:bg-cyan-500 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg transition cursor-pointer flex items-center gap-2"
            >
              <span>CONTACT US NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

