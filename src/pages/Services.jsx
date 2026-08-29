import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Anchor, 
  Wind, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Wrench, 
  Sparkles
} from 'lucide-react';

export default function Services({ onOpenModal }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-16">
      
      {/* Hero Header */}
      <section className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
              EPC Core Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Comprehensive EPC & Machinery Solutions
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Explore our three core verticals: monumental bridge construction, high-precision windmill tower steel fabrication, and expansive heavy equipment rental options.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VERTICAL 1: BRIDGE & CIVIL CONSTRUCTION ================= */}
      <section id="bridge" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-md">
                <Anchor className="w-4 h-4" />
                <span>Vertical 01</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Bridge & Civil Infrastructure Construction
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                From cable-stayed river crossings to elevated urban metro viaducts, Amigo Connect delivers full-lifecycle civil construction. We combine geotechnical expertise, heavy foundation piling, pre-stressed concrete segment casting, and precision girder erection.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm">Cable-Stayed & Suspension Bridges:</strong>
                    <p className="text-xs text-slate-400">High-span tower erection and stay-cable tensioning engineering.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm">Marine Deep Foundation Piling:</strong>
                    <p className="text-xs text-slate-400">Large-diameter bored piles and cofferdam construction in tidal waters.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm">Segmental Viaduct Launching:</strong>
                    <p className="text-xs text-slate-400">Precast concrete box girder launching gantries for rapid highway delivery.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenModal('quote')}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Request Bridge Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80"
                  alt="Bridge Construction Site by Amigo Connect"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VERTICAL 2: WINDMILL FABRICATION ================= */}
      <section id="windmill" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80"
                  alt="Windmill Fabrication Yard by Amigo Connect"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-md">
                <Wind className="w-4 h-4" />
                <span>Vertical 02</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Windmill & Tubular Steel Fabrication
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Supporting the clean energy transition with heavy-duty, ultra-precise structural steel manufacturing. Our state-of-the-art facility features automated CNC plate rolling, submerged arc welding (SAW), and internal non-destructive testing (NDT).
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm">Wind Turbine Towers & Flanges:</strong>
                    <p className="text-xs text-slate-400">Precision rolling for 4m-8m diameter tubular steel tower sections.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm">Rotor Hub & Nacelle Weldments:</strong>
                    <p className="text-xs text-slate-400">Heavy structural framing built to withstand dynamic wind load fatigue.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm">Anti-Corrosion Blast & Paint:</strong>
                    <p className="text-xs text-slate-400">Multi-coat epoxy marine paint systems rated for 25-year offshore durability.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenModal('quote')}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Request Steel Fabrication Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VERTICAL 3: HEAVY EQUIPMENT RENTAL ================= */}
      <section id="fleet" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-md">
                <Truck className="w-4 h-4" />
                <span>Vertical 03</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Heavy Machinery & Fleet Rental Services
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Access 120+ heavy machines ready for immediate site mobilization. Our fleet includes heavy lattice-boom crawler cranes, all-terrain mobile cranes, long-reach excavators, and heavy transport lowbed trailers.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm">Crawler Cranes (50T to 800T Capacity):</strong>
                    <p className="text-xs text-slate-400">Heavy lift solutions for bridge girders and wind turbine assembly.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm">Hydraulic Excavators & Earthmovers:</strong>
                    <p className="text-xs text-slate-400">20T to 90T excavation units with GPS grade-control options.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm">Turnkey Operation & Maintenance:</strong>
                    <p className="text-xs text-slate-400">Supplied with NCCCO certified operators and 24/7 field mechanics.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <Link
                  to="/resources"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Explore Full Fleet Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                  alt="Heavy Machinery Fleet Crane by Amigo Connect"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
