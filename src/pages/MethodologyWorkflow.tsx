import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Workflow, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Info,
  ArrowRight,
  ShieldCheck,
  FileText,
  Search,
  Users
} from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data';
import { cn } from '../lib/utils';

export const MethodologyWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(METHODOLOGY_STEPS[0]);

  return (
    <div className="p-6 lg:p-8 space-y-12">
      <div className="max-w-3xl">
        <h3 className="text-3xl font-black text-slate-900 tracking-tight">Verification Methodology</h3>
        <p className="text-slate-500 mt-2 leading-relaxed">
          Our independent verification process follows a rigorous, evidence-based approach to ensure transparency and objectivity in program monitoring.
        </p>
      </div>

      {/* Interactive Step Flow */}
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
          {METHODOLOGY_STEPS.map((step, i) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step)}
              className="group flex flex-col items-center text-center gap-4"
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300",
                activeStep.id === step.id 
                  ? "bg-blue-600 border-blue-100 text-white scale-110 shadow-xl shadow-blue-500/20" 
                  : "bg-white border-slate-50 text-slate-400 group-hover:border-blue-50 group-hover:text-blue-500"
              )}>
                <span className="text-sm font-black">{step.id}</span>
              </div>
              <div className="space-y-1">
                <p className={cn(
                  "text-xs font-black uppercase tracking-widest transition-colors",
                  activeStep.id === step.id ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                )}>
                  {step.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Step Details Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 bg-slate-50 border-r border-slate-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                Step {activeStep.id} of 7
              </div>
              <h4 className="text-4xl font-black text-slate-900 mb-6 leading-tight">{activeStep.title}</h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {activeStep.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <Users className="w-4 h-4" />
                  <span>Assigned Specialists</span>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-10 lg:p-16 space-y-8">
              <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest">Key Activities & Deliverables</h5>
              <div className="space-y-4">
                {activeStep.details.map((detail, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors group"
                  >
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <p className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{detail}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-8">
                <button className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
                  <span>View Methodology Document</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Guiding Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {[
          { title: 'Independence', icon: ShieldCheck, desc: 'Third-party objective verification without bias.' },
          { title: 'Evidence-Based', icon: FileText, desc: 'Every finding is backed by documentary support.' },
          { title: 'Triangulation', icon: Workflow, desc: 'Multi-source data reconciliation for accuracy.' },
        ].map((principle, i) => (
          <div key={i} className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4">
              <principle.icon className="w-6 h-6 text-slate-400" />
            </div>
            <h5 className="text-lg font-black text-slate-900 mb-2">{principle.title}</h5>
            <p className="text-sm text-slate-500 leading-relaxed">{principle.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
