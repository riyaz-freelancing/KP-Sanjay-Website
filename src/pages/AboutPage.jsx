import React from 'react';
import { CheckCircle2, Award, Users, Briefcase, Globe, Heart, Sparkles, ShieldCheck, ArrowRight, Package, FileCheck, Truck, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className="py-12 bg-slate-50 text-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* TOP BANNER HERO CARD */}
        <div className="relative rounded-3xl bg-blue-50/80 border border-blue-100 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs sm:text-sm font-extrabold text-amber-500 uppercase tracking-widest block">
                ABOUT KP SANJAY
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06102a] tracking-tight leading-tight">
                Building India's Next Generation of Global Traders
              </h1>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1 max-w-2xl">
                Founded with the mission of making practical export import education accessible to everyone, KP Sanjay has helped aspiring entrepreneurs build successful international businesses through real-world training and expert guidance.
              </p>
            </div>

            {/* Right Graphic Banner Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img 
                src="/images/about-us-kp.png" 
                alt="About KP Sanjay Export Graphic" 
                className="w-full max-w-md h-auto object-contain drop-shadow-lg"
              />
            </div>

          </div>
        </div>

        {/* FOUNDER PROFILE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Portrait Photo with Orange Card Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative p-3 rounded-2xl border-2 border-amber-400 bg-white shadow-xl max-w-sm w-full">
              <img 
                src="/images/kp1.jpeg" 
                alt="KP Sanjay - Founder" 
                className="w-full h-80 sm:h-96 object-cover object-top rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06102a] tracking-tight">
                KP SANJAY
              </h2>
              <p className="text-sm sm:text-base font-extrabold text-amber-500 uppercase tracking-wider mt-1">
                Founder of KPSanjay.com
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pt-1">
              <p>
                KP Sanjay is a seasoned export professional with over a decade of hands-on experience in the global trade industry. With a strong foundation in international business, he has built a solid reputation as a reliable exporter and consultant specializing in fruits, vegetables, spices, and agricultural machinery.
              </p>
              <p>
                Over the years, he has successfully expanded his export operations to more than 12 countries, serving clients across the Middle East, Asia, and other international markets. His in-depth understanding of global trade practices, quality standards, and logistics has positioned him as a trusted name in the export ecosystem. What truly sets KP Sanjay apart is his commitment to providing end-to-end support for exporters.
              </p>
            </div>
          </div>

        </div>

        {/* FULL WIDTH EXTENDED FOUNDER DESCRIPTION */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm text-left space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          <p>
            In addition to managing his own export business, he actively helps new and existing exporters scale their operations from product sourcing to final shipment. He delivers complete export solutions under one roof.
          </p>
          <p>
            He also owns and operates a fully functional packing house in Mumbai, where he provides complete export solutions including product sourcing, quality inspection, packaging, export documentation, customs coordination, logistics management, and shipment planning.
          </p>
        </div>

        {/* MIDDLE FULL-WIDTH CARGO PORT BANNER IMAGE */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-64 sm:h-80 lg:h-96 group">
          <img 
            src="/images/warehouse_exporter.jpg" 
            alt="Global Container Port and Cargo Logistics" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-transparent to-blue-950/70 flex items-center justify-center">
            <div className="text-center px-4">
              <span className="text-xs sm:text-sm font-extrabold text-amber-400 uppercase tracking-widest block mb-2">
                END-TO-END GLOBAL LOGISTICS
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                Connecting Indian Producers to Worldwide Buyers
              </h3>
            </div>
          </div>
        </div>

        {/* 4 STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-2xl bg-[#061234] border border-blue-900/50 shadow-xl flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full border border-slate-200/90 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-black text-white tracking-tight mb-1">50+</div>
            <div className="text-xs font-extrabold text-orange-400 uppercase tracking-widest">EXPORT DESTINATIONS</div>
          </div>

          <div className="p-8 rounded-2xl bg-[#3b1807] border border-amber-900/60 shadow-xl flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full border border-slate-200/90 flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-black text-white tracking-tight mb-1">12+y</div>
            <div className="text-xs font-extrabold text-amber-500 uppercase tracking-widest">INDUSTRY EXPERIENCE</div>
          </div>

          <div className="p-8 rounded-2xl bg-[#061234] border border-blue-900/50 shadow-xl flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full border border-slate-200/90 flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-black text-white tracking-tight mb-1">100%</div>
            <div className="text-xs font-extrabold text-orange-400 uppercase tracking-widest">AUTHENTIC PRODUCTS</div>
          </div>

          <div className="p-8 rounded-2xl bg-[#061234] border border-blue-900/50 shadow-xl flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full border border-slate-200/90 flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
            <div className="text-3xl font-black text-white tracking-tight mb-1">98%</div>
            <div className="text-xs font-extrabold text-orange-400 uppercase tracking-widest">BUYER SATISFACTION</div>
          </div>
        </div>

        {/* WHAT WE OFFER SECTION */}
        <div className="space-y-8 text-center pt-6">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-extrabold text-amber-500 uppercase tracking-widest">
              WHAT WE OFFER
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#06102a] tracking-tight">
              Complete Export Solutions & Premium Product Supply
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              From direct farm sourcing to APEDA packing house operations, quality inspection, documentation, and worldwide sea freight.
            </p>
          </div>

          {/* 4 White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quality Farm Sourcing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct procurement of authentic Indian Basmati rice, spices, fruits, vegetables, and marine seafood from certified growers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">APEDA Packing House</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                APEDA registered packing house facility in Mumbai for grading, temperature-controlled cold storage, and export packaging.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">EXIM Documentation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Error-free documentation assistance: Bill of Lading, Certificate of Origin, Phytosanitary Certificates, and LC verification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Logistics & Freight</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless sea and air freight forwarding, customs clearance coordination, and port handling with trusted global shipping lines.
              </p>
            </div>
          </div>
        </div>

        {/* MAHARASHTRA BUSINESS ICON AWARD */}
        <div className="rounded-3xl bg-white text-slate-900 p-8 sm:p-12 shadow-xl relative overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-xs sm:text-sm font-extrabold text-amber-500 uppercase tracking-widest block">
                AWARDS & RECOGNITION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071330] tracking-tight">
                Maharashtra Business Icon Award
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                KP Sanjay has received recognition for his contribution to the export and agri-business sector, including the prestigious Maharashtra Business Icon Award.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                This award reflects his dedication, leadership, and impact in international trade and agricultural exports.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img 
                  src="/images/awards_recognition_kp.jpeg" 
                  alt="Maharashtra Business Icon Award" 
                  className="w-full h-auto max-h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="rounded-3xl bg-[#06102a] text-white p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Looking for Premium Export Products from India?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Explore our catalog of Basmati rice, fresh spices, marine seafood, fruits, and processed food products ready for global shipment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              to="/products" 
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-extrabold text-sm hover:bg-blue-500 transition-colors shadow-lg"
            >
              Browse Product Catalog
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-sm hover:bg-amber-400 transition-colors shadow-lg"
            >
              Request Bulk Quote
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
