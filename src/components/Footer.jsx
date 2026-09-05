import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Globe, 
  Share2, 
  Video, 
  MessageSquare, 
  HardHat, 
  ShieldCheck, 
  FileText
} from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-850 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-850">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-1 bg-slate-900 rounded-xl border border-slate-800 shadow-md">
                <img
                  src="/images/logo.png"
                  alt="Amigo Connect Official Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="text-xl font-black text-white font-heading">AMIGO</span>
                  <span className="text-xl font-black text-red-500 font-heading">CONNECT</span>
                </div>
                <span className="text-[10px] tracking-widest text-sky-400 uppercase font-semibold block">
                  Infrastructure & Heavy EPC
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              The leading EPC contractor in heavy infrastructure & rentals. Delivering monumental bridge engineering, high-precision wind turbine tower fabrication, and immediate heavy machinery fleet deployment.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 hover:bg-red-600 hover:text-white text-slate-300 rounded-xl transition-all border border-slate-800" title="LinkedIn">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 hover:bg-red-600 hover:text-white text-slate-300 rounded-xl transition-all border border-slate-800" title="Twitter / X">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 hover:bg-red-600 hover:text-white text-slate-300 rounded-xl transition-all border border-slate-800" title="YouTube">
                <Video className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 hover:bg-red-600 hover:text-white text-slate-300 rounded-xl transition-all border border-slate-800" title="Facebook">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading border-l-2 border-red-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-sky-400 transition-colors">Company Profile</Link></li>
              <li><Link to="/about#safety" className="hover:text-sky-400 transition-colors">Safety & Quality</Link></li>
              <li><Link to="/projects" className="hover:text-sky-400 transition-colors">Featured Projects</Link></li>
              <li><Link to="/resources" className="hover:text-sky-400 transition-colors">Machinery Fleet</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Schedule a Meeting</Link></li>
              <li><Link to="/contact#vendor" className="hover:text-sky-400 transition-colors">Vendor Registration</Link></li>
            </ul>
          </div>

          {/* EPC Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading border-l-2 border-red-500 pl-2.5">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services#bridge" className="hover:text-sky-400 transition-colors">Bridge & Civil Construction</Link></li>
              <li><Link to="/services#windmill" className="hover:text-sky-400 transition-colors">Windmill Tower Fabrication</Link></li>
              <li><Link to="/services#steel" className="hover:text-sky-400 transition-colors">Heavy Steel Welding</Link></li>
              <li><Link to="/services#fleet" className="hover:text-sky-400 transition-colors">Crawler Crane Rental</Link></li>
              <li><Link to="/services#fleet" className="hover:text-sky-400 transition-colors">Hydraulic Excavators</Link></li>
              <li><Link to="/resources#brochures" className="hover:text-sky-400 transition-colors">Technical Brochures</Link></li>
            </ul>
          </div>

          {/* Contact Details & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading border-l-2 border-red-500 pl-2.5">
              Contact & Support
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span className="text-slate-300">3801, Ashoka Enclave CGHS Ltd., SECTOR 11, Dwarka, New Delhi-110078, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+919971299631" className="text-slate-300 hover:text-white transition-colors">+91 99712 99631</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@amigoconnect.com" className="text-slate-300 hover:text-white transition-colors">info@amigoconnect.com</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs text-slate-300 mb-2 font-semibold">Subscribe for Infrastructure News</p>
              {subscribed ? (
                <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-lg text-xs flex items-center space-x-2 border border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-l-lg text-xs text-white focus:outline-none focus:border-sky-400"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-red-600 hover:bg-red-500 text-white rounded-r-lg font-bold transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
            <span>© 2026 <strong className="text-white">Amigo Connect</strong>. All Rights Reserved. ISO 9001:2015 & ISO 45001:2018 Certified EPC Contractor.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-slate-400">
              Powered by <strong className="text-sky-400 font-semibold">Zerolimit Automation</strong>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">HSE Safety Charter</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Site Map</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
