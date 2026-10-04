import React from 'react';
import { FileCheck, BookOpen, AlertCircle, Scale, Mail, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage = () => {
  return (
    <div className="py-12 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4 text-indigo-600" />
            <span>TERMS OF SERVICE</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#06102a] tracking-tight">
            Terms & Conditions
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Last Updated: October 2026 • KP Sanjay Export Promotion Hub
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-left space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a] flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-indigo-600" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing <span className="font-semibold text-slate-900">KPSanjay.com</span>, enrolling in any export training program, downloading proposal materials, or interacting with our trade services, you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              2. Intellectual Property Rights
            </h2>
            <p>
              All trade specifications, export product catalogs, images, documentation guides, and proprietary trade materials are the exclusive intellectual property of KP Sanjay. Unlawful reproduction or unauthorized commercial distribution is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-indigo-600" />
              3. Practical Training & Export Business Guidance
            </h2>
            <p>
              KP Sanjay provides real-world practical education, trade contacts, packing house infrastructure support, and operational mentorship to help you start and expand your export business. However, actual export profitability and buyer contracts depend on market conditions, product quality, negotiation, and individual execution. KP Sanjay does not guarantee financial returns or fixed profit margins.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a]">
              4. Code of Conduct & Compliance
            </h2>
            <p>
              Enrolled students and exporters must strictly adhere to Indian export laws (DGFT guidelines, APEDA/FSSAI norms, customs regulations, and foreign trade policies). Fraudulent activities, prohibited cargo declarations, or intentional misrepresentation in international trade will lead to immediate expulsion from mentorship without refund.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a]">
              5. Governing Law & Contact Details
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any legal disputes arising shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>
            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-2 text-slate-800 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>Legal Team Email: <a href="mailto:info@kpsanjay.com" className="text-blue-600 underline font-bold">info@kpsanjay.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-indigo-600" />
                <span>Helpline: +91 91560 62111</span>
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
