import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Circle, 
  ArrowRight,
  Flag,
  Activity,
  Workflow
} from 'lucide-react';
import { cn } from '../lib/utils';

export const TimelineDashboard: React.FC = () => {
  return (
    <div className="p-6 lg:p-8 space-y-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight">Project Timeline</h3>
          <p className="text-slate-500 mt-1">Annual Verification and Quarterly Monitoring Cycles</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-black uppercase">
          <Calendar className="w-4 h-4" />
          FY 2025-26
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Annual Cycle */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Workflow className="w-48 h-48" />
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-12 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Activity className="w-6 h-6" />
              </div>
              Annual Verification Cycle
            </h4>

            <div className="relative space-y-12">
              {/* Vertical Line */}
              <div className="absolute top-0 left-6 w-0.5 h-full bg-slate-100 -translate-x-1/2" />

              {[
                { month: 'Jul – Aug', title: 'Mobilization & Planning', status: 'Completed', desc: 'Team deployment, stakeholder orientation, and work plan finalization.' },
                { month: 'Sep – Oct', title: 'Data Collection & Desk Review', status: 'Completed', desc: 'Initial document review and PMDFC MIS data extraction.' },
                { month: 'Nov – Mar', title: 'Field Verification & Validation', status: 'In Progress', desc: 'On-site physical verification across 16 ULGs and data triangulation.' },
                { month: 'Apr – May', title: 'Scoring & Final Reporting', status: 'Pending', desc: 'DLI achievement calculation and final report submission.' },
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16 group"
                >
                  <div className={cn(
                    "absolute left-6 w-12 h-12 rounded-2xl border-4 border-white shadow-lg -translate-x-1/2 flex items-center justify-center transition-all group-hover:scale-110",
                    milestone.status === 'Completed' ? "bg-emerald-500 text-white" :
                    milestone.status === 'In Progress' ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-400"
                  )}>
                    {milestone.status === 'Completed' ? <CheckCircle2 className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{milestone.month}</p>
                    <h5 className="text-lg font-black text-slate-900 mb-2">{milestone.title}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-lg">{milestone.desc}</p>
                    <div className={cn(
                      "inline-block mt-4 px-3 py-1 rounded-full text-[10px] font-black uppercase",
                      milestone.status === 'Completed' ? "bg-emerald-50 text-emerald-600" :
                      milestone.status === 'In Progress' ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-400"
                    )}>
                      {milestone.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quarterly Loop */}
        <div className="space-y-6">
          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl">
            <h4 className="text-xl font-black mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Flag className="w-4 h-4" />
              </div>
              Quarterly E&S Loop
            </h4>
            <div className="space-y-8">
              {[1, 2, 3, 4].map((q) => (
                <div key={q} className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm",
                    q <= 3 ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-500"
                  )}>
                    Q{q}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Quarter {q} Monitoring</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">
                      {q <= 3 ? 'Report Submitted' : 'Upcoming (Jun 2026)'}
                    </p>
                  </div>
                  {q <= 3 && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Upcoming Deadlines</h5>
            <div className="space-y-4">
              {[
                { label: 'DLI 6 Draft Report', date: 'Apr 15, 2026', type: 'Critical' },
                { label: 'Q4 E&S Field Visit', date: 'May 02, 2026', type: 'Normal' },
                { label: 'Final Annual Report', date: 'May 30, 2026', type: 'Critical' },
              ].map((deadline, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <p className="text-sm font-bold text-slate-700">{deadline.label}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{deadline.date}</p>
                  </div>
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    deadline.type === 'Critical' ? "bg-rose-500" : "bg-blue-500"
                  )} />
                </div>
              ))}
            </div>
            <button className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl mt-8 hover:bg-slate-800 transition-colors uppercase tracking-widest text-xs">
              Sync to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
