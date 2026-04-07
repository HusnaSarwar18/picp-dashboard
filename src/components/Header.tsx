import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

interface HeaderProps {
  setIsOpen: (isOpen: boolean) => void;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ setIsOpen, title }) => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6 text-slate-600" />
        </button>
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h2>
          <p className="text-xs text-slate-500 font-medium">Punjab Inclusive Cities Program (PICP)</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
          <Search className="w-4 h-4 text-slate-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search cities, DLIs..." 
            className="bg-transparent border-none outline-none text-sm text-slate-900 placeholder:text-slate-400 w-48 lg:w-64"
          />
        </div>
        
        <button className="p-2.5 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>
        
        <div className="h-8 w-px bg-slate-200 mx-2" />
        
        <button className="flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-full transition-colors">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
            <User className="w-5 h-5 text-slate-500" />
          </div>
        </button>
      </div>
    </header>
  );
};
