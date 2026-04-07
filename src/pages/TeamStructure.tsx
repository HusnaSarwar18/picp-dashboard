import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  ShieldCheck, 
  HardHat, 
  Calculator, 
  Building2, 
  UserCircle,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react';
import { TEAM_STRUCTURE } from '../data';
import { cn } from '../lib/utils';

export const TeamStructure: React.FC = () => {
  return (
    <div className="p-6 lg:p-8 space-y-12 max-w-6xl mx-auto">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">
          <Users className="w-3 h-3" />
          Project Team
        </div>
        <h3 className="text-4xl font-black text-slate-900 tracking-tight">Consultancy Team Structure</h3>
        <p className="text-slate-500 leading-relaxed">
          A multi-disciplinary team of experts dedicated to the rigorous verification and monitoring of the Punjab Inclusive Cities Program.
        </p>
      </div>

      {/* Org Chart Style Layout */}
      <div className="space-y-12">
        {/* Team Lead */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl border border-slate-800 w-full max-w-md text-center group"
          >
            <div className="w-20 h-20 bg-blue-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-black mb-1">M. Sarwar</h4>
            <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-4">Team Lead / QA & Reporting</p>
            <div className="flex justify-center gap-4">
              <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4 text-slate-400" />
              </button>
              <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Specialist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_STRUCTURE.filter(t => !t.role.includes('Team Lead')).map((team, i) => (
            <motion.div
              key={team.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
                team.role.includes('Infrastructure') ? "bg-blue-50 text-blue-600" :
                team.role.includes('Finance') ? "bg-emerald-50 text-emerald-600" :
                team.role.includes('Institutional') ? "bg-indigo-50 text-indigo-600" :
                "bg-amber-50 text-amber-600"
              )}>
                {team.role.includes('Infrastructure') ? <HardHat className="w-6 h-6" /> :
                 team.role.includes('Finance') ? <Calculator className="w-6 h-6" /> :
                 team.role.includes('Institutional') ? <Building2 className="w-6 h-6" /> :
                 <Users className="w-6 h-6" />}
              </div>
              <h5 className="text-lg font-black text-slate-900 mb-1">{team.role}</h5>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{team.focus}</p>
              
              <div className="space-y-3">
                {team.members.map((member, j) => (
                  <div key={j} className="flex items-center gap-3 p-2 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-slate-400">
                      {member.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{member}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Role Mapping Panel */}
      <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-200">
        <h4 className="text-2xl font-black text-slate-900 mb-8 text-center">Specialist Role Mapping</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { role: 'Infrastructure', dli: 'DLI 1 & 2', desc: 'Water, Sewerage & Solid Waste' },
            { role: 'Finance', dli: 'DLI 5', desc: 'Revenue & Financial Audits' },
            { role: 'Institutional', dli: 'MAC / PM', desc: 'Governance & Compliance' },
            { role: 'E&S', dli: 'Compliance', desc: 'Environmental & Social Monitoring' },
          ].map((map, i) => (
            <div key={i} className="space-y-2">
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{map.role}</p>
              <p className="text-lg font-black text-slate-900">{map.dli}</p>
              <p className="text-sm text-slate-500">{map.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
