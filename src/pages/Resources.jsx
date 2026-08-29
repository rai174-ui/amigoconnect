import React, { useState } from 'react';
import { 
  Truck, 
  Download, 
  FileText, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  HardHat, 
  Wrench,
  Clock
} from 'lucide-react';

export default function Resources({ onOpenModal }) {
  const [fleetCategory, setFleetCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const fleetData = [
    {
      id: 1,
      name: "Liebherr LR 1800 Crawler Crane",
      category: "cranes",
      categoryName: "Crawler Cranes",
      capacity: "800 Tons Lift Capacity",
      boomLength: "180m Main Boom",
      availability: "Available for Mobilization",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
      specs: ["Superlift Derrick System", "Liccon3 Crane Control", "Narrow Track Option"],
    },
    {
      id: 2,
      name: "Terex CC 2800 Heavy Lattice Crane",
      category: "cranes",
      categoryName: "Crawler Cranes",
      capacity: "600 Tons Lift Capacity",
      boomLength: "138m Main Boom",
      availability: "In Service (Deployable Q3)",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      specs: ["Vario-Superlift Frame", "Quad-Drive Track System", "Wind Turbine Jib Extension"],
    },
    {
      id: 3,
      name: "CAT 395 Large Hydraulic Excavator",
      category: "earthmoving",
      categoryName: "Earthmoving",
      capacity: "95 Tons Operating Weight",
      boomLength: "6.5 m³ Bucket Capacity",
      availability: "Available Immediately",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      specs: ["CAT 2D/3D Grade Control", "C18 Engine 542 HP", "Heavy-Duty Rock Bucket"],
    },
    {
      id: 4,
      name: "Komatsu HD785-8 Off-Highway Truck",
      category: "haulage",
      categoryName: "Heavy Haulers",
      capacity: "100 Tons Payload",
      boomLength: "1,140 HP Diesel Engine",
      availability: "Available Immediately",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      specs: ["Automatic Retard Speed Control", "Traction Control System", "VHMS Telematics System"],
    },
    {
      id: 5,
      name: "Bauer BG 39 Heavy Foundation Drill Rig",
      category: "foundation",
      categoryName: "Foundation Rig",
      capacity: "3.0m Max Drilling Diameter",
      boomLength: "85m Depth Capability",
      availability: "Available for Mobilization",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      specs: ["Multi-Functional Kelly Drilling", "B-Tronic Computer Monitoring", "388 kNm Torque Rating"],
    },
  ];

  const brochures = [
    {
      id: 1,
      title: "Amigo Connect Fleet Catalog 2026",
      size: "14.2 MB",
      format: "PDF Document",
      desc: "Complete specifications, load charts, and mobilization dimensions for 120+ cranes and earthmovers.",
    },
    {
      id: 2,
      title: "Bridge Construction EPC Capability Statement",
      size: "8.5 MB",
      format: "PDF Document",
      desc: "Technical methodology for segmental launching, marine piling, and cable-stayed structural engineering.",
    },
    {
      id: 3,
      title: "Windmill Tower Steel Fabrication Spec Sheet",
      size: "6.1 MB",
      format: "PDF Document",
      desc: "Submerged arc welding procedures, tubular plate rolling tolerances, and NDT QA lab certifications.",
    },
    {
      id: 4,
      title: "ISO 9001 & ISO 45001 Safety Certificates",
      size: "3.4 MB",
      format: "PDF Document",
      desc: "Official corporate quality assurance and health & safety compliance documentation.",
    },
  ];

  const filteredFleet = fleetData.filter((item) => {
    const matchesCat = fleetCategory === 'all' || item.category === fleetCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-16">
      
      {/* Banner */}
      <section className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
              Fleet & Technical Downloads
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Machinery Fleet Catalog & Downloads
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Browse our expansive heavy equipment fleet inventory and download technical brochures and load charts.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Catalog Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl font-bold text-white font-heading">Heavy Equipment Fleet Inventory</h2>
              <p className="text-xs text-slate-400">All equipment supplied with certified operators and 24/7 field mechanics.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setFleetCategory('all')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  fleetCategory === 'all' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Fleet
              </button>
              <button
                onClick={() => setFleetCategory('cranes')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  fleetCategory === 'cranes' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cranes
              </button>
              <button
                onClick={() => setFleetCategory('earthmoving')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  fleetCategory === 'earthmoving' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Earthmoving
              </button>
              <button
                onClick={() => setFleetCategory('haulage')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  fleetCategory === 'haulage' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Haulers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFleet.map((machine) => (
              <div key={machine.id} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl hover:border-amber-500/50 transition-all">
                <div className="relative h-56">
                  <img src={machine.image} alt={machine.name} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-slate-950/90 text-amber-400 text-xs font-bold rounded-lg border border-slate-800">
                    {machine.categoryName}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white font-heading">{machine.name}</h3>

                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Capacity:</span>
                      <span className="text-amber-400 font-bold">{machine.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Reach / Engine:</span>
                      <span className="text-white font-semibold">{machine.boomLength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Status:</span>
                      <span className="text-emerald-400 font-semibold">{machine.availability}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 space-y-1">
                    {machine.specs.map((spec, i) => (
                      <div key={i} className="flex items-center space-x-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenModal('quote')}
                      className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-colors"
                    >
                      Reserve / Request Rate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technical Brochures Download Section */}
      <section id="brochures" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
              Download Center
            </span>
            <h2 className="text-3xl font-extrabold text-white font-heading">
              Technical Brochures & Load Charts
            </h2>
            <p className="text-slate-400 text-sm">
              Download official engineering brochures, crane load capacity tables, and corporate credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {brochures.map((doc) => (
              <div key={doc.id} className="p-6 bg-slate-950 rounded-2xl border border-slate-800 flex items-start space-x-4 hover:border-amber-500/40 transition-colors">
                <div className="p-3.5 bg-amber-500/10 text-amber-400 rounded-xl shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-base font-bold text-white font-heading">{doc.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{doc.desc}</p>
                  <div className="flex items-center space-x-3 text-[11px] text-slate-500 pt-2">
                    <span>{doc.format}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Downloading ${doc.title}...`)}
                  className="p-2.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-400 rounded-xl border border-slate-800 transition-colors"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
