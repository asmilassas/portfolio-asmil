import React from 'react';
import { ArrowRight, Download, MousePointer2, Github } from 'lucide-react';
import profileImg from '../assets/image.png'; 

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/5 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <h2 className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                <MousePointer2 size={14} className="mr-2" />
                Available for new opportunities
              </h2>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Azmil Ahamed</span>
              </h1>

              <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400">
                Undergraduate Software Engineer.
              </p>

              <p className="max-w-xl text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                 I am a passionate undergraduate developer looking for an internship to gain hands on industry experience. 
  I focus on writing clean, maintainable code and building responsive web applications while continuously improving my skills through projects and teamwork.
</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-indigo-500/20"
              >
                View My Projects
                <ArrowRight size={20} className="ml-2" />
              </a>

              <a
                href="https://github.com/ramzyhafeel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>

              <button
                className="inline-flex items-center px-8 py-3 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                Download CV
                <Download size={20} className="ml-2" />
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 grayscale opacity-60">
              {/* Tech stack mini icons */}
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" className="w-8 h-8" alt="React" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" className="w-8 h-8" alt="TypeScript" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" className="w-8 h-8" alt="Node.js" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="w-10 h-10" alt="AWS" />
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 blur-2xl transition duration-500 animate-pulse" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
