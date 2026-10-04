import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Sparkles, PhoneCall, Mail, CheckCircle2, Download, ArrowRight } from 'lucide-react';

export const ContactSection = () => {
  const { addLead } = useData();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    interest: 'Brochure Download'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    addLead(formData);
    setSubmitted(true);
    
    // Automatically open/download proposal PDF
    window.open('/kp-sanjay-Proposal.pdf', '_blank');

    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      interest: 'Brochure Download'
    });
  };

  return (
    <section id="contact" className="py-28 bg-[#030712] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Visual Ambient Glow Connected to Hero Orb Aesthetics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* High-Impact Glass Card */}
        <div className="rounded-3xl glass-card-editorial border border-amber-500/30 p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                Let’s Build Your <br />
                <span className="text-gradient-gold">Global Export Enterprise</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Download our official 2026 Export Product Catalog brochure to explore complete product specifications, packaging standards, and bulk export inquiry guidelines.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs sm:text-sm font-semibold text-slate-300 border-t border-white/10">
                <a href="tel:+919156062111" className="hover:text-amber-300 transition-colors flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                  </div>
                  <span>CALL +91 91560 62111</span>
                </a>

                <a href="mailto:info@kpsanjay.com" className="hover:text-amber-300 transition-colors flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <span>EMAIL: info@kpsanjay.com</span>
                </a>
              </div>

            </div>

            {/* Right Form Box */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#070d1e]/90 border border-white/10 shadow-2xl space-y-4 backdrop-blur-xl">
                
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                    <h4 className="text-xl font-bold text-white">Catalog Dispatched!</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Thank you! Our Export Product Catalog PDF has dispatched. Check your browser downloads to review our products and export specifications.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-white/10 text-xs font-bold text-amber-300 hover:bg-white/20 transition-all"
                    >
                      Download Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        FULL NAME *
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        MOBILE NUMBER (WHATSAPP) *
                      </label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-glow-amber flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>DOWNLOAD PRODUCT CATALOG (PDF)</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
