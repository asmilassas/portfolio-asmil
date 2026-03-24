
import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { EDUCATION } from '../constants.tsx';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm">Learning Journey</h3>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Education & Certifications</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Academic foundation combined with continuous professional development in the ever-evolving tech landscape.
            </p>
            <div className="relative p-8 bg-indigo-600 rounded-3xl overflow-hidden text-white shadow-2xl">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex items-start gap-4">
                    <Award className="w-12 h-12 flex-shrink-0" />
                    <div>
                        <h5 className="text-xl font-bold mb-2">Lifetime Learner</h5>
                        <p className="text-white/80 leading-relaxed">
                            Currently exploring Advanced AI Integration and WebGPU for high-performance browser computing.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
            {EDUCATION.map((edu, idx) => (
              <div key={edu.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-white dark:bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-indigo-600">
                  <GraduationCap size={20} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500/50">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                    <h4 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                      <Calendar size={12} className="mr-1" />
                      {edu.year}
                    </span>
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-3">{edu.institution}</div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

