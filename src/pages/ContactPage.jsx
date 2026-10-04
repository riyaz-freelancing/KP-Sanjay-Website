import React, { useState } from 'react';
import { Mail, Smartphone, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { useData } from '../context/DataContext';

export const ContactPage = () => {
  const { addInquiry } = useData();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      addInquiry({
        name: fullName || 'Anonymous Exporter',
        email: formData.email,
        phone: formData.phone,
        message: formData.message || 'Inquiry submitted from Contact Page',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });

      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER SECTION MATCHING USER SCREENSHOT */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-extrabold text-amber-500 uppercase tracking-widest block">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06102a] tracking-tight">
            Let's Start Your Global Journey
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Have questions? We're here to help. Reach out and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* MAIN CONTACT CONTAINER (LEFT INFO CARD & RIGHT FORM CARD) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CARD: CONTACT INFORMATION (Matching light cream background from screenshot) */}
          <div className="lg:col-span-5 bg-[#fffdfa] border border-amber-200/70 rounded-3xl p-8 sm:p-10 shadow-sm space-y-8 text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#06102a] tracking-tight">
                Contact Information
              </h3>
            </div>

            <div className="space-y-7">
              
              {/* Email Us */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 block">
                    Email Us
                  </span>
                  <a 
                    href="mailto:info@kpsanjay.com" 
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                  >
                    info@kpsanjay.com
                  </a>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 text-amber-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 block">
                    Call Us
                  </span>
                  <div className="space-y-0.5">
                    <a 
                      href="tel:+919326121142" 
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                    >
                      +91 9326121142
                    </a>
                    <a 
                      href="tel:+919156062111" 
                      className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors block"
                    >
                      Alt Helpline: +91 91560 62111
                    </a>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 block">
                    Office
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-900">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>

            {/* Practical Mentorship Note */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 leading-relaxed font-normal">
              <span className="font-bold text-blue-900 block mb-1">APEDA Packing House Hub</span>
              Visit our packing house facility in Mumbai for sorting, grading & export documentation walkthroughs.
            </div>

          </div>

          {/* RIGHT CARD: FORM SECTION (Matching white card design from screenshot) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xl text-left">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Inquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to KP Sanjay. Our senior export counselor will contact you at <span className="font-bold text-slate-900">{formData.phone || formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name Fields */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Enter Your First Name"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Enter Your Last Name"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone / Mobile Field */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter Your Phone Number"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message Field (Optional) */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-slate-800">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write Message Here.."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
