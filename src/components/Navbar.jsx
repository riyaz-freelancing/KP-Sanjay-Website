import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { 
  Menu, 
  X, 
  ArrowRight,
  ChevronDown,
  Award,
  Sparkles
} from 'lucide-react';

export const Navbar = () => {
  const { setIsAdminModalOpen } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Track scroll position to update navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categoryLinks = [
    { name: 'All Products Catalog', path: '/products' },
    { name: 'Marine & Seafood', path: '/category/marine-seafood' },
    { name: 'Rice & Grains', path: '/category/rice-grains' },
    { name: 'Spices & Condiments', path: '/category/spices' },
    { name: 'Fruits & Vegetables', path: '/category/fruits-vegetables' },
    { name: 'Dry Fruits & Nuts', path: '/category/dry-fruits' },
    { name: 'Tea, Coffee & Jaggery', path: '/category/beverages-jaggery' },
    { name: 'Oilseeds & Oils', path: '/category/oilseeds-oils' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'glass-navbar-scrolled py-3' : 'glass-navbar py-4'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo Left */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-20 group-hover:opacity-75 blur transition duration-300" />
              <img 
                src="/images/logo-kp.png" 
                alt="KP Sanjay Logo" 
                className="relative h-10 sm:h-11 w-auto object-contain shrink-0 drop-shadow" 
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-black text-xl text-white tracking-tight whitespace-nowrap">KP SANJAY</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                  <Award className="w-3 h-3 text-amber-400" /> MENTOR
                </span>
              </div>
              <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase whitespace-nowrap">
                International Trade Specialist
              </p>
            </div>
          </Link>

          {/* Desktop Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <Link 
              to="/" 
              className={`transition-colors whitespace-nowrap ${isActive('/') ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`transition-colors whitespace-nowrap ${isActive('/about') ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              About KP Sanjay
            </Link>

            {/* Export Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link 
                to="/products" 
                className={`transition-colors whitespace-nowrap flex items-center gap-1.5 py-2 ${location.pathname.includes('/products') || location.pathname.includes('/category') ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                <span>Export Products</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
              </Link>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50 animate-fade-in">
                  <div className="bg-[#0b132b]/95 rounded-2xl shadow-2xl border border-white/10 p-2 space-y-1 backdrop-blur-xl text-left">
                    {categoryLinks.map((cat) => (
                      <Link
                        key={cat.path}
                        to={cat.path}
                        onClick={() => setProductsDropdownOpen(false)}
                        className={`block px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          isActive(cat.path) 
                            ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30' 
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/courses" 
              className={`transition-colors whitespace-nowrap ${isActive('/courses') ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              Courses
            </Link>

            <Link 
              to="/contact" 
              className={`transition-colors whitespace-nowrap ${isActive('/contact') ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/courses"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs tracking-wide shadow-glow-amber transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Enroll Mentorship</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030712]/98 border-b border-white/10 backdrop-blur-2xl animate-fade-in">
          <div className="px-6 pt-4 pb-8 space-y-3 text-left max-w-md mx-auto">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl font-bold text-sm ${isActive('/') ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-200 hover:bg-white/5'}`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl font-bold text-sm ${isActive('/about') ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-200 hover:bg-white/5'}`}
            >
              About KP Sanjay
            </Link>

            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl font-bold text-sm ${location.pathname.includes('/products') ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-200 hover:bg-white/5'}`}
            >
              Export Products Catalog
            </Link>

            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl font-bold text-sm ${isActive('/courses') ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-200 hover:bg-white/5'}`}
            >
              Mentorship Courses
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl font-bold text-sm ${isActive('/contact') ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-200 hover:bg-white/5'}`}
            >
              Contact Us
            </Link>

            <div className="pt-3">
              <Link
                to="/courses"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-center block text-sm shadow-glow-amber"
              >
                Enroll Mentorship Course
              </Link>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
