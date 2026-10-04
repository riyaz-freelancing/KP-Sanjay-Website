import React from 'react';
import { Search, Shield, Globe, FileCheck, Anchor, Sparkles } from 'lucide-react';

export const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Market Research & Niche",
      desc: "Analyze high-demand global markets, identify target export products, and verify international HS code duties.",
      icon: Search
    },
    {
      num: "02",
      title: "Licensing & Setup",
      desc: "Register Importer-Exporter Code (IEC), APEDA/MPEDA/Spices Board licenses, and setup GST export compliance.",
      icon: Shield
    },
    {
      num: "03",
      title: "Buyer Acquisition",
      desc: "Connect directly with verified overseas buyers using B2B portals, embassy leads, and direct outreach systems.",
      icon: Globe
    },
    {
      num: "04",
      title: "Customs & LC Security",
      desc: "Structure Letter of Credit (LC) payment terms, Bill of Lading, Certificate of Origin, and customs inspection.",
      icon: FileCheck
    },
    {
      num: "05",
      title: "Container & Realization",
      desc: "Execute container loading (FCL/Reefer), port dispatch, bank shipping document submission, and foreign currency realization.",
      icon: Anchor
    }
  ];

  return (
    <section className="py-28 bg-[#030712] border-t border-white/10 relative overflow-hidden text-white">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>THE 5-STEP EXPORT ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How We Build Your <span className="text-gradient-gold">Export Enterprise</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            A proven, practical step-by-step roadmap taking you from zero knowledge to executing real container shipments.
          </p>
        </div>

        {/* TIMELINE PROCESS CARDS GRID (Horizontal Desktop / Vertical Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div 
                key={step.num}
                className="glass-card-editorial glass-card-hover p-6 rounded-3xl border border-white/10 flex flex-col justify-between relative group"
              >
                {/* Step Connector Line for Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-amber-500/50 to-transparent z-20 pointer-events-none" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-amber-400">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Phase {idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
