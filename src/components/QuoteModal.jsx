import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Clock, Building2 } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialType = 'quote' }) {
  const [activeTab, setActiveTab] = useState(initialType); // 'quote' or 'meeting'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: 'Bridge & Civil Construction',
    projectLocation: '',
    estimatedTimeline: 'Immediate (Within 30 Days)',
    projectScope: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after showing thank you message
    }, 3000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/90 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-amber-500/20 text-amber-500 rounded-lg">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                {activeTab === 'quote' ? 'Request a Formal Quote' : 'Schedule Technical Meeting'}
              </h3>
              <p className="text-xs text-slate-400">EPC Engineering & Equipment Rental Division</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-slate-800 bg-slate-950/50">
          <button
            onClick={() => { setActiveTab('quote'); setSubmitted(false); }}
            className={`flex-1 py-3 text-sm font-semibold transition-colors border-b-2 ${
              activeTab === 'quote'
                ? 'border-amber-500 text-amber-400 bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Request Project Quote
          </button>
          <button
            onClick={() => { setActiveTab('meeting'); setSubmitted(false); }}
            className={`flex-1 py-3 text-sm font-semibold transition-colors border-b-2 ${
              activeTab === 'meeting'
                ? 'border-amber-500 text-amber-400 bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Schedule a Meeting
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex p-4 bg-emerald-500/20 text-emerald-400 rounded-full">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h4 className="text-2xl font-bold text-white">Inquiry Received!</h4>
              <p className="text-slate-300 max-w-md mx-auto text-sm">
                Thank you for contacting <strong className="text-amber-400">Amigo Connect</strong>. Our Chief Engineering Estimator will review your specifications and get back to you within 2 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg shadow-lg transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Robert Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="r.vance@infrastructure.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Direct Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="Apex Infrastructure Group"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Service Sector *</label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="Bridge & Civil Construction">Bridge & Civil Construction</option>
                    <option value="Windmill Fabrication">Windmill & Steel Fabrication</option>
                    <option value="Heavy Equipment Rental">Heavy Equipment Rental Fleet</option>
                    <option value="Turnkey EPC Project">Turnkey EPC Integrated Project</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Target Mobilization Date</label>
                  <select
                    value={formData.estimatedTimeline}
                    onChange={(e) => setFormData({ ...formData, estimatedTimeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                    <option value="Q3/Q4 2026">Q3/Q4 2026</option>
                    <option value="2027 Planning Phase">2027 Planning Phase</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Project Site Location</label>
                <input
                  type="text"
                  placeholder="City, State / Port Terminal / Field Coordinates"
                  value={formData.projectLocation}
                  onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Technical Scope & Requirements</label>
                <textarea
                  rows="3"
                  placeholder="Describe crane tonnage needed, steel fabrication dimensions, bridge span requirements, or meeting agenda..."
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/60 flex items-center space-x-3 text-xs text-slate-300">
                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                <span>ISO 9001 & ISO 45001 Compliant Data Handling. Your specs are protected by non-disclosure protocols.</span>
              </div>

              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-lg shadow-lg flex items-center space-x-2 transition-all transform active:scale-95"
                >
                  <span>{activeTab === 'quote' ? 'Submit Proposal Request' : 'Confirm Meeting Schedule'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
