
import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone, Github, Linkedin, Twitter, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "asmil.assas@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-950 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row">
          
          <div className="lg:w-2/5 bg-indigo-600 p-12 text-white space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Let's connect</h2>
              <p className="text-indigo-100 text-lg">Have a project in mind? Let's talk about how I can help bring your ideas to life.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-medium text-indigo-200">Email Me</div>
                  <div className="font-bold flex items-center gap-2">
                    {email}
                    <button 
                      onClick={copyToClipboard}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      {copied ? <Check size={16} className="text-green-300" /> : <Send size={16} />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-medium text-indigo-200">Location</div>
                  <div className="font-bold">Colombo, Sri Lanka</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/asmilassas" target="_blank" className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/asmilahamed/" target="_blank" className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-3/5 p-12">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me more about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all dark:text-white resize-none"
                />
              </div>
              <div className="sm:col-span-2 pt-4">
                <button 
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 transition-all"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
