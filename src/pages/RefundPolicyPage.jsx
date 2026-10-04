import React from 'react';
import { RefreshCw, CheckCircle2, Clock, Mail, PhoneCall, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RefundPolicyPage = () => {
  return (
    <div className="py-12 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <RefreshCw className="w-4 h-4 text-amber-600" />
            <span>TRANSPARENT GUARANTEE</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#06102a] tracking-tight">
            Refund & Cancellation Policy
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Last Updated: October 2026 • KP Sanjay Export Mentorship & Seminar Programs
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-left space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              1. Seminar & Workshop Registrations
            </h2>
            <p>
              We strive to deliver exceptional value in our 1-Day Export Seminars and Live Masterclasses. If you are unable to attend a registered session:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><span className="font-semibold text-slate-900">Cancellation 48+ Hours Prior:</span> Full 100% refund or free transfer to the next available batch.</li>
              <li><span className="font-semibold text-slate-900">Cancellation within 48 Hours:</span> Registration fees can be transferred to an upcoming batch without extra charges.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a] flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-500" />
              2. EXIM Pathshala & Export Kranti Mentorship
            </h2>
            <p>
              Our comprehensive 6-week and 12-week export mentorship programs include intensive practical training, buyer database access, and packing house facility walkthroughs.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>If you request a cancellation before the 2nd live mentorship session, a full refund minus administrative processing fees (5%) will be granted.</li>
              <li>After attending more than 2 full sessions or accessing proprietary buyer databases and custom LC documentation toolkits, refunds will be evaluated on a case-by-case basis.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a]">
              3. Packing House & Custom Logistics Services
            </h2>
            <p>
              Custom operational services provided at our Mumbai packing house (e.g., custom sorting, grading, cargo palletization, customs clearance coordination) are customized for specific shipments. Once physical labor, inspection, or packaging material is deployed for a shipment, associated operational fees are non-refundable.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#06102a]">
              4. How to Request a Refund
            </h2>
            <p>
              To initiate a refund request, please email our finance team with your registration details and payment receipt:
            </p>
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2 text-slate-800 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600" />
                <span>Refund Email: <a href="mailto:info@kpsanjay.com" className="text-blue-600 underline font-bold">info@kpsanjay.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>Helpline Support: +91 91560 62111</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              Approved refunds are credited back to the original payment method (UPI, Net Banking, or Credit/Debit Card) within 5 to 7 business days.
            </p>
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
