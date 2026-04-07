import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ExecutiveDashboard } from './pages/ExecutiveDashboard';
import { CityMonitoring } from './pages/CityMonitoring';
import { DLIMonitoring } from './pages/DLIMonitoring';
import { MethodologyWorkflow } from './pages/MethodologyWorkflow';
import { EvidenceTriangulation } from './pages/EvidenceTriangulation';
import { FieldVerification } from './pages/FieldVerification';
import { ScoringDashboard } from './pages/ScoringDashboard';
import { RevenueVerification } from './pages/RevenueVerification';
import { PPPESMonitoring } from './pages/PPPESMonitoring';
import { TeamStructure } from './pages/TeamStructure';
import { QAReview } from './pages/QAReview';
import { ReportingDashboard } from './pages/ReportingDashboard';
import { TimelineDashboard } from './pages/TimelineDashboard';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('executive');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'executive': return <ExecutiveDashboard />;
      case 'cities': return <CityMonitoring />;
      case 'dlis': return <DLIMonitoring />;
      case 'methodology': return <MethodologyWorkflow />;
      case 'triangulation': return <EvidenceTriangulation />;
      case 'field': return <FieldVerification />;
      case 'scoring': return <ScoringDashboard />;
      case 'revenue': return <RevenueVerification />;
      case 'ppp-es': return <PPPESMonitoring />;
      case 'team': return <TeamStructure />;
      case 'qa': return <QAReview />;
      case 'reporting': return <ReportingDashboard />;
      case 'timeline': return <TimelineDashboard />;
      default: return <ExecutiveDashboard />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'executive': return 'Executive Overview';
      case 'cities': return 'City Monitoring Network';
      case 'dlis': return 'DLI Monitoring Framework';
      case 'methodology': return 'Verification Methodology';
      case 'triangulation': return 'Evidence Triangulation';
      case 'field': return 'Field Verification Logs';
      case 'scoring': return 'MAC & PM Scoring';
      case 'revenue': return 'Revenue Verification';
      case 'ppp-es': return 'PPP & E&S Monitoring';
      case 'team': return 'Team Structure';
      case 'qa': return 'QA & Review Framework';
      case 'reporting': return 'Reporting Status';
      case 'timeline': return 'Project Timeline';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="lg:ml-72 min-h-screen flex flex-col">
        <Header setIsOpen={setIsSidebarOpen} title={getTitle()} />
        
        <div className="flex-1 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        <footer className="p-6 border-t border-slate-200 bg-white text-center">
          <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
            © 2026 Digital Verification & Monitoring Dashboard • Punjab Inclusive Cities Program
          </p>
        </footer>
      </main>
    </div>
  );
}
