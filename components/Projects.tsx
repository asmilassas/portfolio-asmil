
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';

type Category = 'all' | 'frontend' | 'backend' | 'fullstack';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Category>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const availableCategories: Category[] = ['all', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const categoryLabels: Record<Category, string> = {
    all: 'All Projects',
    frontend: 'Frontend',
    backend: 'Backend',
    fullstack: 'Full Stack',
  };

  const categories = availableCategories.map(cat => ({
    label: categoryLabels[cat] || cat,
    value: cat
  }));

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h3 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm">Portfolio</h3>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Featured Works</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat.value 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-500'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {project.isClientProject && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 backdrop-blur-md">
                      Client Project
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="flex gap-4">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="View source code on GitHub"
                        className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition-all"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit live website"
                        className="p-3 rounded-full bg-white text-slate-900 hover:bg-indigo-600 hover:text-white transition-all shadow-lg"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  {project.projectCategory && (
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
                      {project.projectCategory}
                    </span>
                  )}
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                {project.liveUrl && (
                  <div className="pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                      Visit Website
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
