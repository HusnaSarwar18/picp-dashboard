import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Target, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  ArrowDownRight,
  Activity,
  Map
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { CITIES, DLIS } from '../data';
import { cn } from '../lib/utils';

const data = [
  { name: 'Jul', value: 30 },
  { name: 'Aug', value: 45 },
  { name: 'Sep', value: 40 },
  { name: 'Oct', value: 65 },
  { name: 'Nov', value: 80 },
  { name: 'Dec', value: 75 },
  { name: 'Jan', value: 90 },
];

const dliPerformance = DLIS.map(dli => ({
  name: `DLI ${dli.id}`,
  value: dli.status === 'Verified' ? 100 : dli.status === 'Pending' ? 60 : 30,
  status: dli.status
}));

export const ExecutiveDashboard: React.FC = () => {
  const pppCities = CITIES.filter((city) => city.isPPP).length;
  const verifiedCities = CITIES.filter((city) => city.status === 'Verified').length;

  return (
    <div className="space-y-8 p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-blue-700">Independent Verification Dashboard</p>
            <h3 className="mt-2 text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">Punjab Inclusive Cities Program (PICP)</h3>
            <p className="mt-2 text-sm text-slate-600 max-w-3xl">
              TOR-aligned monitoring view for annual DLI verification (DLI 1 to DLI 6), MAC and PM assessment, and quarterly E&S third-party monitoring across participating ULGs.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Annual IVA / APA Cycle', 'Quarterly E&S TPM', 'Evidence-Based Verification'].map((pill) => (
              <span key={pill} className="px-3 py-1.5 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Participating ULGs', value: `${CITIES.length}`, icon: Map, color: 'blue', trend: 'TOR Scope', trendUp: true },
          { label: 'Disbursement Linked Indicators', value: `${DLIS.length}`, icon: Target, color: 'indigo', trend: 'DLI 1-6', trendUp: true },
          { label: 'PPP Priority ULGs', value: `${pppCities}`, icon: CheckCircle2, color: 'emerald', trend: 'Kasur + Chakwal', trendUp: true },
          { label: 'Cities with Risk Flags', value: `${CITIES.filter((city) => city.riskLevel === 'High').length}`, icon: AlertCircle, color: 'amber', trend: 'Need Reconciliation', trendUp: false },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className={cn(
                "p-3 rounded-xl",
                kpi.color === 'blue' ? "bg-blue-50 text-blue-600" :
                kpi.color === 'indigo' ? "bg-indigo-50 text-indigo-600" :
                kpi.color === 'emerald' ? "bg-emerald-50 text-emerald-600" :
                "bg-amber-50 text-amber-600"
              )}>
                <kpi.icon className="w-6 h-6" />
              </div>
              <div className={cn(
                "flex items-center text-xs font-bold px-2 py-1 rounded-full",
                kpi.trendUp ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
              )}>
                {kpi.trendUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {kpi.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{kpi.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Program Progress Trend</h3>
              <p className="text-sm text-slate-500">Illustrative verification completion trend for annual reporting cycle</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-xs font-semibold bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">Monthly</button>
              <button className="px-3 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-500/20">Quarterly</button>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '12px', 
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* DLI Status Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-6">DLI Performance Snapshot</h3>
          <div className="space-y-6">
            {dliPerformance.map((dli) => (
              <div key={dli.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">{dli.name}</span>
                  <span className={cn(
                    "font-bold",
                    dli.status === 'Verified' ? "text-emerald-600" :
                    dli.status === 'Pending' ? "text-amber-600" : "text-rose-600"
                  )}>
                    {dli.value}%
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${dli.value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={cn(
                      "h-full rounded-full",
                      dli.status === 'Verified' ? "bg-emerald-500" :
                      dli.status === 'Pending' ? "bg-amber-500" : "bg-rose-500"
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3">
                <Activity className="text-blue-600 w-5 h-5" />
                <span className="text-sm font-bold text-blue-900">Overall Compliance</span>
              </div>
              <span className="text-lg font-black text-blue-600">84%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* City Status Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">City Verification Status</h3>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{verifiedCities} Verified / {CITIES.length} Total</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">City Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">DLI Progress</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Risk Level</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {CITIES.slice(0, 5).map((city) => (
                <tr key={city.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                        {city.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{city.name}</p>
                        {city.isPPP && <span className="text-[10px] font-black text-indigo-600 uppercase">PPP Focus</span>}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden min-w-[80px]">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${city.dliProgress}%` }} />
                      </div>
                      <span className="text-xs font-bold text-slate-600">{city.dliProgress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-black uppercase",
                      city.riskLevel === 'Low' ? "bg-emerald-50 text-emerald-600" :
                      city.riskLevel === 'Medium' ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
                    )}>
                      {city.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "flex items-center gap-1.5 text-sm font-semibold",
                      city.status === 'Verified' ? "text-emerald-600" :
                      city.status === 'Pending' ? "text-amber-600" : "text-rose-600"
                    )}>
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        city.status === 'Verified' ? "bg-emerald-500" :
                        city.status === 'Pending' ? "bg-amber-500" : "bg-rose-500"
                      )} />
                      {city.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};
