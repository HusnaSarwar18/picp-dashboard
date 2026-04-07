import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Search, 
  Users, 
  Activity,
  ArrowRight,
  AlertCircle,
  History
} from 'lucide-react';
import { cn } from '../lib/utils';

export const QAReview: React.FC = () => {
  return (
    <div className="p-6 lg:p-8 space-y-12 max-w-6xl mx-auto">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">
          <ShieldCheck className="w-3 h-3" />
          Quality Assurance
        </div>
        <h3 className="text-4xl font-black text-slate-900 tracking-tight">QA & Review Framework</h3>
        <p className="text-slate-500 leading-relaxed text-lg">
          “No finding is reported without documentary support, specialist validation, and QA review”
        </p>
      </div>

      {/* QA Flow Visualization */}
      <div className="relative py-12">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
          {[
            { title: 'Field Data', icon: Activity, status: 'Completed' },
            { title: 'Supervisor', icon: Users, status: 'Completed' },
            { title: 'Technical Review', icon: FileText, status: 'In Progress' },
            { title: 'Back-check', icon: Search, status: 'Pending' },
            { title: 'Final Sign-off', icon: CheckCircle2, status: 'Pending' },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center space-y-4 group hover:border-blue-500 transition-all"
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl mx-auto flex items-center justify-center transition-all group-hover:scale-110",
                step.status === 'Completed' ? "bg-emerald-50 text-emerald-600" :
                step.status === 'In Progress' ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-400"
              )}>
                <step.icon className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-sm font-black text-slate-900">{step.title}</h5>
                <p className={cn(
                  "text-[10px] font-black uppercase tracking-widest mt-1",
                  step.status === 'Completed' ? "text-emerald-500" :
                  step.status === 'In Progress' ? "text-blue-500" : "text-slate-400"
                )}>{step.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Review Logs */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-black text-slate-900">Technical Review Logs</h4>
            <History className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-4">
            {[
              { city: 'Chakwal', dli: 'DLI 1', issue: 'Missing GPS tag on 2 connections', status: 'Flagged' },
              { city: 'Kasur', dli: 'DLI 6', issue: 'Contract milestone verified', status: 'Approved' },
              { city: 'Arifwala', dli: 'DLI 5', issue: 'Revenue reconciliation pending', status: 'Pending' },
            ].map((log, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black text-slate-900">{log.city}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[10px] font-black text-blue-600 uppercase">{log.dli}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{log.issue}</p>
                </div>
                <span className={cn(
                  "text-[10px] font-black uppercase px-2 py-0.5 rounded-full",
                  log.status === 'Approved' ? "bg-emerald-50 text-emerald-600" :
                  log.status === 'Flagged' ? "bg-rose-50 text-rose-600" : "bg-amber-50 text-amber-600"
                )}>
                  {log.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* QA Checklist */}
        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl">
          <h4 className="text-xl font-black mb-8">QA Verification Checklist</h4>
          <div className="space-y-6">
            {[
              'Documentary evidence exists for all findings',
              'Data triangulation verified by specialist',
              'Field spot-checks meet sampling requirements',
              'Scoring logic aligned with program guidelines',
              'Environmental & Social compliance verified',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-6 h-6 rounded-lg border-2 border-slate-700 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-transparent group-hover:text-blue-500 transition-colors" />
                </div>
                <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800">
            <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all uppercase tracking-widest text-xs">
              Initiate Final Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
