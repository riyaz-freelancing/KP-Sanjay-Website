import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, Facebook, Instagram, Youtube, Linkedin, Award } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#030712] border-t border-white/10 text-white text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/images/logo-kp.png" 
                alt="KP Sanjay Logo" 
                className="h-11 w-auto object-contain shrink-0 drop-shadow group-hover:scale-105 transition-transform" 
              />
              <div>
                <span className="font-black text-xl text-white tracking-tight block">KP SANJAY</span>
                <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">International Trade Specialist</p>
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Empowering individuals & businesses across India to build global, multi-million dollar export enterprises through practical hands-on mentorship and verified trade systems.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-amber-300 hover:border-amber-500/50 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-amber-300 hover:border-amber-500/50 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-amber-300 hover:border-amber-500/50 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-amber-300 hover:border-amber-500/50 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">PROGRAMS & MENTORSHIP</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-300">
              <li><Link to="/courses" className="hover:text-amber-300 transition-colors block py-0.5">Exim Pathshala (Complete EXIM)</Link></li>
              <li><Link to="/courses" className="hover:text-amber-300 transition-colors block py-0.5">Export Kranti (Live Mentorship)</Link></li>
              <li><Link to="/courses" className="hover:text-amber-300 transition-colors block py-0.5">E-com Export Mastery</Link></li>
              <li><Link to="/daily-gk" className="hover:text-amber-300 transition-colors block py-0.5">Daily Current Affairs & EXIM GK</Link></li>
              <li><Link to="/about" className="hover:text-amber-300 transition-colors block py-0.5">Customs Clearance & LC Mentorship</Link></li>
            </ul>
          </div>

          {/* Column 3: Featured Recognitions */}
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">FEATURED RECOGNITIONS</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-300">
              <li><Link to="/about" className="hover:text-amber-300 transition-colors block py-0.5">Maharashtra Business Icon Award</Link></li>
              <li><Link to="/about" className="hover:text-amber-300 transition-colors block py-0.5">Packing House Operations (Mumbai)</Link></li>
              <li><Link to="/courses" className="hover:text-amber-300 transition-colors block py-0.5">Verified Student Success Proofs</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition-colors block py-0.5">Download Proposal Brochure (PDF)</Link></li>
            </ul>
          </div>

          {/* Column 4: Helpline & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">EXIM HELPLINE</h4>
            <div className="space-y-3 text-xs sm:text-sm font-medium text-slate-300">
              <a href="tel:+919156062111" className="hover:text-amber-300 transition-colors flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 91560 62111</span>
              </a>
              <a href="mailto:info@kpsanjay.com" className="hover:text-amber-300 transition-colors flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@kpsanjay.com</span>
              </a>
              <p className="text-xs text-slate-400 font-normal pt-1 leading-relaxed">
                KP Sanjay Export Mentorship Hub, Mumbai, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
          <p>© 2026 KP Sanjay. All rights reserved.</p>
          <div className="flex items-center gap-6 font-semibold text-slate-300">
            <Link to="/privacy-policy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link>
            <Link to="/refund-policy" className="hover:text-amber-300 transition-colors">Refund Policy</Link>
            <Link to="/terms" className="hover:text-amber-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
