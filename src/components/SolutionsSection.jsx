import React, { useState } from 'react';
import { Lightbulb, Hourglass, Heart, Users, ArrowRight, Zap } from 'lucide-react';

export const SolutionsSection = () => {
  const [activeHoverId, setActiveHoverId] = useState('01');

  const services = [
    {
      num: "01",
      icon: Lightbulb,
      title: "Direct Farm Procurement & Quality Sourcing",
      desc: "We source authentic Indian agricultural produce, spices, marine foods, and rice directly from certified regional farms and processing units.",
      details: "Quality inspection, APEDA standards, grading, and organic origin verification.",
      accent: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400"
    },
    {
      num: "02",
      icon: Hourglass,
      title: "APEDA Certified Packing House Facility",
      desc: "Operating a fully equipped packing house facility in Mumbai for sorting, temperature-controlled cold storage, and export palletization.",
      details: "Cold chain logistics, reefer container packing, phytosanitary checks & loading.",
      accent: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-cyan-400"
    },
    {
      num: "03",
      icon: Heart,
      title: "Customs Clearance & Trade Documentation",
      desc: "Complete error-free export documentation including Bill of Lading, Certificate of Origin, FSSAI clearance, and customs filing.",
      details: "ICEGATE compliance, LC payment verification, and port clearance protocols.",
      accent: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      num: "04",
      icon: Users,
      title: "Global Ocean & Air Freight Delivery",
      desc: "Seamless ocean liner booking (FCL & LCL) and air cargo dispatch servicing major sea ports and airports in Middle East, Europe, and Asia.",
      details: "50+ destination ports, real-time shipment tracking, and competitive freight.",
      accent: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <section id="why-choose" className="py-28 bg-[#030712] border-t border-white/10 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>EXPORT OPERATIONS & CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Comprehensive EXIM Solutions Built for <span className="text-gradient-gold">Global Scale</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            From direct farm sourcing to APEDA packing house operations, customs clearance, and global ocean freight delivery — we handle complete product exports under one roof.
          </p>
        </div>

        {/* INTERACTIVE NUMBERED SHOWCASE LIST (01, 02, 03, 04) */}
        <div className="space-y-4">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isHovered = activeHoverId === service.num;

            return (
              <div
                key={service.num}
                onMouseEnter={() => setActiveHoverId(service.num)}
                className={`rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden border ${
                  isHovered 
                    ? 'bg-slate-900/90 border-amber-500/40 p-8 sm:p-10 shadow-2xl shadow-amber-500/10 scale-[1.01]' 
                    : 'glass-card-editorial border-white/10 p-6 sm:p-8 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Left Number & Title */}
                  <div className="flex items-start sm:items-center gap-6 text-left">
                    <span className={`text-3xl sm:text-4xl font-black tracking-tight ${isHovered ? 'text-amber-400' : 'text-slate-500'}`}>
                      {service.num}
                    </span>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Action & Expand Visual */}
                  <div className="flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10 shrink-0">
                    {isHovered && (
                      <span className="hidden sm:inline-block text-xs font-bold text-amber-300 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30">
                        {service.details}
                      </span>
                    )}

                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isHovered ? 'bg-amber-500 text-slate-950 scale-110 shadow-glow-amber' : 'bg-white/5 text-slate-400 border border-white/10'
                    }`}>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
