import React from 'react';
import { motion } from 'motion/react';
import { 
  Camera, 
  MapPin, 
  User, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ChevronRight,
  Search,
  Filter,
  Image as ImageIcon,
  Navigation
} from 'lucide-react';
import { FIELD_RECORDS } from '../data';
import { cn } from '../lib/utils';

export const FieldVerification: React.FC = () => {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Field Verification Logs</h3>
          <p className="text-sm text-slate-500">Real-time inspection data from on-site consultants</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter Logs
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors">
            New Inspection
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inspection List */}
        <div className="space-y-4">
          {FIELD_RECORDS.map((record, i) => (
            <motion.div
              key={record.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <Camera className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{record.cityName}</h4>
                    <p className="text-xs text-slate-500 font-medium">{record.id} • {record.timestamp}</p>
                  </div>
                </div>
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black uppercase",
                  record.status === 'Verified' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                )}>
                  {record.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <User className="w-4 h-4 text-slate-400" />
                  <span className="font-bold">{record.inspector}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Navigation className="w-4 h-4 text-slate-400" />
                  <span className="font-bold truncate">{record.gps}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Inspection Checklist</p>
                {record.checklist.map((item, j) => (
                  <div key={j} className="flex items-center justify-between text-xs p-2 bg-slate-50 rounded-lg">
                    <span className="font-medium text-slate-700">{item.item}</span>
                    {item.verified ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-rose-500" />}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Map / Detail View */}
        <div className="space-y-6">
          <div className="bg-slate-100 rounded-[2.5rem] h-[400px] relative overflow-hidden border border-slate-200">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-4">
              <MapPin className="w-12 h-12 opacity-20" />
              <p className="text-sm font-bold uppercase tracking-widest opacity-40">Interactive Field Map</p>
            </div>
            {/* Mock Map Markers */}
            <div className="absolute top-1/4 left-1/3 p-2 bg-white rounded-full shadow-xl border-2 border-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
            </div>
            <div className="absolute bottom-1/3 right-1/4 p-2 bg-white rounded-full shadow-xl border-2 border-emerald-500">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Evidence Capture</h5>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 group hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                  <ImageIcon className="w-6 h-6 text-slate-300 group-hover:text-blue-400" />
                  <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-500">Photo {i}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="text-blue-600 w-5 h-5" />
                <div>
                  <p className="text-xs font-black text-blue-900 uppercase">Sync Status</p>
                  <p className="text-xs text-blue-700 font-bold">Last synced 2m ago</p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-blue-600 text-white text-[10px] font-black rounded-lg uppercase">Sync Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
