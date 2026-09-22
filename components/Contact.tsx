
import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone, Github, Linkedin, Twitter, Check, AlertCircle, Loader2 } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  'bot-field': string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "asmil.assas@gmail.com";

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    'bot-field': '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = new URLSearchParams({
        'form-name': 'contact',
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        'bot-field': formData['bot-field'],
      }).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          'bot-field': '',
        });
        setErrors({});
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
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
                      aria-label="Copy email to clipboard"
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
              <a 
                href="https://github.com/ramzyhafeel" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/asmilahamed/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter Profile"
                className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-3/5 p-12">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              noValidate
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Hidden Netlify form identifiers */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human: 
                  <input 
                    name="bot-field" 
                    value={formData['bot-field']} 
                    onChange={handleChange} 
                  />
                </label>
              </p>

              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input 
                  id="contact-name"
                  type="text" 
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.name ? 'border-rose-500 dark:border-rose-500 focus:border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
                  } focus:ring-1 outline-none transition-all dark:text-white`}
                />
                {errors.name && (
                  <p className="text-xs text-rose-500 flex items-center gap-1 font-medium pt-1">
                    <AlertCircle size={13} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input 
                  id="contact-email"
                  type="email" 
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.email ? 'border-rose-500 dark:border-rose-500 focus:border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
                  } focus:ring-1 outline-none transition-all dark:text-white`}
                />
                {errors.email && (
                  <p className="text-xs text-rose-500 flex items-center gap-1 font-medium pt-1">
                    <AlertCircle size={13} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2 space-y-2">
                <label htmlFor="contact-subject" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input 
                  id="contact-subject"
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                />
              </div>

              <div className="sm:col-span-2 space-y-2">
                <label htmlFor="contact-message" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea 
                  id="contact-message"
                  name="message"
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me more about your project..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${
                    errors.message ? 'border-rose-500 dark:border-rose-500 focus:border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
                  } focus:ring-1 outline-none transition-all dark:text-white resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 flex items-center gap-1 font-medium pt-1">
                    <AlertCircle size={13} />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2 pt-2 space-y-4">
                <div aria-live="polite" className="min-h-[1.5rem]">
                  {status === 'success' && (
                    <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-sm font-medium flex items-center gap-2">
                      <Check size={18} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-rose-800 dark:text-rose-300 text-sm font-medium flex items-center gap-2">
                      <AlertCircle size={18} className="text-rose-600 dark:text-rose-400 flex-shrink-0" />
                      <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
                    </div>
                  )}
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
