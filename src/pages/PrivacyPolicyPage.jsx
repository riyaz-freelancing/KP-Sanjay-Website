import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, Mail, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage = () => {
  return (
    <div className="py-12 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#06102a] tracking-tight">
            Privacy Policy
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Last Updated: October 2026 • KP Sanjay Export Mentorship & Trade Services
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-left space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a] flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-600" />
              1. Information We Collect
            </h2>
            <p>
              When you visit <span className="font-semibold text-slate-900">KPSanjay.com</span>, register for our export seminars, download our curriculum brochure, or contact us for mentorship, we may collect the following personal information:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Full Name and Contact Details (Email ID, Phone Number, WhatsApp Number).</li>
              <li>City, State, and Business/Import-Export License details (IEC number if applicable).</li>
              <li>Inquiry form responses, seminar registration preferences, and payment transaction IDs.</li>
              <li>Standard web analytics data (IP address, browser type, and page usage metrics).</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a] flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-600" />
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected information strictly for legitimate trade education and mentorship purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>To send requested EXIM proposal brochures, curriculum schedules, and seminar links.</li>
              <li>To provide 1-on-1 export consultation and packing house support services.</li>
              <li>To verify course enrollments and issue official KP Sanjay completion certificates.</li>
              <li>To communicate important updates regarding export regulations, customs policies, and daily current affairs.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a] flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              3. Data Protection & Security
            </h2>
            <p>
              We prioritize data privacy and employ robust technical and organizational security measures to protect your personal information from unauthorized access, alteration, or disclosure. We do not sell, rent, or trade your personal information to third-party marketing companies.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a]">
              4. Cookies & Web Analytics
            </h2>
            <p>
              Our website uses cookies to enhance user experience, remember session preferences, and analyze website traffic. You can adjust your browser settings to decline cookies if you prefer.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a]">
              5. Contact Us Regarding Your Privacy
            </h2>
            <p>
              If you have any questions, concerns, or requests to update or delete your personal data, please contact our support team:
            </p>
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2 text-slate-800 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Email: <a href="mailto:info@kpsanjay.com" className="text-blue-600 underline font-bold">info@kpsanjay.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Phone / Helpline: +91 91560 62111</span>
              </div>
            </div>
          </section>

        </div>

        {/* Navigation Back Link */}
        <div className="text-center pt-2">
          <Link to="/" className="text-sm font-bold text-blue-600 hover:underline">
            ← Return to Main Page
          </Link>
        </div>

      </div>
    </div>
  );
};
