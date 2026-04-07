import React from 'react';
import { 
  LayoutDashboard, 
  MapPin, 
  BarChart3, 
  Workflow, 
  Triangle, 
  Camera, 
  ClipboardCheck, 
  TrendingUp, 
  Building2, 
  Users, 
  ShieldCheck, 
  FileText, 
  Calendar,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menuItems = [
  { id: 'executive', label: 'Executive Dashboard', icon: LayoutDashboard },
  { id: 'cities', label: 'City Monitoring', icon: MapPin },
  { id: 'dlis', label: 'DLI Monitoring', icon: BarChart3 },
  { id: 'methodology', label: 'Methodology Workflow', icon: Workflow },
  { id: 'triangulation', label: 'Evidence Triangulation', icon: Triangle },
  { id: 'field', label: 'Field Verification', icon: Camera },
  { id: 'scoring', label: 'MAC & PM Scoring', icon: ClipboardCheck },
  { id: 'revenue', label: 'Revenue Verification', icon: TrendingUp },
  { id: 'ppp-es', label: 'PPP & E&S Monitoring', icon: Building2 },
  { id: 'team', label: 'Team Structure', icon: Users },
  { id: 'qa', label: 'QA & Review', icon: ShieldCheck },
  { id: 'reporting', label: 'Reporting Status', icon: FileText },
  { id: 'timeline', label: 'Project Timeline', icon: Calendar },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed top-0 left-0 h-full bg-slate-900 text-slate-300 w-72 z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-slate-800",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-800">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <h1 className="font-bold text-white text-xl tracking-tight">PICP Dashboard</h1>
            </div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Digital Verification System</p>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 1024) setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                  activeTab === item.id 
                    ? "bg-blue-600/10 text-blue-400 font-semibold" 
                    : "hover:bg-slate-800/50 hover:text-white"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  activeTab === item.id ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"
                )} />
                <span className="text-sm">{item.label}</span>
                {activeTab === item.id && (
                  <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                )}
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-slate-800 bg-slate-900/50">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white">
                MS
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">M. Sarwar</p>
                <p className="text-xs text-slate-500 truncate">Team Lead</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
