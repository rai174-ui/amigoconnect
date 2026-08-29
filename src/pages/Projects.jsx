import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Layers, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

export default function Projects({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Grand Estuary Suspension Bridge",
      category: "bridge",
      categoryName: "Bridge Construction",
      status: "completed",
      location: "East Coast Highway Corridor",
      value: "$145 Million",
      timeline: "2023 - 2025",
      client: "State Department of Transportation",
      image: "/images/bridge.jpg",
      description: "Dual-tower cable-stayed bridge spanning 1.4 km over a deep shipping channel. Required heavy marine foundation piling and high-tensile stay-cable tensioning.",
      highlights: [
        "1,400m Total Span Length",
        "Deep foundation marine piles driven to 65m depth",
        "Zero lost-time injuries across 850,000 man-hours",
        "Completed 2 months ahead of scheduled deadline"
      ]
    },
    {
      id: 2,
      title: "Offshore Wind Turbine Hub Alpha",
      category: "windmill",
      categoryName: "Windmill Fabrication",
      status: "ongoing",
      location: "Coastal Renewable Park",
      value: "$88 Million",
      timeline: "2025 - Present",
      client: "AeroWind Dynamics Ltd",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
      description: "High-precision tubular steel tower section manufacturing and heavy rotor hub assembly for 45 offshore 12MW wind turbines.",
      highlights: [
        "45 Complete Wind Turbine Towers",
        "6.5m Diameter Tubular Steel Sections",
        "100% Ultrasonic & Radiographic Weld Inspections",
        "Marine C5-M Anti-Corrosion Coating System"
      ]
    },
    {
      id: 3,
      title: "Metropolitan Rail Viaduct Overpass",
      category: "bridge",
      categoryName: "Bridge Construction",
      status: "completed",
      location: "Central Transit Sector",
      value: "$210 Million",
      timeline: "2022 - 2024",
      client: "Metropolitan Transit Authority",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      description: "8.2 km elevated precast box girder viaduct for high-speed rail transit across congested urban arterial highways.",
      highlights: [
        "8.2 km Elevated Viaduct Realignment",
        "Segmental launching gantry deployed overnight",
        "Minimal interruption to city traffic flow",
        "Awarded Civil Infrastructure Project of the Year"
      ]
    },
    {
      id: 4,
      title: "Turbine Tower Steel Rolling Plant Expansion",
      category: "windmill",
      categoryName: "Windmill Fabrication",
      status: "completed",
      location: "Industrial Heavy Fabrication Yard",
      value: "$64 Million",
      timeline: "2023 - 2024",
      client: "CleanGrid Power Systems",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      description: "Fabrication of 12,000 tons of heavy structural steel frames and substation enclosures for onshore wind energy farms.",
      highlights: [
        "12,000 Tons Heavy Steel Processed",
        "Automated Submerged Arc Welding Lines",
        "Substation High-Voltage Frames",
        "Delivered under tight 10-month contract"
      ]
    },
    {
      id: 5,
      title: "High-Capacity Marine Piling Project",
      category: "bridge",
      categoryName: "Bridge Construction",
      status: "ongoing",
      location: "Northern Delta Basin",
      value: "$52 Million",
      timeline: "2025 - Present",
      client: "Delta Ports Authority",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      description: "Mobilization of 8 hydraulic pile driving rigs and 300T crawler cranes for heavy cofferdam foundation installation.",
      highlights: [
        "120 Deep Foundation Piles Driven",
        "Heavy marine barge logistics",
        "24/7 continuous piling operations",
        "ISO 45001 strict environmental marine monitoring"
      ]
    },
    {
      id: 6,
      title: "Renewable Energy Substation Steel Structure",
      category: "windmill",
      categoryName: "Windmill Fabrication",
      status: "completed",
      location: "Plateau Wind Farm",
      value: "$35 Million",
      timeline: "2024 - 2025",
      client: "EcoPower Energy Partners",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      description: "Custom lattice structural steel fabrication and hot-dip galvanizing for 300MW renewable energy collector substations.",
      highlights: [
        "300MW Collector Substation Frame",
        "Hot-dip galvanized for 30-year exposure",
        "Pre-assembled modular structural bays",
        "Rapid site bolting without hot work"
      ]
    }
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeTab === 'all' || project.category === activeTab;
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 py-16 border-b border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-md border border-sky-500/20">
              EPC Project Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Landmark Infrastructure & Energy Projects
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Explore our ongoing and completed mega-projects spanning monumental bridge engineering and wind energy steel fabrication.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-slate-950 border-b border-slate-800/80 sticky top-20 z-20 backdrop-blur-md bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 w-full md:w-auto overflow-x-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${
                  activeTab === 'all' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Verticals
              </button>
              <button
                onClick={() => setActiveTab('bridge')}
                className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${
                  activeTab === 'bridge' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Bridge Construction
              </button>
              <button
                onClick={() => setActiveTab('windmill')}
                className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${
                  activeTab === 'windmill' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Windmill Fabrication
              </button>
            </div>

            {/* Status & Search Filters */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-sky-400"
              >
                <option value="all">All Statuses</option>
                <option value="completed">Completed Works</option>
                <option value="ongoing">Ongoing Works</option>
              </select>

              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search project name or site..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-sky-400"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center text-slate-400">
              No projects found matching your search criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-red-500/60 transition-all duration-300 shadow-xl group hover:-translate-y-1"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="px-3 py-1 bg-slate-950/90 text-sky-400 text-xs font-bold rounded-lg border border-slate-800">
                        {project.categoryName}
                      </span>
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-lg border ${
                        project.status === 'completed' 
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                          : 'bg-red-500/20 text-red-400 border-red-500/30 animate-pulse'
                      }`}>
                        {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-300">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-sky-400" />
                        <span>{project.location}</span>
                      </span>
                      <span className="font-bold text-red-400">{project.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Project Spec Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="relative h-64">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/80 text-slate-300 hover:text-white rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase">{selectedProject.categoryName}</span>
                <h3 className="text-2xl font-bold text-white font-heading mt-1">{selectedProject.title}</h3>
                <p className="text-sm text-slate-300 mt-2">{selectedProject.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block">Client</span>
                  <strong className="text-white">{selectedProject.client}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Location</span>
                  <strong className="text-white">{selectedProject.location}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Contract Value</span>
                  <strong className="text-red-400 font-bold">{selectedProject.value}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Timeline</span>
                  <strong className="text-white">{selectedProject.timeline}</strong>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-heading mb-3">Key Technical Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-slate-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  Close Window
                </button>
                <button
                  onClick={() => { setSelectedProject(null); onOpenModal('quote'); }}
                  className="px-6 py-2 bg-red-600 text-white font-bold text-xs rounded-xl shadow-lg border border-red-400/30"
                >
                  Request Similar Project Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
