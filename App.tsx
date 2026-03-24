
import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { EducationSection } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { Theme } from './types';

const App: React.FC = () => {
  // Initialize theme from localStorage or system preference immediately to avoid flicker
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Apply theme class to document element whenever theme state changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 selection:bg-indigo-500/30">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Expertise />
        <Skills />
        <Projects />
        <EducationSection />
        <Contact />
      </main>

      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
