import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Building2, 
  Send, 
  CheckCircle2, 
  Briefcase, 
  Clock, 
  ShieldCheck,
  FileText
} from 'lucide-react';

export default function Contact({ onOpenModal }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('meeting'); // 'meeting' or 'vendor'
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.hash === '#vendor') {
      setActiveTab('vendor');
    }
  }, [location]);

  const [meetingData, setMeetingData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: '10:00 AM EST',
    meetingTopic: 'EPC Project Consultation',
    notes: '',
  });

  const [vendorData, setVendorData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    vendorCategory: 'Raw Material / Steel Supplier',
    certifications: 'ISO 9001 / AWS Certified',
    taxId: '',
    companyProfileUrl: '',
  });

  const handleSubmitMeeting = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSubmitVendor = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-16">
      
      {/* Banner */}
      <section className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Contact Amigo Connect & Vendor Portal
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Schedule a technical consultation with our engineering directors or register as a certified vendor/subcontractor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white font-heading">Corporate Headquarters</h2>
                <p className="text-xs text-slate-400 mt-1">Visit our administrative tower or contact our regional dispatch desks.</p>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">HQ Address</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      100 Industrial Parkway, EPC Tower, Suite 500<br />
                      North America Infra District
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">Direct Phone Lines</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Toll Free: +1 (800) 555-AMIGO<br />
                      Dispatch Hotline: +1 (555) 019-2834
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">Electronic Mail</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Inquiries: info@amigoconnect.com<br />
                      Vendor Relations: vendors@amigoconnect.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-3">
                <div className="w-full h-40 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center text-slate-500 text-xs font-mono">
                  [ Interactive HQ Geo-Coordinates Map ]
                </div>
                <div className="text-xs text-slate-400 flex items-center justify-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>Visitor Access Requires Prior Security Clearance</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Form (Schedule a Meeting / Vendor Registration) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                
                {/* Tab Switcher */}
                <div className="flex border-b border-slate-800 bg-slate-950/60">
                  <button
                    onClick={() => { setActiveTab('meeting'); setSubmitted(false); }}
                    className={`flex-1 py-4 text-sm font-bold transition-all border-b-2 ${
                      activeTab === 'meeting'
                        ? 'border-amber-500 text-amber-400 bg-slate-900'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Schedule a Meeting
                  </button>
                  <button
                    onClick={() => { setActiveTab('vendor'); setSubmitted(false); }}
                    className={`flex-1 py-4 text-sm font-bold transition-all border-b-2 ${
                      activeTab === 'vendor'
                        ? 'border-amber-500 text-amber-400 bg-slate-900'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Vendor Registration
                  </button>
                </div>

                <div className="p-8">
                  {submitted ? (
                    <div className="py-16 text-center space-y-4">
                      <div className="inline-flex p-4 bg-emerald-500/20 text-emerald-400 rounded-full">
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold text-white font-heading">
                        {activeTab === 'meeting' ? 'Meeting Scheduled!' : 'Vendor Application Received!'}
                      </h3>
                      <p className="text-slate-300 text-sm max-w-md mx-auto">
                        Thank you for submitting to <strong className="text-amber-400">Amigo Connect</strong>. Confirmation details have been dispatched to your corporate email.
                      </p>
                      <div className="pt-4">
                        <button
                          onClick={() => setSubmitted(false)}
                          className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold text-sm rounded-xl shadow"
                        >
                          Submit Another Entry
                        </button>
                      </div>
                    </div>
                  ) : activeTab === 'meeting' ? (
                    /* Schedule a Meeting Form */
                    <form onSubmit={handleSubmitMeeting} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Vance"
                            value={meetingData.name}
                            onChange={(e) => setMeetingData({ ...meetingData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="john@infrastructure.com"
                            value={meetingData.email}
                            onChange={(e) => setMeetingData({ ...meetingData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Meeting Date *</label>
                          <input
                            type="date"
                            required
                            value={meetingData.preferredDate}
                            onChange={(e) => setMeetingData({ ...meetingData, preferredDate: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Time Slot</label>
                          <select
                            value={meetingData.preferredTime}
                            onChange={(e) => setMeetingData({ ...meetingData, preferredTime: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                          >
                            <option value="09:00 AM EST">09:00 AM EST</option>
                            <option value="11:00 AM EST">11:00 AM EST</option>
                            <option value="02:00 PM EST">02:00 PM EST</option>
                            <option value="04:00 PM EST">04:00 PM EST</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Meeting Agenda / Scope</label>
                        <textarea
                          rows="4"
                          placeholder="Provide brief context regarding crane rental, bridge civil tender, or steel fabrication project..."
                          value={meetingData.notes}
                          onChange={(e) => setMeetingData({ ...meetingData, notes: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Confirm Calendar Reservation</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  ) : (
                    /* Vendor Registration Form */
                    <form onSubmit={handleSubmitVendor} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Vendor / Company Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Apex Steel Mills Corp"
                            value={vendorData.companyName}
                            onChange={(e) => setVendorData({ ...vendorData, companyName: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Representative *</label>
                          <input
                            type="text"
                            required
                            placeholder="Sarah Jenkins"
                            value={vendorData.contactPerson}
                            onChange={(e) => setVendorData({ ...vendorData, contactPerson: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Supply Category *</label>
                          <select
                            value={vendorData.vendorCategory}
                            onChange={(e) => setVendorData({ ...vendorData, vendorCategory: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                          >
                            <option value="Raw Material / Steel Supplier">Raw Material / Structural Steel Supplier</option>
                            <option value="Subcontractor (Civil Works)">Subcontractor (Civil Works)</option>
                            <option value="Equipment Attachment Partner">Equipment Attachment Partner</option>
                            <option value="Safety & Testing Laboratory">Safety & Testing Laboratory</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Quality Certifications held</label>
                          <input
                            type="text"
                            placeholder="ISO 9001, AISC, AWS D1.1"
                            value={vendorData.certifications}
                            onChange={(e) => setVendorData({ ...vendorData, certifications: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate Website / Portfolio URL</label>
                        <input
                          type="url"
                          placeholder="https://www.vendorcompany.com"
                          value={vendorData.companyProfileUrl}
                          onChange={(e) => setVendorData({ ...vendorData, companyProfileUrl: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Register as Certified Vendor</span>
                        <Briefcase className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
