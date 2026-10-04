import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  BookOpen, 
  Calendar, 
  Download, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Flame, 
  Award,
  Maximize2,
  X,
  Sparkles,
  FileText,
  Eye,
  Globe2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  Building2,
  Landmark,
  Share2,
  Printer
} from 'lucide-react';

export const DailyGKSection = () => {
  const { 
    dailyAffairs, 
    activeAffairId, 
    setActiveAffairId, 
    quizScore, 
    setQuizScore,
    streak 
  } = useData();

  // View modes: 'sheet' | 'poster' | 'quiz'
  const [viewMode, setViewMode] = useState('sheet');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showModalPoster, setShowModalPoster] = useState(null);

  // Active Post
  const activePost = dailyAffairs.find(a => a.id === activeAffairId) || dailyAffairs[0];

  const handleOptionClick = (questionId, optionIdx, correctIdx) => {
    if (selectedAnswers[questionId] !== undefined) return;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));

    if (optionIdx === correctIdx) {
      setQuizScore(prev => prev + 10);
    }
  };

  return (
    <section id="daily-affairs" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-blue-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>KP SANJAY — Daily Current Affairs & Exam Syllabus Sheet</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Daily Current Affairs <span className="text-gradient">Digital Sheet & Quiz</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Authentic daily syllabus sheets, structured key points breakdown, and practice MCQs designed for UPSC, APPSC, TGPSC, Competitive Exams & Export Trade aspirants.
            </p>
          </div>

          {/* User Score & Streak Stats */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Flame className="w-5 h-5 fill-amber-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Learning Streak</p>
                <p className="text-sm font-extrabold text-amber-400">{streak} Days Active</p>
              </div>
            </div>

            <div className="px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Quiz Score</p>
                <p className="text-sm font-extrabold text-blue-400">{quizScore} Points</p>
              </div>
            </div>
          </div>
        </div>

        {/* Date Selector & Mode Switcher Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
          
          {/* Post Tabs (Date Picker Bar) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {dailyAffairs.map(post => {
              const isActive = post.id === activePost?.id;
              return (
                <button
                  key={post.id}
                  onClick={() => setActiveAffairId(post.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.displayDate}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setViewMode('sheet')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'sheet'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Syllabus Sheet View</span>
            </button>

            <button
              onClick={() => setViewMode('poster')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'poster'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Cover Poster View</span>
            </button>

            <button
              onClick={() => setViewMode('quiz')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'quiz'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>MCQ Quiz ({activePost?.mcqs?.length || 0})</span>
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* VIEW MODE 1: DIGITAL SYLLABUS SHEET (EXACT UI MATCHING USER'S IMAGE 1) */}
        {/* ========================================================================= */}
        {viewMode === 'sheet' && activePost && (
          <div className="space-y-6">
            
            {/* Sheet Actions Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-300">Live Official Daily Infographic Sheet</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Sheet</span>
                </button>
                <a 
                  href={activePost.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/30 text-xs font-bold text-amber-400 hover:bg-amber-500/30"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download High-Res PDF</span>
                </a>
              </div>
            </div>

            {/* WHITE / LIGHT PAPER SYLLABUS SHEET CONTAINER */}
            <div className="bg-slate-50 text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-slate-200 font-sans relative overflow-hidden select-text">
              
              {/* Paper Top Branding Header */}
              <div className="border-b-2 border-slate-900 pb-6 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                  
                  {/* Left Logo Badge */}
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-700 via-red-600 to-amber-500 p-1 shadow-md">
                      <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center text-slate-900 font-black">
                        <span className="text-lg leading-none tracking-tighter text-blue-900 font-extrabold">MSP</span>
                        <span className="text-[7px] text-red-600 font-bold uppercase">Syllabus</span>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight uppercase flex items-center gap-2">
                        <span>MY SYLLABUS PAPER</span>
                        <span className="text-amber-500 text-lg">⇒</span>
                      </h1>
                      <p className="text-xs font-bold text-blue-700 italic">Your Syllabus.... Our Responsibility</p>
                    </div>
                  </div>

                  {/* Center Title & Date Badge */}
                  <div className="flex flex-col items-center">
                    <div className="px-5 py-1.5 rounded-full bg-amber-300 border-2 border-slate-900 text-slate-950 font-extrabold text-sm sm:text-base uppercase tracking-wide shadow-sm">
                      CURRENT AFFAIRS
                    </div>
                    <div className="mt-2 text-sm font-black text-red-600">
                      {activePost.displayDate} ({activePost.dayName})
                    </div>
                  </div>

                  {/* Right Exams Badge */}
                  <div className="p-3 rounded-xl bg-purple-900 text-white border-2 border-purple-950 text-center shadow-md">
                    <div className="text-[11px] font-black tracking-wider text-amber-300 uppercase">UPSC | APPSC | TGPSC</div>
                    <div className="text-[9px] font-bold text-purple-200">SSC • BANKING • EXPORTS • RAILWAYS</div>
                  </div>

                </div>

                {/* Tagline Ribbon */}
                <div className="mt-4 flex items-center justify-between text-[11px] font-extrabold text-slate-700 uppercase tracking-widest border-t border-slate-300 pt-2 px-2">
                  <span className="text-red-700 font-bold">READ • REVISE • PRACTICE • SUCCEED</span>
                  <span className="text-blue-900">KP SANJAY OFFICIAL CURRENT AFFAIRS SHEET</span>
                </div>
              </div>

              {/* INFOGRAPHIC IMAGE BANNER DISPLAY (IF POSTED) */}
              {activePost.posterUrl && (
                <div className="mb-8 rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md relative group">
                  <img 
                    src={activePost.posterUrl} 
                    alt={activePost.title} 
                    className="w-full max-h-[550px] object-contain bg-slate-900 mx-auto cursor-pointer"
                    onClick={() => setShowModalPoster(activePost.posterUrl)}
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs shadow-lg flex items-center gap-2">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to View High-Res Infographic</span>
                    </span>
                  </div>
                </div>
              )}

              {/* NUMBERED TOPIC BREAKDOWN ITEMS (DYNAMIC FROM BACKEND REST API) */}
              <div className="space-y-6">
                {activePost.topics && activePost.topics.length > 0 ? (
                  activePost.topics.map((topic, idx) => {
                    const colors = [
                      { border: 'border-red-200', numBg: 'bg-red-600', text: 'text-red-700' },
                      { border: 'border-blue-200', numBg: 'bg-blue-700', text: 'text-blue-950' },
                      { border: 'border-pink-200', numBg: 'bg-pink-600', text: 'text-pink-700' },
                      { border: 'border-emerald-200', numBg: 'bg-emerald-600', text: 'text-emerald-800' },
                      { border: 'border-amber-200', numBg: 'bg-amber-500', text: 'text-amber-800' }
                    ];
                    const colorScheme = colors[idx % colors.length];

                    return (
                      <div key={topic.id || idx} className={`p-5 rounded-2xl bg-white border-2 ${colorScheme.border} shadow-sm relative space-y-3`}>
                        <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                          <span className={`w-8 h-8 rounded-full ${colorScheme.numBg} text-white font-black text-base flex items-center justify-center shrink-0 shadow-md`}>
                            {topic.number || idx + 1}
                          </span>
                          <h3 className={`text-lg sm:text-xl font-black ${colorScheme.text} tracking-tight`}>
                            {topic.title}
                          </h3>
                        </div>

                        <div className="space-y-1.5 font-medium text-xs sm:text-sm text-slate-900 leading-relaxed pt-1">
                          {topic.details && topic.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2">
                              <span className="text-amber-600 font-bold">•</span>
                              <span className="font-semibold text-slate-800">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-8 text-center text-slate-500 text-sm">
                    No topics posted for this date yet. Check back soon!
                  </div>
                )}
              </div>

              {/* Sheet Bottom Footer */}
              <div className="mt-10 pt-4 border-t-2 border-slate-900 flex items-center justify-between text-xs font-extrabold text-slate-800">
                <span>MY SYLLABUS PAPER — YOUR SYLLABUS, OUR RESPONSIBILITY</span>
                <span>LEARN TODAY • LEAD TOMORROW</span>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 2: VIBRANT COVER POSTER (EXACT MATCHING USER'S IMAGE 2) */}
        {/* ========================================================================= */}
        {viewMode === 'poster' && activePost && (
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* VIBRANT POSTER CONTAINER (IMAGE 2 STYLE) */}
            <div className="relative rounded-3xl bg-gradient-to-b from-blue-900 via-indigo-950 to-slate-950 p-6 sm:p-10 border-4 border-amber-500/60 shadow-2xl overflow-hidden space-y-8">
              
              {/* Top Banner Flags & Logo Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-blue-800/80 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5 shadow-lg">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400 font-black text-lg">
                      MSP
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white tracking-tight">MY SYLLABUS PAPER</h2>
                    <p className="text-xs text-amber-400 font-bold italic">Your Syllabus.... Our Responsibility</p>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg">
                  UPSC | APPSC | TGPSC | EXPORTS
                </div>
              </div>

              {/* Big Bold Headline Artwork */}
              <div className="text-center space-y-3 py-4">
                <div className="inline-block px-4 py-1 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-widest">
                  {activePost.category || 'BRICS 2026 STRONGER TOGETHER'}
                </div>
                
                <h1 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 tracking-tight leading-tight uppercase drop-shadow-lg">
                  TODAY'S CURRENT AFFAIRS
                </h1>

                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-emerald-600 border-2 border-emerald-400 text-white font-extrabold text-lg sm:text-xl shadow-xl">
                  <Calendar className="w-5 h-5" />
                  <span>{activePost.displayDate.toUpperCase()} • {activePost.dayName.toUpperCase()}</span>
                </div>

                {activePost.posterUrl && (
                  <div className="mt-4 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl">
                    <img 
                      src={activePost.posterUrl} 
                      alt={activePost.title} 
                      className="w-full max-h-[450px] object-cover"
                    />
                  </div>
                )}
              </div>

              {/* 6 Category Pills Grid (Image 2 style) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { name: "International Relations", color: "bg-blue-600", icon: Globe2 },
                  { name: "Agriculture & Environment", color: "bg-emerald-600", icon: Layers },
                  { name: "Science & Technology", color: "bg-rose-600", icon: Cpu },
                  { name: "Defence & Security", color: "bg-slate-700", icon: ShieldCheck },
                  { name: "Economy & Schemes", color: "bg-amber-600", icon: TrendingUp },
                  { name: "Appointments & Misc", color: "bg-purple-600", icon: Landmark }
                ].map((cat, idx) => {
                  const IconComp = cat.icon;
                  return (
                    <div key={idx} className={`${cat.color} p-3.5 rounded-2xl border border-white/20 flex flex-col items-center justify-center text-center space-y-1 shadow-md hover:scale-105 transition-transform`}>
                      <IconComp className="w-5 h-5 text-white" />
                      <span className="text-xs font-extrabold text-white leading-tight">{cat.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Poster Footer Ribbon */}
              <div className="pt-4 border-t border-blue-900 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-slate-300 gap-2">
                <span className="text-amber-400">Small Steps... Big Results...</span>
                <span>MY SYLLABUS PAPER — YOUR SYLLABUS, OUR RESPONSIBILITY</span>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 3: INTERACTIVE PRACTICE MCQ QUIZ ENGINE */}
        {/* ========================================================================= */}
        {viewMode === 'quiz' && activePost && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Daily Quiz Challenge</h3>
                    <p className="text-xs text-slate-400">Practice questions based on {activePost.displayDate}</p>
                  </div>
                </div>

                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
                  {activePost.mcqs?.length || 0} Questions
                </span>
              </div>

              {/* MCQ List */}
              <div className="space-y-6">
                {activePost.mcqs?.map((mcq, qIdx) => {
                  const userAnswer = selectedAnswers[mcq.id];
                  const isAnswered = userAnswer !== undefined;

                  return (
                    <div key={mcq.id || qIdx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          Q{qIdx + 1}
                        </span>
                        <p className="text-sm font-semibold text-white leading-relaxed">
                          {mcq.question}
                        </p>
                      </div>

                      {/* Options */}
                      <div className="space-y-2">
                        {mcq.options?.map((option, optIdx) => {
                          let btnStyle = "bg-slate-900 border-slate-800 text-slate-300 hover:border-amber-500/50";

                          if (isAnswered) {
                            if (optIdx === mcq.correctIndex) {
                              btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                            } else if (optIdx === userAnswer) {
                              btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300 font-bold";
                            } else {
                              btnStyle = "bg-slate-900/50 border-slate-900 text-slate-500 opacity-60";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={isAnswered}
                              onClick={() => handleOptionClick(mcq.id, optIdx, mcq.correctIndex)}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="font-mono text-[11px] font-bold text-amber-400 uppercase w-4">
                                  {String.fromCharCode(65 + optIdx)}.
                                </span>
                                <span>{option}</span>
                              </div>

                              {isAnswered && optIdx === mcq.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              )}
                              {isAnswered && optIdx === userAnswer && optIdx !== mcq.correctIndex && (
                                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {isAnswered && (
                        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Explanation:</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {mcq.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
