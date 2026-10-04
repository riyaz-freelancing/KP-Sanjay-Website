import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { X, Lock, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AdminModal = () => {
  const { 
    isAdminModalOpen, 
    setIsAdminModalOpen, 
    isAdminAuthenticated, 
    setIsAdminAuthenticated,
    leads,
    updateLeadStatus
  } = useData();

  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  if (!isAdminModalOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple admin passcode check
    if (passcode === 'admin123' || passcode === 'kp2026' || passcode === 'admin') {
      setIsAdminAuthenticated(true);
      setError('');
    } else {
      setError('Invalid Admin Passcode');
    }
  };

  const handleClose = () => {
    setIsAdminModalOpen(false);
    setPasscode('');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-left border border-slate-200 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAdminAuthenticated ? (
          /* Login Form */
          <div className="max-w-md mx-auto py-6 space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-[#06102a]">
                Admin Portal Access
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Enter your administrative passcode to view captured leads and inquiries.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Passcode
                </label>
                <input
                  type="password"
                  required
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode (e.g. admin123)"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              {error && (
                <p className="text-xs text-red-600 font-semibold">{error}</p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              >
                Access Admin Dashboard
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard Content - Leads List */
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-black text-amber-600 uppercase tracking-wider block">
                  ADMIN DASHBOARD
                </span>
                <h3 className="text-2xl font-black text-[#06102a]">
                  Captured Leads & Inquiries ({leads.length})
                </h3>
              </div>
              <button
                onClick={() => setIsAdminAuthenticated(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200"
              >
                Logout
              </button>
            </div>

            {leads.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-sm font-medium">
                No inquiries or brochure downloads recorded yet.
              </div>
            ) : (
              <div className="space-y-3">
                {leads.map((lead) => (
                  <div 
                    key={lead.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{lead.name || lead.contactName || 'Anonymous'}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                          {lead.interest || lead.category || 'General Lead'}
                        </span>
                      </div>
                      <div className="text-slate-600 font-medium space-x-3">
                        <span>📱 {lead.phone}</span>
                        {lead.email && <span>✉️ {lead.email}</span>}
                        {lead.city && <span>📍 {lead.city}</span>}
                      </div>
                      <div className="text-[10px] text-slate-400">Date: {lead.date}</div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <select
                        value={lead.status || 'New'}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                        className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 font-bold text-slate-800 text-xs"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Enrolled">Enrolled</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
