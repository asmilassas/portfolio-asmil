
import React from 'react';
import { Layout, Server, Cloud, Smartphone, LucideIcon } from 'lucide-react';
import { EXPERTISE } from '../constants.tsx';

const IconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Cloud,
  Smartphone,
};

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm">Specialization</h3>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Areas of Expertise</h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            With years of experience across the full stack, I deliver end-to-end solutions that are built for scale and optimized for users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE.map((item, idx) => {
            const Icon = IconMap[item.iconName];
            return (
              <div 
                key={idx}
                className="group p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-xl hover:border-indigo-500/50 dark:hover:border-indigo-500/30 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
