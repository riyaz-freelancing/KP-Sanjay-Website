import React from 'react';
import { 
  ArrowUpRight, 
  PlayCircle, 
  Sparkles,
  Award,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Orb from './Orb';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 bg-[#030712] overflow-hidden min-h-[90vh] lg:min-h-screen flex items-center justify-center">
      
      {/* Background Ambient Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] sm:w-[850px] sm:h-[850px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay for High-Tech Aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Main Hero Container with Center 3D Orb Focus */}
        <div className="relative flex flex-col items-center justify-center max-w-5xl mx-auto py-6 sm:py-10">
          
          {/* Top Eyebrow Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-xl shadow-glow-amber animate-float mb-6">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>India's Practical Export Import Mentorship Institute</span>
          </div>

          {/* CENTER 3D INTERACTIVE ORB CONTAINER */}
          <div className="relative w-full max-w-[480px] sm:max-w-[580px] lg:max-w-[680px] aspect-square mx-auto flex items-center justify-center pointer-events-auto">
            
            {/* The WebGL Interactive 3D Orb Component */}
            <div className="w-full h-full relative z-0">
              <Orb
                hoverIntensity={0.6}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
                backgroundColor="#030712"
              />
            </div>

            {/* Overlaid Center Hero Headline */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] drop-shadow-2xl">
                We Create <br />
                <span className="text-gradient-gold drop-shadow">
                  Exporters
                </span>
              </h1>
            </div>

          </div>

          {/* Subheading Below Orb */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow">
            To make India a global export powerhouse by creating successful, independent exporters through 100% practical, hands-on mentorship.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5 z-20">
            <Link
              to="/courses"
              className="px-8 py-4 sm:px-9 sm:py-4.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base tracking-wide shadow-glow-amber hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
            >
              <span>Join EXIM Pathshala Course</span>
              <ArrowUpRight className="w-5 h-5 stroke-[3]" />
            </Link>

            <Link
              to="/courses"
              className="px-7 py-4 sm:px-8 sm:py-4.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-bold text-xs sm:text-sm tracking-wider backdrop-blur-xl hover:border-slate-500 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
            >
              <PlayCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>EXPLORE COURSES</span>
            </Link>
          </div>

          {/* Floating Highlight Badges (Left & Right Overlay) */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-6 items-center gap-3 p-3.5 rounded-2xl glass-card-editorial border border-white/10 shadow-2xl backdrop-blur-xl animate-float max-w-xs text-left">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-500/40 shrink-0 bg-slate-800">
              <img src="/images/kp1.jpeg" alt="KP Sanjay" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-white">KP SANJAY</span>
                <Award className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <p className="text-[11px] text-amber-300 font-semibold">Founder & Lead Mentor</p>
            </div>
          </div>

          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-6 items-center gap-3 p-3.5 rounded-2xl glass-card-editorial border border-white/10 shadow-2xl backdrop-blur-xl animate-float-slow max-w-xs text-left">
            <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-black text-white">5,000+ Exporters</div>
              <p className="text-[11px] text-slate-300 font-medium">Mentored Across 25+ States</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
