import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Handshake, 
  Leaf, 
  Users, 
  FileText,
  Activity,
  ArrowRight
} from 'lucide-react';
import { cn } from '../lib/utils';

export const PPPESMonitoring: React.FC = () => {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">PPP & E&S Monitoring</h3>
          <p className="text-sm text-slate-500">Public-Private Partnerships and Environmental & Social Compliance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* PPP Monitoring Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
              <Handshake className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900">PPP Focus Cities</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">DLI 6 Monitoring</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Chakwal', 'Kasur'].map((city) => (
              <div key={city} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-indigo-200 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h5 className="text-lg font-black text-slate-900">{city}</h5>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full uppercase">Active</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-bold">Contract Status</span>
                    <span className="text-slate-900 font-black">Verified</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-bold">Milestones</span>
                    <span className="text-slate-900 font-black">4/5 Met</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest">PPP Verification Checklist</h5>
            {[
              'Concession Agreement Review',
              'Financial Close Verification',
              'Technical Milestone Audit',
              'Service Level Monitoring',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* E&S Monitoring Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900">E&S Compliance</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Quarterly Monitoring Loop</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Compliant', count: 12, color: 'emerald' },
              { label: 'Partial', count: 3, color: 'amber' },
              { label: 'Non-Compliant', count: 1, color: 'rose' },
              { label: 'Critical', count: 0, color: 'slate' },
            ].map((stat) => (
              <div key={stat.label} className={cn(
                "p-4 rounded-3xl border flex flex-col items-center justify-center text-center",
                stat.color === 'emerald' ? "bg-emerald-50 border-emerald-100 text-emerald-600" :
                stat.color === 'amber' ? "bg-amber-50 border-amber-100 text-amber-600" :
                stat.color === 'rose' ? "bg-rose-50 border-rose-100 text-rose-600" :
                "bg-slate-50 border-slate-100 text-slate-600"
              )}>
                <p className="text-2xl font-black">{stat.count}</p>
                <p className="text-[10px] font-black uppercase tracking-tighter">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest">Compliance Framework</h5>
            {[
              { label: 'ESCF / ESMP Implementation', status: 'Compliant' },
              { label: 'Grievance Redressal (GRM)', status: 'Compliant' },
              { label: 'Health & Safety Audit', status: 'Partial' },
              { label: 'Stakeholder Consultation', status: 'Compliant' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-bold text-slate-700">{item.label}</span>
                </div>
                <span className={cn(
                  "text-[10px] font-black uppercase px-2 py-0.5 rounded-full",
                  item.status === 'Compliant' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                )}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button className="w-full py-4 bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 hover:bg-emerald-700 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" />
              Quarterly E&S Report
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
