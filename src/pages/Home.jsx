import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Building2, 
  Anchor, 
  Wind, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Award, 
  Users, 
  Layers, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  HardHat
} from 'lucide-react';

export default function Home({ onOpenModal }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, machines: 0, steel: 0, engineers: 0 });

  const [projectTab, setProjectTab] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-play video on mount and handle state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log("Autoplay deferred:", err);
            setIsPlaying(false);
          });
      }
    }
  }, [isMuted]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const counterSection = document.getElementById('counters-section');
      if (counterSection && !countersStarted) {
        const rect = counterSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          setCountersStarted(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [countersStarted]);

  useEffect(() => {
    if (countersStarted) {
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounts({
          projects: Math.min(50, Math.floor(50 * progress)),
          machines: Math.min(120, Math.floor(120 * progress)),
          steel: Math.min(10000, Math.floor(10000 * progress)),
          engineers: Math.min(500, Math.floor(500 * progress)),
        });

        if (step >= steps) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [countersStarted]);

  const projects = [
    {
      id: 1,
      title: "Grand Estuary Suspension Bridge",
      category: "bridge",
      categoryName: "Bridge Construction",
      location: "East Coast Highway Corridor",
      value: "$145 Million",
      span: "1.4 km Total Span",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
      description: "Dual-tower cable-stayed bridge built over deep river channel using 600T crawler cranes.",
    },
    {
      id: 2,
      title: "Offshore Wind Turbine Hub Alpha",
      category: "windmill",
      categoryName: "Windmill Fabrication",
      location: "Coastal Renewable Park",
      value: "$88 Million",
      span: "45 Windmill Towers",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
      description: "High-precision tubular steel tower manufacturing and heavy rotor hub assembly.",
    },
    {
      id: 3,
      title: "Metropolitan Rail Viaduct Overpass",
      category: "bridge",
      categoryName: "Bridge Construction",
      location: "Central Transit Sector",
      value: "$210 Million",
      span: "8.2 km Elevated Line",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      description: "Heavy concrete segment casting and girder erection over congested urban arterial roads.",
    },
    {
      id: 4,
      title: "Turbine Tower Steel Rolling Plant",
      category: "windmill",
      categoryName: "Windmill Fabrication",
      location: "Industrial Heavy Fabrication Yard",
      value: "$64 Million",
      span: "12,000 Tons Fabricated",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      description: "Submerged arc welding and non-destructive testing for ultra-heavy wind turbine sections.",
    },
    {
      id: 5,
      title: "High-Capacity Bridge Piling Project",
      category: "bridge",
      categoryName: "Bridge Construction",
      location: "Northern Delta Basin",
      value: "$52 Million",
      span: "120 Deep Foundation Piles",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      description: "Mobilized 8 hydraulic pile rigs and 300T crawler cranes for marine deep foundation works.",
    },
    {
      id: 6,
      title: "Renewable Energy Substation Steel Structure",
      category: "windmill",
      categoryName: "Windmill Fabrication",
      location: "Plateau Wind Farm",
      value: "$35 Million",
      span: "300MW Substation Frame",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      description: "Custom lattice structural steel fabrication and hot-dip galvanizing for wind farm switchyards.",
    },
  ];

  const filteredProjects = projectTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === projectTab);

  const testimonials = [
    {
      quote: "Amigo Connect provided both the heavy machinery fleet and the civil engineering expertise required to complete our river viaduct project two months ahead of schedule. Their professionalism and zero-harm safety record are unmatched.",
      author: "Marcus Vance",
      title: "Director of Infrastructure",
      company: "Global Transit Infra Corp",
    },
    {
      quote: "When we needed 120T tubular steel turbine towers delivered with sub-millimeter tolerances for our coastal wind farm, Amigo Connect's fabrication facility delivered flawless quality with full X-ray weld certification.",
      author: "Elena Rostova",
      title: "VP of Renewable Energy",
      company: "AeroWind Dynamics Ltd",
    },
    {
      quote: "Mobilizing 800T crawler cranes on short notice is usually a logistical nightmare. Amigo Connect had equipment on site in 48 hours, fully inspected with certified operators. They are our go-to partner for mega-projects.",
      author: "David Sterling",
      title: "Chief Project Engineer",
      company: "Apex EPC Solutions",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      
      {/* ================= HERO SECTION WITH HIGH VISIBILITY VIDEO BACKGROUND ================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-105 filter brightness-[0.85] contrast-[1.05]"
          >
            <source src="/videos/IntroductionVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Balanced gradient overlay for vivid video playback & WCAG AAA contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20"></div>
          <div className="absolute inset-0 bg-slate-950/25"></div>
        </div>

        {/* Video Player Controls */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-3 bg-slate-950/85 backdrop-blur-md p-2 rounded-full border border-sky-500/30 shadow-2xl">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="p-2.5 text-slate-200 hover:text-red-400 hover:bg-slate-900 rounded-full transition-colors"
            title={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <div className="w-px h-4 bg-slate-800"></div>
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="p-2.5 text-slate-200 hover:text-sky-400 hover:bg-slate-900 rounded-full transition-colors"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-8">
          <div className="max-w-3xl space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-red-500/20 border border-red-500/40 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                Premier Turnkey EPC Contractor
              </span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-tight sm:leading-none tracking-tight">
              Building Infrastructure. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-sky-400">
                Powering Tomorrow.
              </span> <br />
              Equipping Your Success.
            </h1>

            {/* Sub-headline H2 */}
            <h2 className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed drop-shadow-md">
              Amigo Connect is your premier EPC partner specializing in monumental bridge construction, precision windmill fabrication, and heavy machinery rentals.
            </h2>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/services"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-black text-base rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3 group border border-red-400/30"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/resources"
                className="px-8 py-4 bg-slate-950/90 hover:bg-slate-900 text-sky-300 font-bold text-base rounded-xl border border-sky-500/40 backdrop-blur-md transition-all flex items-center justify-center space-x-2"
              >
                <Truck className="w-5 h-5 text-sky-400" />
                <span>View Our Machinery Fleet</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-slate-200 text-xs">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                <span>ISO 9001 & ISO 45001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-500 shrink-0" />
                <span>24/7 Equipment Mobilization</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-sky-400 shrink-0" />
                <span>100% On-Time Completion Rate</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. "WHO WE ARE" SECTION ================= */}
      <section className="py-24 bg-slate-900 border-t border-slate-850 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Visual */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-sky-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Amigo Connect EPC Engineers on Bridge Site inspecting schematics"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                
                {/* Floating Glassmorphism Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel rounded-xl border border-sky-500/20 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-red-600 text-white rounded-lg">
                      <HardHat className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base font-heading">Decades of EPC Expertise</div>
                      <div className="text-sky-300 text-xs">Bridge Spans • Windmills • Plant Rentals</div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 bg-sky-500/20 text-sky-400 text-xs font-bold rounded-md border border-sky-500/30">
                    ISO Certified
                  </span>
                </div>
              </div>
            </div>

            {/* Right Text Block */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-red-500" />
                <span>Who We Are</span>
              </div>

              {/* Tagline H3 */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                Engineering Excellence, Delivered on Time.
              </h3>

              {/* Body Copy */}
              <p className="text-slate-300 text-base leading-relaxed">
                At <strong className="text-white">Amigo Connect</strong>, we don’t just build structures; we build the backbone of modern industry and infrastructure. As a leading end-to-end EPC (Engineering, Procurement, and Construction) company, we bring decades of technical expertise, uncompromising safety standards, and cutting-edge technology to every site.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Whether spanning vast rivers, fabricating the future of renewable energy, or supplying the heavy muscle for your next mega-project, Amigo Connect is the partner you can trust for zero-downtime execution and precision engineering.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-slate-200 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Turnkey EPC Execution</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-200 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>In-House Equipment Fleet</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-200 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Precision Steel Fabrication</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-200 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>ISO 45001 HSE Compliance</span>
                </div>
              </div>

              {/* Button */}
              <div className="pt-4">
                <Link
                  to="/about"
                  className="px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-sky-300 font-bold text-sm rounded-xl border border-slate-800 inline-flex items-center space-x-2 transition-all hover:border-sky-400/40"
                >
                  <span>Read Our Full Company Profile</span>
                  <ArrowRight className="w-4 h-4 text-red-500" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. KEY PERFORMANCE COUNTERS ================= */}
      <section id="counters-section" className="py-16 bg-slate-950 border-t border-b border-slate-850 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Counter 1 */}
            <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 text-center hover:border-red-500/40 transition-colors group">
              <div className="inline-flex p-3.5 bg-red-500/10 text-red-500 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
                {counts.projects}<span className="text-red-500">+</span>
              </div>
              <div className="text-sm font-bold text-slate-300 uppercase tracking-wider mt-1 font-heading">
                Mega Projects Completed
              </div>
              <p className="text-xs text-sky-400 mt-1">Bridges, Viaducts & Energy Infrastructure</p>
            </div>

            {/* Counter 2 */}
            <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 text-center hover:border-sky-500/40 transition-colors group">
              <div className="inline-flex p-3.5 bg-sky-500/10 text-sky-400 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                <Truck className="w-7 h-7" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
                {counts.machines}<span className="text-sky-400">+</span>
              </div>
              <div className="text-sm font-bold text-slate-300 uppercase tracking-wider mt-1 font-heading">
                Heavy Machines in Fleet
              </div>
              <p className="text-xs text-sky-400 mt-1">50T-800T Cranes, Excavators & Haulers</p>
            </div>

            {/* Counter 3 */}
            <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 text-center hover:border-red-500/40 transition-colors group">
              <div className="inline-flex p-3.5 bg-red-500/10 text-red-500 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                <Wind className="w-7 h-7" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
                {counts.steel.toLocaleString()}<span className="text-red-500">+</span>
              </div>
              <div className="text-sm font-bold text-slate-300 uppercase tracking-wider mt-1 font-heading">
                Tons of Steel Fabricated
              </div>
              <p className="text-xs text-sky-400 mt-1">Windmill Towers & Tubular Structures</p>
            </div>

            {/* Counter 4 */}
            <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 text-center hover:border-sky-500/40 transition-colors group">
              <div className="inline-flex p-3.5 bg-sky-500/10 text-sky-400 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
                {counts.engineers}<span className="text-sky-400">+</span>
              </div>
              <div className="text-sm font-bold text-slate-300 uppercase tracking-wider mt-1 font-heading">
                Skilled Engineers & Riggers
              </div>
              <p className="text-xs text-sky-400 mt-1">Certified Rigging Specialists & Designers</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. CORE SERVICES GRID ================= */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Verticals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Our Integrated Capabilities
            </h2>
            <p className="text-slate-400 text-base">
              Delivering comprehensive solutions across civil infrastructure, renewable energy, and heavy plant & machinery rentals.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service Card 1 */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl">
              <div className="space-y-6">
                <div className="p-4 bg-red-500/10 text-red-500 rounded-2xl w-fit group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Anchor className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading group-hover:text-red-400 transition-colors">
                  Bridge & Civil Construction
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  From cable-stayed masterpieces to robust concrete highway bridges, we manage full-lifecycle civil construction with precision engineering and structural integrity.
                </p>
                <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-850 pt-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span>Cable-Stayed & Viaduct Bridges</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Deep Foundation Marine Piling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span>Pre-Stressed Concrete Segmental Launching</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  to="/services#bridge"
                  className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 font-bold text-sm group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl">
              <div className="space-y-6">
                <div className="p-4 bg-sky-500/10 text-sky-400 rounded-2xl w-fit group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                  <Wind className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading group-hover:text-sky-300 transition-colors">
                  Windmill Fabrication
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Heavy-duty, high-precision steel fabrication for wind turbine towers and rotor hubs. We support the renewable energy sector with world-class manufacturing standards.
                </p>
                <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-850 pt-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Tubular Steel Tower Section Rolling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span>Automated Submerged Arc Welding (SAW)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Substation Structural Frame Assembly</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  to="/services#windmill"
                  className="inline-flex items-center space-x-2 text-sky-400 hover:text-sky-300 font-bold text-sm group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl">
              <div className="space-y-6">
                <div className="p-4 bg-red-500/10 text-red-500 rounded-2xl w-fit group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading group-hover:text-red-400 transition-colors">
                  Heavy Equipment Rental
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Access an expansive, meticulously maintained fleet of crawler cranes, hydraulic excavators, haul trucks, and earthmoving equipment for your site's exact needs.
                </p>
                <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-850 pt-4">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span>50T to 800T Heavy Crawler Cranes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>Long-Reach Excavators & Haulers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span>24/7 Field Maintenance & Rigging Support</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  to="/resources"
                  className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 font-bold text-sm group-hover:translate-x-1 transition-transform"
                >
                  <span>View Fleet Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 6. WHY PARTNER WITH AMIGO CONNECT (EPC ADVANTAGES) ================= */}
      <section className="py-24 bg-slate-950 border-t border-slate-850 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Advantage Copy & Bullets */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-md border border-sky-500/20">
                  The EPC Edge
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-3">
                  Why Partner With Amigo Connect?
                </h2>
                <p className="text-slate-400 text-sm mt-2">
                  Our integrated turnkey framework eliminates project friction, delays, and budget creep.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Advantage 1 */}
                <div className="flex items-start space-x-4 p-4 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="p-3 bg-red-500/10 text-red-500 rounded-lg shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-heading">Single-Point Responsibility</h4>
                    <p className="text-slate-300 text-xs leading-relaxed mt-1">
                      From initial structural design and raw steel procurement to final bridge placement and machinery deployment. One trusted partner managing all handoffs.
                    </p>
                  </div>
                </div>

                {/* Advantage 2 */}
                <div className="flex items-start space-x-4 p-4 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg shrink-0">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-heading">Unmatched Fleet Availability</h4>
                    <p className="text-slate-300 text-xs leading-relaxed mt-1">
                      Never suffer site downtime waiting on third-party cranes. Our in-house equipment rental division guarantees immediate mobilization of heavy machinery.
                    </p>
                  </div>
                </div>

                {/* Advantage 3 */}
                <div className="flex items-start space-x-4 p-4 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="p-3 bg-red-500/10 text-red-500 rounded-lg shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-heading">Stringent Safety & Quality Protocols</h4>
                    <p className="text-slate-300 text-xs leading-relaxed mt-1">
                      ISO 9001 & ISO 45001 compliant workflows, non-destructive ultrasonic testing for steel welds, and a zero-tolerance site safety policy.
                    </p>
                  </div>
                </div>

                {/* Advantage 4 */}
                <div className="flex items-start space-x-4 p-4 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-heading">Fixed Timelines & Guaranteed Budgets</h4>
                    <p className="text-slate-300 text-xs leading-relaxed mt-1">
                      Our integrated EPC approach mitigates financial risk, enforcing strict milestone schedules and delivering mega-projects on time.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Graphic: Concept to Completion Timeline */}
            <div className="lg:col-span-5">
              <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl relative">
                <h3 className="text-xl font-bold text-white font-heading mb-6 flex items-center space-x-2 border-b border-slate-800 pb-4">
                  <Sparkles className="w-5 h-5 text-sky-400" />
                  <span>Concept to Completion Workflow</span>
                </h3>

                <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-red-500 before:via-sky-400 before:to-slate-700">
                  
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 p-1 bg-red-600 rounded-full text-white">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-red-400 uppercase tracking-widest">Phase 01</div>
                    <div className="text-base font-bold text-white font-heading">Feasibility & Structural Design</div>
                    <p className="text-xs text-slate-400 mt-0.5">3D CAD modeling, stress simulation & site geotechnical analysis.</p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 p-1 bg-sky-500 rounded-full text-slate-950">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-sky-400 uppercase tracking-widest">Phase 02</div>
                    <div className="text-base font-bold text-white font-heading">Steel Procurement & Tower Fabrication</div>
                    <p className="text-xs text-slate-400 mt-0.5">Certified steel sourcing, automated SAW welding & ISO lab QA.</p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 p-1 bg-red-600 rounded-full text-white">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-red-400 uppercase tracking-widest">Phase 03</div>
                    <div className="text-base font-bold text-white font-heading">Machinery Fleet Mobilization</div>
                    <p className="text-xs text-slate-400 mt-0.5">Deploying heavy crawler cranes, riggers & support teams.</p>
                  </div>

                  {/* Step 4 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-0 p-1 bg-sky-500 rounded-full text-slate-950">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-sky-400 uppercase tracking-widest">Phase 04</div>
                    <div className="text-base font-bold text-white font-heading">Final Construction & Commissioning</div>
                    <p className="text-xs text-slate-400 mt-0.5">Erection, load testing, and formal project handover.</p>
                  </div>

                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <button
                    onClick={() => onOpenModal('meeting')}
                    className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-xl text-center shadow-lg transition-colors border border-red-400/30"
                  >
                    Schedule EPC Consultation
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 7. FEATURED PROJECTS SHOWCASE ================= */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-md border border-red-500/20">
                Portfolio Landmark Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-3">
                Forging the Future: Recent Works
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center bg-slate-950 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setProjectTab('all')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  projectTab === 'all'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setProjectTab('bridge')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  projectTab === 'bridge'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Bridge Construction
              </button>
              <button
                onClick={() => setProjectTab('windmill')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  projectTab === 'windmill'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Windmill Fabrication
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-red-500/60 transition-all duration-300 shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  <span className="absolute top-4 left-4 px-3 py-1 bg-slate-950/90 text-sky-400 text-xs font-bold rounded-lg border border-slate-800">
                    {project.categoryName}
                  </span>

                  {/* Hover Overlay Stats */}
                  <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Project Highlights</span>
                      <h4 className="text-lg font-bold text-white font-heading mt-1">{project.title}</h4>
                      <p className="text-xs text-slate-300 mt-2">{project.description}</p>
                    </div>

                    <div className="space-y-2 border-t border-slate-800 pt-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Location:</span>
                        <span className="text-white font-semibold">{project.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Contract Value:</span>
                        <span className="text-red-400 font-bold">{project.value}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Scale / Scope:</span>
                        <span className="text-white font-semibold">{project.span}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                    <span>{project.location}</span>
                    <span className="font-bold text-sky-400">{project.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <Link
              to="/projects"
              className="px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm rounded-xl border border-slate-800 inline-flex items-center space-x-2 transition-colors"
            >
              <span>Explore All Landmark Projects</span>
              <ArrowRight className="w-4 h-4 text-red-500" />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= 8. CLIENT TESTIMONIALS SLIDER ================= */}
      <section className="py-24 bg-slate-950 border-t border-slate-850 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-md border border-sky-500/20">
            Partner Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-3 mb-12">
            What Our Partners Say
          </h2>

          <div className="relative bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="text-red-500 text-6xl font-serif leading-none mb-4 opacity-50">“</div>

            <p className="text-lg sm:text-xl text-slate-200 italic font-normal leading-relaxed max-w-3xl mx-auto">
              {testimonials[currentTestimonial].quote}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="text-base font-bold text-white font-heading">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-xs text-sky-400 font-semibold">
                {testimonials[currentTestimonial].title}, <span className="text-slate-400">{testimonials[currentTestimonial].company}</span>
              </div>
            </div>

            {/* Slider Nav Buttons */}
            <div className="flex items-center justify-between absolute inset-y-0 left-4 right-4 pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="pointer-events-auto p-3 bg-slate-950/80 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg border border-slate-800"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="pointer-events-auto p-3 bg-slate-950/80 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg border border-slate-800"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentTestimonial ? 'bg-red-500 w-8' : 'bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA BANNER ================= */}
      <section className="py-16 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
              Ready to Accelerate Your Mega-Infrastructure Project?
            </h3>
            <p className="text-red-100 font-medium text-sm mt-1">
              Connect with our Chief Engineering Team today for instant equipment deployment and turnkey EPC estimates.
            </p>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <button
              onClick={() => onOpenModal('quote')}
              className="px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm rounded-xl shadow-xl transition-all border border-slate-800"
            >
              Request Immediate Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
