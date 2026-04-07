import React from 'react';
import { motion } from 'motion/react';
import { 
  Triangle, 
  Building2, 
  Database, 
  Monitor, 
  Camera,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';

export const EvidenceTriangulation: React.FC = () => {
  return (
    <div className="p-6 lg:p-8 space-y-12 max-w-6xl mx-auto">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest">
          <Triangle className="w-3 h-3" />
          Verification Core
        </div>
        <h3 className="text-4xl font-black text-slate-900 tracking-tight">Evidence Triangulation</h3>
        <p className="text-slate-500 leading-relaxed">
          Our methodology relies on reconciling data from four distinct sources to ensure 100% accuracy in DLI verification.
        </p>
      </div>

      {/* Visual Triangle/Diamond Layout */}
      <div className="relative py-20">
        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 border-8 border-white"
          >
            <ShieldCheck className="w-12 h-12 text-white" />
          </motion.div>
        </div>

        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 800 600">
          <line x1="400" y1="100" x2="400" y2="500" stroke="#3b82f6" strokeWidth="4" strokeDasharray="8 8" />
          <line x1="150" y1="300" x2="650" y2="300" stroke="#3b82f6" strokeWidth="4" strokeDasharray="8 8" />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-64 relative z-10">
          {[
            { title: 'ULG Records', icon: Building2, color: 'blue', pos: 'top', desc: 'Primary registers, logs, and financial statements from the city.' },
            { title: 'PMDFC Data', icon: Database, color: 'indigo', pos: 'left', desc: 'Centralized program data and historical performance records.' },
            { title: 'MIS Outputs', icon: Monitor, color: 'emerald', pos: 'right', desc: 'Real-time dashboard metrics and automated reporting systems.' },
            { title: 'Field Observations', icon: Camera, color: 'amber', pos: 'bottom', desc: 'On-site physical verification and stakeholder interviews.' },
          ].map((source, i) => (
            <motion.div
              key={source.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                source.color === 'blue' ? "bg-blue-50 text-blue-600" :
                source.color === 'indigo' ? "bg-indigo-50 text-indigo-600" :
                source.color === 'emerald' ? "bg-emerald-50 text-emerald-600" :
                "bg-amber-50 text-amber-600"
              )}>
                <source.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">{source.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{source.desc}</p>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-700">Verified Source</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reconciliation Logic Panel */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Triangle className="w-64 h-64" />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-3xl font-black mb-6">Multi-Source Reconciliation Logic</h4>
            <div className="space-y-6">
              {[
                { label: 'Consistency Check', desc: 'Cross-referencing ULG registers with PMDFC MIS data.' },
                { label: 'Physical Validation', desc: 'Matching field observations with reported connection logs.' },
                { label: 'Financial Alignment', desc: 'Reconciling bank statements with tax collection records.' },
              ].map((logic, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{logic.label}</p>
                    <p className="text-slate-400 text-sm">{logic.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="text-blue-400 w-6 h-6" />
              <h5 className="text-lg font-bold">Conflict Resolution Protocol</h5>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              In cases of data mismatch exceeding 5%, our protocol triggers an automatic "Deep Dive" verification involving senior specialists and additional field sampling.
            </p>
            <button className="w-full py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-blue-50 transition-colors uppercase tracking-widest text-xs">
              View Conflict Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
