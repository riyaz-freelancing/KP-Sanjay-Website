import React from 'react';
import { Award, CheckCircle2, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative bg-[#030712] text-white border-t border-white/10 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* SECTION: EDITORIAL TWO-COLUMN STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Visual - Overlapping Founder Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 glass-card-editorial p-3 shadow-2xl group">
              <div className="rounded-2xl overflow-hidden relative">
                <img 
                  src="/images/kp1.jpeg" 
                  alt="KP Sanjay - MD & Founder" 
                  className="w-full h-auto max-h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-85" />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card-editorial border border-white/15 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Verified International Trade Mentor</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">Direct Hands-on Guidance for Indian Exporters</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Content - Editorial Story */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>ABOUT KP SANJAY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Building India's Next Generation of <span className="text-gradient-gold">Global Exporters</span>
            </h2>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed font-normal">
              <p>
                KP Sanjay is a seasoned export professional with over a decade of hands-on experience in the global trade industry. With a strong foundation in international business, he has built an impeccable reputation as a trusted exporter and consultant in agricultural commodities, fruits, vegetables, spices, and marine products.
              </p>
              <p>
                Having expanded export operations to more than 12 countries across the Middle East, Europe, and Asia, KP Sanjay brings real, unvarnished field expertise to emerging exporters—teaching exact buyer acquisition formulas, customs clearance, Letters of Credit (LC), and risk-free payment terms.
              </p>
            </div>

            {/* Checkmark Bullet Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-200">
                  Step-by-step guidance through real international trade execution
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-200">
                  Verified buyer finding strategies & LC payment security formulas
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-200">
                  100% practical field experience guarantee — Zero boring textbook theory
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-500 text-amber-300 font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
              >
                <span>Read Full Founder Story</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

          </div>

        </div>

        {/* SECTION: MAHARASHTRA BUSINESS ICON AWARD FEATURE */}
        <div className="rounded-3xl glass-card-editorial p-8 sm:p-12 lg:p-14 border border-amber-500/20 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>PRESTIGIOUS HONORS</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Maharashtra Business Icon Award
              </h3>

              <p className="text-base text-slate-300 font-normal leading-relaxed pt-2">
                KP Sanjay has received prestigious recognition for his outstanding contribution to India's export and agri-business mentorship sector, including the Maharashtra Business Icon Award.
              </p>

              <p className="text-base text-slate-300 font-normal leading-relaxed">
                This award reflects his unyielding vision, leadership, and practical impact in empowering independent Indian exporters to conquer international markets.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="/images/awards_recognition_kp.jpeg" 
                  alt="Maharashtra Business Icon Award" 
                  className="w-full h-auto max-h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
