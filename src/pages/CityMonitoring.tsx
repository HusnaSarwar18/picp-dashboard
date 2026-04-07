import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  MapPin, 
  Users, 
  Activity, 
  ChevronRight, 
  X,
  FileText,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { CITIES } from '../data';
import { cn } from '../lib/utils';
import { City } from '../types';

export const CityMonitoring: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = CITIES.filter(city => 
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-8 space-y-8 relative overflow-hidden">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">City Monitoring Network</h3>
          <p className="text-sm text-slate-500">Real-time verification status across 16 ULGs</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search city..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 outline-none w-64"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <Filter className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      {/* City Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCities.map((city, i) => (
          <motion.div
            key={city.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelectedCity(city)}
            className={cn(
              "group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer relative overflow-hidden",
              selectedCity?.id === city.id && "ring-2 ring-blue-500 border-transparent shadow-blue-100"
            )}
          >
            {city.isPPP && (
              <div className="absolute top-0 right-0 p-2">
                <div className="bg-indigo-600 text-white text-[8px] font-black px-2 py-0.5 rounded-bl-lg rounded-tr-lg uppercase tracking-tighter">
                  PPP Focus
                </div>
              </div>
            )}
            
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <MapPin className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <span className={cn(
                "px-2 py-0.5 rounded-full text-[10px] font-black uppercase",
                city.riskLevel === 'Low' ? "bg-emerald-50 text-emerald-600" :
                city.riskLevel === 'Medium' ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
              )}>
                {city.riskLevel} Risk
              </span>
            </div>

            <h4 className="text-lg font-bold text-slate-900 mb-1">{city.name}</h4>
            <p className="text-xs text-slate-500 mb-4">{city.region} Punjab • {city.population} Pop.</p>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-500">DLI Progress</span>
                <span className="text-blue-600">{city.dliProgress}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${city.dliProgress}%` }}
                  className="h-full bg-blue-500 rounded-full"
                />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  city.status === 'Verified' ? "bg-emerald-500" :
                  city.status === 'Pending' ? "bg-amber-500" : "bg-rose-500"
                )} />
                <span className="text-xs font-bold text-slate-700">{city.status}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Side Panel */}
      <AnimatePresence>
        {selectedCity && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCity(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">City Details</h3>
                  <button 
                    onClick={() => setSelectedCity(null)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-400" />
                  </button>
                </div>

                <div className="bg-slate-900 rounded-3xl p-6 text-white mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <MapPin className="w-24 h-24" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Selected ULG</span>
                    <h4 className="text-3xl font-black mt-1">{selectedCity.name}</h4>
                    <div className="flex gap-4 mt-4">
                      <div>
                        <p className="text-slate-400 text-[10px] uppercase font-bold">Population</p>
                        <p className="text-sm font-bold">{selectedCity.population}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10px] uppercase font-bold">Region</p>
                        <p className="text-sm font-bold">{selectedCity.region}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <section>
                    <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Verification Status</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <Activity className="w-5 h-5 text-blue-600 mb-2" />
                        <p className="text-xs text-slate-500 font-bold">DLI Progress</p>
                        <p className="text-xl font-black text-slate-900">{selectedCity.dliProgress}%</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
                        <p className="text-xs text-slate-500 font-bold">Risk Level</p>
                        <p className="text-xl font-black text-slate-900">{selectedCity.riskLevel}</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Evidence Summary</h5>
                    <div className="space-y-3">
                      {[
                        { label: 'ULG Records', status: 'Verified', icon: FileText },
                        { label: 'Field Spot Checks', status: selectedCity.status, icon: MapPin },
                        { label: 'MIS Data', status: 'Verified', icon: Activity },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl">
                          <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-bold text-slate-700">{item.label}</span>
                          </div>
                          <span className={cn(
                            "text-[10px] font-black uppercase px-2 py-0.5 rounded-full",
                            item.status === 'Verified' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                          )}>
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Assigned Team</h5>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                        +2
                      </div>
                    </div>
                  </section>
                </div>

                <div className="mt-12">
                  <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all uppercase tracking-widest text-xs">
                    Generate City Report
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
