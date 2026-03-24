
import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Azmil.
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Azmil Ahamed. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Portfolio</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Resume</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
          </div>

          <div className="flex items-center gap-1 text-sm text-slate-400">
            Built with <Heart size={14} className="text-rose-500 fill-current" /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};
