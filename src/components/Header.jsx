import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Anchor, 
  Wind, 
  Truck,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export default function Header({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Contact & Announcement Bar */}
      <div className="bg-slate-950 border-b border-slate-850 text-slate-400 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>EPC Tower, Suite 500, Industrial Zone</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+1 (800) 555-AMIGO</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>info@amigoconnect.com</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/20">
              <ShieldAlert className="w-3 h-3 animate-pulse" />
              <span className="font-medium">24/7 Heavy Equipment Dispatch Line Active</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-sky-300 font-semibold">ISO 9001:2015 & ISO 45001</span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled ? 'glass-nav py-2.5 border-b border-slate-800/80 shadow-xl' : 'bg-slate-950/90 backdrop-blur-md py-3.5 border-b border-slate-800/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with official image asset */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center space-x-3 group">
            <div className="p-1 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-red-500/50 transition-colors shadow-lg">
              <img
                src="/images/logo.png"
                alt="Amigo Connect Official Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-heading">AMIGO</span>
                <span className="text-xl sm:text-2xl font-black tracking-wider text-red-500 font-heading">CONNECT</span>
              </div>
              <span className="text-[10px] tracking-widest text-sky-400 uppercase font-semibold block -mt-1">
                Infrastructure & Heavy EPC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/') ? 'text-red-400 bg-red-500/10 border border-red-500/20' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/about') ? 'text-red-400 bg-red-500/10 border border-red-500/20' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center space-x-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  isActive('/services') ? 'text-red-400 bg-red-500/10 border border-red-500/20' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180 text-sky-400' : ''}`} />
              </Link>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 animate-fadeIn">
                  <div className="glass-panel rounded-xl shadow-2xl p-2 border border-sky-500/20 bg-slate-950/95">
                    <Link
                      to="/services#bridge"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-850 transition-colors group"
                    >
                      <div className="p-2 bg-red-500/10 text-red-500 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Anchor className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-sky-300">Bridge & Civil Construction</div>
                        <div className="text-xs text-slate-400">Suspension bridges, viaducts & river spans</div>
                      </div>
                    </Link>

                    <Link
                      to="/services#windmill"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-850 transition-colors group"
                    >
                      <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                        <Wind className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-sky-300">Windmill & Steel Fabrication</div>
                        <div className="text-xs text-slate-400">Turbine towers, rotor hubs & tubular steel</div>
                      </div>
                    </Link>

                    <Link
                      to="/services#fleet"
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-850 transition-colors group"
                    >
                      <div className="p-2 bg-red-500/10 text-red-500 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-sky-300">Heavy Equipment Rental</div>
                        <div className="text-xs text-slate-400">50T-800T cranes, excavators & haulers</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/projects') ? 'text-red-400 bg-red-500/10 border border-red-500/20' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Projects
            </Link>

            <Link
              to="/resources"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/resources') ? 'text-red-400 bg-red-500/10 border border-red-500/20' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Fleet / Resources
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/contact') ? 'text-red-400 bg-red-500/10 border border-red-500/20' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Action CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => onOpenModal('quote')}
              className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold text-sm rounded-xl shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 border border-red-400/30"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-slate-300 hover:text-white bg-slate-900 rounded-xl border border-slate-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/') ? 'bg-red-500/20 text-red-400' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/about') ? 'bg-red-500/20 text-red-400' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              About Us
            </Link>

            <div className="space-y-1 pl-2 border-l-2 border-slate-800 my-1">
              <div className="px-3 py-1 text-xs font-bold text-sky-400 uppercase tracking-wider">Services</div>
              <Link
                to="/services#bridge"
                onClick={closeMobileMenu}
                className="block px-4 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-900"
              >
                Bridge & Civil Construction
              </Link>
              <Link
                to="/services#windmill"
                onClick={closeMobileMenu}
                className="block px-4 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-900"
              >
                Windmill & Steel Fabrication
              </Link>
              <Link
                to="/services#fleet"
                onClick={closeMobileMenu}
                className="block px-4 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-900"
              >
                Heavy Equipment Rental
              </Link>
            </div>

            <Link
              to="/projects"
              onClick={closeMobileMenu}
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/projects') ? 'bg-red-500/20 text-red-400' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              Projects
            </Link>

            <Link
              to="/resources"
              onClick={closeMobileMenu}
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/resources') ? 'bg-red-500/20 text-red-400' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              Fleet / Resources
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                isActive('/contact') ? 'bg-red-500/20 text-red-400' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              Contact Us
            </Link>

            <div className="pt-4 space-y-2">
              <button
                onClick={() => { closeMobileMenu(); onOpenModal('quote'); }}
                className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-center shadow-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={() => { closeMobileMenu(); onOpenModal('meeting'); }}
                className="w-full py-3 bg-slate-900 text-sky-300 font-bold rounded-xl text-center border border-sky-500/30"
              >
                Schedule a Meeting
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
