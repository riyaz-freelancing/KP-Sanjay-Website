import React from 'react';
import { ShoppingCart, Sparkles, BookOpen, Download, CheckCircle2 } from 'lucide-react';

export const CoursesSection = () => {
  const coursesList = [
    {
      id: "export-kranti",
      title: "Export Kranti – Mentorship",
      tag: "Coming Soon",
      banner: "/images/IMG_2194.png",
      instructor: "KP Sanjay",
      instructorAvatar: "/images/kp1.jpeg",
      originalPrice: "₹9,999",
      price: "₹6,999"
    },
    {
      id: "ecom-export",
      title: "E-com Export Mastery",
      tag: "Coming Soon",
      banner: "/images/IMG_2672.png",
      instructor: "KP Sanjay",
      instructorAvatar: "/images/kp1.jpeg",
      originalPrice: "₹8,999",
      price: "₹4,999"
    },
    {
      id: "exim-pathshala",
      title: "Exim Pathshala (Complete EXIM)",
      tag: "Enrolling Now",
      banner: "/images/IMG_2512.png",
      instructor: "KP Sanjay",
      instructorAvatar: "/images/kp1.jpeg",
      originalPrice: "₹20,000",
      price: "₹16,999"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-extrabold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>EXIM TRAINING PROGRAMS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06102a] tracking-tight leading-tight">
            Invest in Your <span className="text-gradient-amber">Global Career</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto">
            Practical hands-on export training designed for entrepreneurs, manufacturers, and ambitious individuals.
          </p>
        </div>

        {/* 3 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesList.map((course) => (
            <div 
              key={course.id}
              className="rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Banner Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img 
                    src={course.banner} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[10px] font-black px-3 py-1 rounded-full bg-slate-950/90 text-amber-400 border border-amber-500/40 uppercase tracking-wider backdrop-blur-md">
                      {course.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left space-y-4">
                  <h3 className="text-xl font-bold text-[#06102a] tracking-tight group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-2.5 pt-1">
                    <img 
                      src={course.instructorAvatar} 
                      alt={course.instructor} 
                      className="w-7 h-7 rounded-full object-cover border border-amber-500/40"
                    />
                    <span className="text-xs font-medium text-slate-500">
                      Lead Mentor: <strong className="text-slate-800 font-bold">{course.instructor}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-slate-400 line-through font-semibold">
                    {course.originalPrice}
                  </span>
                  <span className="text-xl font-black text-slate-950">
                    {course.price}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-slate-950 font-bold text-xs hover:scale-105 transition-all shadow-md flex items-center gap-1.5"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>ENROLL NOW</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* DOWNLOAD BROCHURE BANNER */}
        <div className="pt-4">
          <div className="rounded-3xl bg-[#06102a] text-white border border-slate-800 p-8 sm:p-12 shadow-2xl text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold text-white max-w-2xl mx-auto leading-relaxed tracking-tight">
              Download the official proposal brochure to explore complete curriculum details, mentorship breakdown, and student success outcomes.
            </h3>

            <div>
              <a
                href="/kp-sanjay-Proposal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:to-amber-500 text-slate-950 font-black text-base tracking-wide shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                <span>Download Official Brochure (PDF)</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
