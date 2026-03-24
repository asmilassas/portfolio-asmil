
import React from 'react';
import { SKILLS } from '../constants.tsx';

export const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-6">
            <h3 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm">My Arsenal</h3>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Technical Proficiency</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              I believe in using the right tool for the job. My stack is constantly evolving to stay at the cutting edge of industry standards.
            </p>
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <span key={cat} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="space-y-3 group">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img src={skill.icon} className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300" alt={skill.name} />
                    <span className="font-bold text-slate-800 dark:text-slate-200">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
