import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  PieChart, 
  Activity,
  CheckCircle2,
  AlertCircle,
  FileText,
  Search
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';

const revenueData = [
  { name: 'Property Tax', base: 45, current: 62, color: '#3b82f6' },
  { name: 'Water Tariff', base: 30, current: 48, color: '#6366f1' },
  { name: 'Trade License', base: 20, current: 35, color: '#8b5cf6' },
  { name: 'Parking Fees', base: 15, current: 22, color: '#ec4899' },
];

export const RevenueVerification: React.FC = () => {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Revenue Verification Dashboard</h3>
          <p className="text-sm text-slate-500">Own-Source Revenue (OSR) analysis and DLI 5 compliance</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
            Download Audit Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total OSR Growth', value: '+24.5%', icon: TrendingUp, color: 'emerald', sub: 'vs Base Year' },
          { label: 'Verified Collection', value: 'PKR 1.2B', icon: DollarSign, color: 'blue', sub: 'Across 16 ULGs' },
          { label: 'Validation Status', value: '88%', icon: CheckCircle2, color: 'indigo', sub: 'Data Reconciliation' },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
          >
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center mb-4",
              kpi.color === 'emerald' ? "bg-emerald-50 text-emerald-600" :
              kpi.color === 'blue' ? "bg-blue-50 text-blue-600" : "bg-indigo-50 text-indigo-600"
            )}>
              <kpi.icon className="w-6 h-6" />
            </div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{kpi.label}</p>
            <h4 className="text-3xl font-black text-slate-900 mt-1">{kpi.value}</h4>
            <p className="text-xs text-slate-500 font-bold mt-2">{kpi.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Breakdown Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-xl font-black text-slate-900">Revenue Stream Comparison</h4>
              <p className="text-sm text-slate-500">Base Year vs. Current Year Performance</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-200 rounded-full" />
                <span className="text-xs font-bold text-slate-500">Base Year</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-xs font-bold text-slate-500">Current Year</span>
              </div>
            </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '16px', 
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Bar dataKey="base" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={40} />
                <Bar dataKey="current" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Validation Status */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm"
          >
            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Validation Checklist</h5>
            <div className="space-y-4">
              {[
                { label: 'Tax Register Reconciliation', status: 'Verified' },
                { label: 'Bank Statement Audit', status: 'Verified' },
                { label: 'Arrears Verification', status: 'Pending' },
                { label: 'Exemption Audit', status: 'Verified' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-sm font-bold text-slate-700">{item.label}</span>
                  <span className={cn(
                    "text-[10px] font-black uppercase px-2 py-0.5 rounded-full",
                    item.status === 'Verified' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                  )}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-[2.5rem] text-white shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-6 h-6 text-blue-200" />
              <h5 className="text-lg font-bold">Revenue Trend</h5>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed mb-6">
              Current collection trends indicate a potential 12% surplus over the annual target for the current fiscal year.
            </p>
            <div className="flex items-center gap-2 text-emerald-300 font-black">
              <ArrowUpRight className="w-5 h-5" />
              <span>On Track for DLI 5</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
