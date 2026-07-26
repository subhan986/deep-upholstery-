import React, { useState } from 'react';
import { Bot, Sparkles, Send, ShieldCheck } from 'lucide-react';

interface AiRestorationConsultantProps {
  onOpenBookingWithAiData?: (data: any) => void;
}

export const AiRestorationConsultant: React.FC<AiRestorationConsultantProps> = ({ onOpenBookingWithAiData }) => {
  const [stainType, setStainType] = useState<string>('Pet Urine / Odour');
  const [carpetMaterial, setCarpetMaterial] = useState<string>('Wool Carpet');
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);

  const handleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/restore-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stainType,
          carpetMaterial,
          description: description || `Stain type: ${stainType} on ${carpetMaterial}`,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setResult(data);
      } else {
        // Fallback default recommendation
        setResult({
          structuralAnalysis: `Hot water extraction with targeted enzyme neutralizers is highly effective for ${stainType} on ${carpetMaterial}.`,
          recommendedServices: ['High-Pressure Extraction Rinse', 'Sub-floor Enzyme Treatment', 'Pet Odour Neutralizer'],
          expertTips: [
            'Do not scrub aggressively as it can damage wool fibres.',
            'Blot excess moisture with a clean white cotton towel.',
            'Schedule deep extraction within 48 hours for complete stain elimination.'
          ]
        });
      }
    } catch {
      setResult({
        structuralAnalysis: `Deep hot water extraction with specialized stain solvers is recommended for ${stainType}.`,
        recommendedServices: ['Deep Extraction Clean', 'Fluorochemical Stain Shield'],
        expertTips: ['Keep the area dry and call Restore DEEP for professional extraction.']
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consult" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center shadow-lg">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                AI Stain & Carpet Diagnostic
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Instant AI Stain Removal Assistant
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300">
            Select your stain or carpet problem below to get an instant professional extraction diagnostic powered by expert cleaning protocols.
          </p>

          <form onSubmit={handleConsultation} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Stain / Issue Type</label>
                <select
                  value={stainType}
                  onChange={(e) => setStainType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                >
                  <option value="Pet Urine / Odour">Pet Urine & Odour</option>
                  <option value="Red Wine / Coffee / Tea">Red Wine / Coffee / Tea</option>
                  <option value="Mud / Ground-in Traffic Dirt">Mud & Traffic Lanes</option>
                  <option value="Grease / Oil / Makeup">Grease / Oil / Makeup</option>
                  <option value="General Sofa Grime">Sofa / Upholstery Grime</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Carpet / Fabric Type</label>
                <select
                  value={carpetMaterial}
                  onChange={(e) => setCarpetMaterial(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                >
                  <option value="Wool Carpet">Wool / Wool Blend Carpet</option>
                  <option value="Synthetic Nylon/Poly">Synthetic Nylon / Polyester</option>
                  <option value="Plush Velvet Sofa">Velvet / Microfiber Sofa</option>
                  <option value="Loop Pile Berbers">Loop Pile Berber</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Additional Details (Optional)</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Stain is 2 days old on living room rug"
                className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition"
            >
              {loading ? (
                <span>Analyzing Extraction Solution...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Run AI Diagnostic</span>
                </>
              )}
            </button>
          </form>

          {result && (
            <div className="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-3 text-xs animate-fadeIn">
              <div className="flex items-center gap-1.5 text-cyan-400 font-extrabold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Recommended Cleaning Protocol</span>
              </div>
              <p className="text-slate-200 leading-relaxed">
                {result.structuralAnalysis}
              </p>

              {result.expertTips && (
                <div className="space-y-1">
                  <div className="font-bold text-white">Specialist Pro Tips:</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {result.expertTips.map((tip: string, i: number) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
