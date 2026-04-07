import React from 'react';
import { motion } from 'motion/react';
import { 
  ClipboardCheck, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  TrendingDown, 
  Trophy,
  Activity,
  DollarSign,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { CITIES } from '../data';
import { cn } from '../lib/utils';

export const ScoringDashboard: React.FC = () => {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">MAC & PM Scoring Dashboard</h3>
          <p className="text-sm text-slate-500">Minimum Access Conditions and Performance Measurement</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-3">
            <Trophy className="text-emerald-600 w-5 h-5" />
            <div>
              <p className="text-[10px] font-black text-emerald-900 uppercase">Top Performer</p>
              <p className="text-sm font-black text-emerald-600">Kasur (90%)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* MAC Compliance Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h4 className="text-lg font-bold text-slate-900">MAC Compliance Status</h4>
            <span className="text-xs font-bold text-slate-500">16 Cities Tracked</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">City</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Audit</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Staffing</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Budget</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Overall</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {CITIES.slice(0, 8).map((city) => (
                  <tr key={city.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-900">{city.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </td>
                    <td className="px-6 py-4">
                      {city.dliProgress > 50 ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <AlertCircle className="w-5 h-5 text-amber-500" />}
                    </td>
                    <td className="px-6 py-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2 py-0.5 rounded-full text-[10px] font-black uppercase",
                        city.dliProgress > 50 ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                      )}>
                        {city.dliProgress > 50 ? 'Pass' : 'Fail'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* PM Scoring & Funding */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <DollarSign className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <h5 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">Funding Implications</h5>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-black">$12.4M</p>
                  <p className="text-xs text-slate-400 font-bold mt-1">Total Eligible Funding</p>
                </div>
                <div className="h-px bg-slate-700" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xl font-bold text-emerald-400">82%</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">MAC Pass Rate</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-blue-400">64.5</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Avg PM Score</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
          >
            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">City Ranking (PM Score)</h5>
            <div className="space-y-4">
              {CITIES.sort((a, b) => b.dliProgress - a.dliProgress).slice(0, 5).map((city, i) => (
                <div key={city.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-slate-300">#{i + 1}</span>
                    <p className="text-sm font-bold text-slate-700">{city.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${city.dliProgress}%` }} />
                    </div>
                    <span className="text-xs font-black text-slate-900">{city.dliProgress}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
