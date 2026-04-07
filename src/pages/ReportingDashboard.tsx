import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Download, 
  ExternalLink,
  Search,
  Filter,
  History,
  MessageSquare
} from 'lucide-react';
import { cn } from '../lib/utils';

export const ReportingDashboard: React.FC = () => {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Reporting Status</h3>
          <p className="text-sm text-slate-500">Draft and Final report tracking for PICP stakeholders</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors">
            Generate New Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Report Status List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h4 className="text-lg font-bold text-slate-900">Active Reports</h4>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-slate-400" />
                <Filter className="w-4 h-4 text-slate-400" />
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { title: 'Annual IVA Verification Report - FY 2025-26', type: 'Draft', city: 'All 16 ULGs', status: 'In Review', date: 'Mar 20, 2026' },
                { title: 'Quarterly E&S Monitoring Report - Q3', type: 'Final', city: 'Regional Focus', status: 'Approved', date: 'Mar 15, 2026' },
                { title: 'DLI 6 PPP Transaction Report - Chakwal', type: 'Draft', city: 'Chakwal', status: 'Pending', date: 'Mar 10, 2026' },
                { title: 'Revenue Verification Audit - Kasur', type: 'Final', city: 'Kasur', status: 'Approved', date: 'Mar 05, 2026' },
              ].map((report, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 hover:bg-slate-50/50 transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center",
                        report.type === 'Final' ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                      )}>
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{report.title}</h5>
                        <p className="text-xs text-slate-500 font-medium mt-1">{report.city} • {report.date}</p>
                        <div className="flex items-center gap-2 mt-3">
                          <span className={cn(
                            "px-2 py-0.5 rounded-full text-[10px] font-black uppercase",
                            report.status === 'Approved' ? "bg-emerald-50 text-emerald-600" :
                            report.status === 'In Review' ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"
                          )}>
                            {report.status}
                          </span>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{report.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-blue-600">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-blue-600">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Issues Log & Feedback */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-lg font-bold text-slate-900">Issues Log</h4>
              <AlertCircle className="w-5 h-5 text-rose-500" />
            </div>
            <div className="space-y-6">
              {[
                { city: 'Chiniot', issue: 'Data inconsistency in DLI 2', priority: 'High' },
                { city: 'Jampur', issue: 'Field access delayed', priority: 'Medium' },
                { city: 'Rajanpur', issue: 'Incomplete revenue records', priority: 'High' },
              ].map((issue, i) => (
                <div key={i} className="flex gap-4">
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0",
                    issue.priority === 'High' ? "bg-rose-500" : "bg-amber-500"
                  )} />
                  <div>
                    <p className="text-sm font-bold text-slate-900">{issue.city}</p>
                    <p className="text-xs text-slate-500 font-medium">{issue.issue}</p>
                    <span className={cn(
                      "text-[10px] font-black uppercase mt-2 inline-block",
                      issue.priority === 'High' ? "text-rose-600" : "text-amber-600"
                    )}>{issue.priority} Priority</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-3 bg-slate-50 text-slate-600 font-black rounded-2xl border border-slate-100 mt-8 hover:bg-slate-100 transition-colors uppercase tracking-widest text-[10px]">
              View All Issues
            </button>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-blue-400" />
              <h5 className="text-lg font-bold">Client Feedback</h5>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-xs text-slate-400 font-bold uppercase mb-2">World Bank Review</p>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "The methodology for DLI 5 verification is robust. Please ensure similar depth for DLI 2 in the final report."
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-xs text-slate-400 font-bold uppercase mb-2">PMDFC Comment</p>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "City ranking table needs to include population weighting as per program guidelines."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
