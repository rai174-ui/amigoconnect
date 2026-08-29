import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  HardHat, 
  Target, 
  Eye, 
  Quote, 
  ArrowRight
} from 'lucide-react';

export default function About({ onOpenModal }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-16">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 py-16 border-b border-slate-850 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-md border border-sky-500/20">
              About Amigo Connect
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Pioneering EPC Excellence & Engineering Integrity
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              For over two decades, Amigo Connect has stood at the forefront of monumental civil construction, high-precision windmill tower fabrication, and heavy equipment logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-red-500 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Company Profile</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white font-heading">
                End-to-End Infrastructure Leadership
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Founded with a singular mission to build resilient infrastructure, Amigo Connect has grown into a multi-disciplinary EPC powerhouse. We integrate design, steel metallurgy, heavy crane logistics, and civil engineering into one seamless operation.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our in-house capabilities allow us to eliminate supply chain bottlenecks. By controlling raw material procurement, tower rolling, welding quality, and heavy transport equipment, we guarantee zero site downtime for our client partners globally.
              </p>

              {/* Vision & Mission Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <div className="p-2 bg-red-500/10 text-red-500 rounded-lg w-fit">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">Our Mission</h4>
                  <p className="text-xs text-slate-400">To engineer and construct world-class bridges and clean energy structures with zero compromise on safety or quality.</p>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg w-fit">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">Our Vision</h4>
                  <p className="text-xs text-slate-400">To remain the preferred EPC partner for iconic civil landmarks and renewable energy generation plants globally.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Amigo Connect Corporate Headquarters and Fabrication Facility"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 bg-slate-900 border-t border-b border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 text-center lg:text-left space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                  alt="Director's Portrait - Amigo Connect Executive"
                  className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl object-cover border-2 border-red-500/40 shadow-xl"
                />
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">Arthur Pendelton</h3>
                  <p className="text-xs text-sky-400 font-semibold">Managing Director & CEO</p>
                  <p className="text-xs text-slate-400">30+ Years in Infrastructure EPC</p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-2 text-red-500 text-xs font-bold uppercase tracking-wider">
                  <Quote className="w-5 h-5" />
                  <span>Director's Message</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white font-heading">
                  "Engineering Resilience for Future Generations"
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "At Amigo Connect, our growth has been driven by a relentless commitment to technical precision. Whether we are launching pre-stressed concrete viaduct spans over heavy traffic or rolling thick-walled steel for wind turbine towers, our focus remains on zero defects and absolute safety."
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  "We invest continuously in state-of-the-art machinery and human talent, ensuring our clients receive turnkey solutions that stand the test of time."
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Safety & Quality Section */}
      <section id="safety" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-md border border-sky-500/20">
              Uncompromising Standards
            </span>
            <h2 className="text-3xl font-extrabold text-white font-heading">
              Safety & Quality Management (HSE)
            </h2>
            <p className="text-slate-400 text-sm">
              Our site operations and fabrication plants adhere strictly to international quality and occupational safety frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Cert 1 */}
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-3.5 bg-red-500/10 text-red-500 rounded-xl w-fit">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">ISO 9001:2015 Certified</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Total Quality Management across engineering design, steel raw material inspection, submerged arc welding, and structural assembly.
              </p>
            </div>

            {/* Cert 2 */}
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-3.5 bg-sky-500/10 text-sky-400 rounded-xl w-fit">
                <HardHat className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">ISO 45001:2018 Safety</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Zero-tolerance Health, Safety, and Environment (HSE) policy. Daily toolbox talks, certified rigger training, and mandatory PPE protocols on all active sites.
              </p>
            </div>

            {/* Cert 3 */}
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
              <div className="p-3.5 bg-red-500/10 text-red-500 rounded-xl w-fit">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">In-House NDT Testing Lab</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Rigorous non-destructive testing (Ultrasonic, Radiographic X-Ray, Magnetic Particle) for 100% of critical structural welds prior to site dispatch.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenModal('quote')}
              className="px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-lg inline-flex items-center space-x-2 border border-red-400/30"
            >
              <span>Partner With Amigo Connect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
