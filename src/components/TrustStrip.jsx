import React from 'react';
import { Award, Globe2, ShieldCheck, Users, TrendingUp } from 'lucide-react';

export const TrustStrip = () => {
  return (
    <section className="py-10 bg-[#030712] border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Horizontal Separator Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          
          <div className="py-4 md:py-0 px-6 flex flex-col items-center justify-center space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-2">
              <span>12+ Years</span>
            </div>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Industry Experience
            </p>
          </div>

          <div className="py-4 md:py-0 px-6 flex flex-col items-center justify-center space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-2">
              <span>5,000+</span>
            </div>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Exporters Mentored
            </p>
          </div>

          <div className="py-4 md:py-0 px-6 flex flex-col items-center justify-center space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-2">
              <span>50+</span>
            </div>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Global Destinations
            </p>
          </div>

          <div className="py-4 md:py-0 px-6 flex flex-col items-center justify-center space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-2">
              <span>98%</span>
            </div>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Client Satisfaction
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
