import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Droplets, 
  Trash2, 
  ShieldCheck, 
  BarChart3, 
  TrendingUp, 
  Handshake,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Info,
  FileSearch,
  MapPin
} from 'lucide-react';
import { DLIS } from '../data';
import { cn } from '../lib/utils';
import { DLI } from '../types';

const iconMap: Record<string, any> = {
  Droplets,
  Trash2,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  Handshake
};

export const DLIMonitoring: React.FC = () => {
  const [activeDLI, setActiveDLI] = useState<DLI>(DLIS[0]);

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-slate-900">DLI Monitoring Framework</h3>
        <p className="text-sm text-slate-500">Detailed verification protocols for 6 Disbursement Linked Indicators</p>
      </div>

      <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar">
        {DLIS.map((dli) => {
          const Icon = iconMap[dli.icon];
          return (
            <button
              key={dli.id}
              onClick={() => setActiveDLI(dli)}
              className={cn(
                "flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300",
                activeDLI.id === dli.id 
                  ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/20" 
                  : "bg-white border-slate-200 text-slate-600 hover:border-blue-200"
              )}
            >
              <Icon className={cn("w-5 h-5", activeDLI.id === dli.id ? "text-white" : "text-slate-400")} />
              <span className="font-bold whitespace-nowrap">DLI {dli.id}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          key={activeDLI.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                  {React.createElement(iconMap[activeDLI.icon], { className: "w-8 h-8 text-blue-600" })}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">{activeDLI.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[10px] font-black uppercase",
                      activeDLI.status === 'Verified' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>
                      {activeDLI.status}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-bold text-slate-500">{activeDLI.riskLevel} Risk</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">{activeDLI.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <FileSearch className="w-4 h-4 text-blue-600" />
                  <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest">Verification Method</h5>
                </div>
                <p className="text-sm font-bold text-slate-700 leading-relaxed">{activeDLI.verificationMethod}</p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest">Field Requirement</h5>
                </div>
                <div className="flex items-center gap-2">
                  {activeDLI.fieldVerification ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm font-bold text-slate-700">Physical Inspection Required</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-5 h-5 text-slate-400" />
                      <span className="text-sm font-bold text-slate-700">Desk-Based Verification Only</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Evidence Sources & Documentation</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeDLI.evidenceSources.map((source, i) => (
                <div key={i} className="group p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-50">
                    <Info className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
                  </div>
                  <p className="text-sm font-bold text-slate-700">{source}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white shadow-xl">
            <h5 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4">DLI Insights</h5>
            <div className="space-y-6">
              <div>
                <p className="text-3xl font-black">16/16</p>
                <p className="text-xs text-slate-400 font-bold mt-1">Cities Reporting Data</p>
              </div>
              <div className="h-px bg-slate-700" />
              <div>
                <p className="text-3xl font-black">84%</p>
                <p className="text-xs text-slate-400 font-bold mt-1">Average Compliance Rate</p>
              </div>
              <div className="h-px bg-slate-700" />
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <AlertTriangle className="text-amber-400 w-5 h-5" />
                <p className="text-xs font-bold">3 Cities flagged for data reconciliation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
