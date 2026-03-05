import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${portfolioConfig.contactInfo.email}?subject=Inquiry from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-white">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* HEADER */}
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4">
              Let's build something <span className="text-blue-600">extraordinary.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Currently accepting new projects and collaborations. Drop me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            
            {/* CONTACT CARDS GRID */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email Card */}
              <a href={`mailto:${portfolioConfig.contactInfo.email}`} 
                 className="group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                <p className="text-slate-900 font-semibold break-all">{portfolioConfig.contactInfo.email}</p>
                <div className="mt-4 flex items-center text-blue-600 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  SEND MAIL <ArrowRight size={14} className="ml-1" />
                </div>
              </a>

              {/* Phone Card */}
              <a href={`tel:${portfolioConfig.contactInfo.phone}`} 
                 className="group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-green-200 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-green-500/5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                <p className="text-slate-900 font-semibold">{portfolioConfig.contactInfo.phone}</p>
                <div className="mt-4 flex items-center text-slate-900 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  CALL NOW <ArrowRight size={14} className="ml-1" />
                </div>
              </a>

              {/* Location Card - Spans 2 columns on tablet/desktop */}
              <div className="sm:col-span-2 p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MapPin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Location</p>
                    <p className="font-semibold text-lg">{portfolioConfig.contactInfo.location}</p>
                  </div>
                </div>
                <SocialLinks color="text-white" />
              </div>

            </div>

            {/* CTA SIDEBAR */}
            <div className="md:col-span-2 flex flex-col justify-center p-8 rounded-3xl bg-blue-600 text-white relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-32 h-32 bg-white/10 rounded-full" />
               
               <h3 className="text-2xl font-bold mb-4 relative z-10">Prefer a quick chat?</h3>
               <p className="text-blue-100 mb-8 relative z-10">
                 Skip the forms and click the button below to open your email client directly.
               </p>
               
               <Button 
                onClick={handleSubmit}
                className="w-full py-7 rounded-2xl bg-white text-blue-600 hover:bg-slate-100 font-bold text-lg shadow-lg"
               >
                 Write to me <Send size={18} className="ml-2" />
               </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
