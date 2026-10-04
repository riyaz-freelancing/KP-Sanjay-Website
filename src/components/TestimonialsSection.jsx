import React, { useState } from 'react';
import { Quote, Star, CheckCircle2, ChevronLeft, ChevronRight, Award } from 'lucide-react';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const proofs = [
    {
      id: "p1",
      name: "Tariq Al-Mansoor",
      role: "FOOD IMPORT DIRECTOR",
      location: "Dubai, UAE",
      quote: "The quality of Basmati Rice and Spices exported by KP Sanjay's firm to Dubai was exceptional. Freight forwarding was on time, phytosanitary certificates were pristine, and container loading was handled professionally."
    },
    {
      id: "p2",
      name: "Jagdish Sonar",
      role: "AGRO COMMODITY SUPPLIER",
      location: "Maharashtra, India",
      quote: "Working with KP Sanjay for product exports has been a seamless experience. His APEDA packing house facility in Mumbai handles sorting, grading, and cold storage with utmost precision."
    },
    {
      id: "p3",
      name: "Pankaj Chand",
      role: "INTERNATIONAL TRADE PARTNER",
      location: "Punjab, India",
      quote: "KP Sanjay's end-to-end export execution is unmatched. From product sourcing to customs clearance and Letter of Credit verification, their team ensures zero hassle for international buyers."
    },
    {
      id: "p4",
      name: "Kiran Patil",
      role: "SEAFOOD EXPORT CONSULTANT",
      location: "Karnataka, India",
      quote: "Extremely reliable exporter for marine products and fresh fruits. Excellent packaging quality, strict compliance, and fast port dispatch."
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? proofs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === proofs.length - 1 ? 0 : prev + 1));
  };

  const currentProof = proofs[currentIndex];

  return (
    <section id="testimonials" className="py-28 bg-[#030712] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>GLOBAL BUYER & PARTNER REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Global Trust, <span className="text-gradient-gold">Uncompromised Quality</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            See what international importers and trade partners say about our export product quality, packing standards, and shipping reliability.
          </p>
        </div>

        {/* EDITORIAL LARGE QUOTE CAROUSEL */}
        <div className="max-w-4xl mx-auto relative glass-card-editorial p-8 sm:p-14 rounded-3xl border border-white/10 shadow-2xl text-left">
          
          <Quote className="w-16 h-16 text-amber-500/30 mb-6" />

          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed tracking-tight italic">
            "{currentProof.quote}"
          </p>

          <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-extrabold text-white">{currentProof.name}</h4>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mt-0.5">
                {currentProof.role} — <span className="text-slate-400 font-normal">{currentProof.location}</span>
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-amber-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-amber-500 hover:text-slate-950 border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
