import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Briefcase } from 'lucide-react';

export const OpportunitiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  const opportunities = [
    {
      id: "op-1",
      title: "Independent Exporters",
      tag: "ENTREPRENEURSHIP",
      desc: "Start and run your own independent export-import business with direct buyer acquisition & full control over trade margins.",
      image: "/images/warehouse_exporter.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "op-2",
      title: "Cold Storage & Logistics",
      tag: "COLD CHAIN & WAREHOUSING",
      desc: "Manage specialized temperature-controlled cold storage, perishable cargo, & large-scale warehouse supply chains.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "op-3",
      title: "EXIM Trade Consultant",
      tag: "INDEPENDENT CONSULTING",
      desc: "Provide high-value advisory for foreign trade policies, EXIM documentation, shipping logistics & foreign compliance.",
      image: "/images/exim_manager.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "op-4",
      title: "B2B Global Digital Marketing",
      tag: "INTERNATIONAL MARKETS",
      desc: "Drive international buyer acquisition through B2B digital channels, SEO, global market research & online EXIM portals.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "op-5",
      title: "Global Sourcing Agent",
      tag: "MERCHANT TRADER",
      desc: "Act as a key sourcing agent or merchant trader connecting regional manufacturers directly with global buyers.",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "op-6",
      title: "Customs & Bank Specialist",
      tag: "COMPLIANCE & LC",
      desc: "Master customs clearance, Letters of Credit (LC), Bill of Lading, Phytosanitary certificates & bank compliance.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    }
  ];

  // Update visible cards count on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, opportunities.length - visibleCards);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="opportunities" className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-extrabold uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-amber-500" />
            <span>GLOBAL EXPORT HORIZONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06102a] tracking-tight leading-tight">
            End-to-End <span className="text-gradient-amber">Product Supply Chain</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            We manage every phase of international trade operations — from direct farm procurement to APEDA packaging, customs clearing, and ocean container delivery to global destination ports.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div 
          className="relative px-2 sm:px-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-slate-900 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-slate-900 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden rounded-3xl py-2">
            <div 
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {opportunities.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    width: `calc(${100 / visibleCards}% - ${(24 * (visibleCards - 1)) / visibleCards}px)`
                  }}
                  className="shrink-0 group relative rounded-3xl overflow-hidden h-[450px] bg-slate-950 border border-slate-200 shadow-md cursor-pointer"
                >
                  {/* Image */}
                  <img 
                    src={item.image} 
                    onError={(e) => {
                      if (item.fallbackImage) e.currentTarget.src = item.fallbackImage;
                    }}
                    alt={item.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06102a] via-[#06102a]/60 to-transparent transition-opacity duration-300 group-hover:via-[#06102a]/90" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] font-black px-3 py-1 rounded-full bg-slate-950/90 text-amber-400 border border-amber-500/40 uppercase tracking-wider backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-left z-20 transition-all duration-500">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-200 font-normal leading-relaxed border-t border-slate-700/80 pt-3">
                      {item.desc}
                    </p>
                    
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                      <span>Explore Pathway</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-2 pt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
