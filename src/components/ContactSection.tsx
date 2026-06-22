import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Corporate Consultation',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        subject: 'General Corporate Consultation',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-32 bg-white dark:bg-[#0A192F] scroll-mt-24 border-t border-gray-159 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title branding text */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-[#D4AF37] text-sm font-semibold uppercase tracking-widest font-mono">
            <Mail className="h-4.5 w-4.5" />
            Liaison Office
          </div>
          <h2 className="font-serif text-4xl md:text-[54px] lg:text-[56px] leading-[1.12] font-medium tracking-tight text-[#0A192F] dark:text-white">
            Establish Direct Communication
          </h2>
          <p className="text-base text-gray-500 dark:text-slate-400 max-w-xl mx-auto font-sans">
            Reach out via our digital channel, call our principal advisors, or arrange an in-person meeting at our Gwalior office.
          </p>
        </div>

        {/* Combined Layout Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Office Details Card */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-7">
            
            {/* Visual Address card */}
            <div className="rounded-[32px] border border-[#EAEAEA] dark:border-slate-800 bg-neutral-bg/40 dark:bg-slate-900/10 p-8 space-y-8 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.08)] transition-all duration-300">
              
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium text-[#0A192F] dark:text-white">
                  Headquarters Coordinates
                </h3>
                <p className="text-[11.5px] text-gray-450 dark:text-slate-450 uppercase tracking-wider font-mono">GUPTA ADARSH & CO.</p>
              </div>

              {/* Specific Items details */}
              <div className="space-y-5 text-sm text-gray-700 dark:text-slate-300">
                
                {/* Location */}
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0A192F] dark:text-white text-xs uppercase tracking-wider">Physical Office</strong>
                    <span className="text-sm mt-1 block leading-relaxed">
                      Krishna Kunj,<br />
                      2113 Gandhi Road, Behind Kirar Bhawan,<br />
                      Thatipur, Gwalior, MP, India, Pin: 474011
                    </span>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex gap-4 pt-4 border-t border-[#EAEAEA] dark:border-slate-800">
                  <Phone className="h-6 w-6 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0A192F] dark:text-white text-xs uppercase tracking-wider">Primary Operations</strong>
                    <a href="tel:+918319571654" className="text-sm block text-accent-gold font-bold hover:underline mt-1">
                      +91 83195 71654
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 pt-4 border-t border-[#EAEAEA] dark:border-slate-800">
                  <Mail className="h-6 w-6 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0A192F] dark:text-white text-xs uppercase tracking-wider">Secure Email Box</strong>
                    <span className="text-sm block text-gray-500 dark:text-slate-400 mt-1">
                      info@guptaadarshca.in (Placeholder)
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 pt-4 border-t border-[#EAEAEA] dark:border-slate-800">
                  <Clock className="h-6 w-6 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0A192F] dark:text-white text-xs uppercase tracking-wider">Liaison Hours</strong>
                    <span className="text-sm block mt-1">
                      Open Daily (Closes 8:00 PM)
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick alert bar */}
            <div className="p-5 rounded-2xl border border-emerald-500/25 bg-emerald-50/10 dark:bg-emerald-950/10 text-sm text-slate-700 dark:text-slate-300 flex gap-2.5 items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span>Executive CA Gupta is available for advisory today.</span>
            </div>

          </div>

          {/* Center Column: Quick Action Input Form Card */}
          <div className="lg:col-span-4 bg-white dark:bg-[#122B45]/15 rounded-[32px] border border-[#EAEAEA] dark:border-slate-800 p-8 flex flex-col justify-between shadow-sm hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.08)] transition-all duration-300">
            
            <form onSubmit={handleSubmit} className="space-y-5.5">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0A192F] dark:text-white">
                  Quick Query Dispatch
                </h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Fill detail parameters. We call you directly within minutes.</p>
              </div>

              {/* Input: Full Name */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300">Name / Proprietorship Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Mishra Agro Traders"
                  className="w-full bg-[#F8F9FB] dark:bg-slate-900 border border-[#EAEAEA] dark:border-slate-800 rounded-xl py-3 px-4.5 text-xs md:text-sm outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold"
                />
              </div>

              {/* Input: Phone */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300">Active Mobile Line</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 83195 71654"
                  className="w-full bg-[#F8F9FB] dark:bg-slate-900 border border-[#EAEAEA] dark:border-slate-800 rounded-xl py-3 px-4.5 text-xs md:text-sm outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold"
                />
              </div>

              {/* Input: Subject */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300">Select consultation mandate</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#F8F9FB] dark:bg-slate-900 border border-[#EAEAEA] dark:border-slate-800 rounded-xl py-3 px-4.5 text-xs md:text-sm outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold"
                >
                  <option>General Corporate Consultation</option>
                  <option>GST Notice or Penalties resolution</option>
                  <option>Income Tax ITR optimization</option>
                  <option>CMA Data & Bank approvals</option>
                  <option>Company Registration</option>
                </select>
              </div>

              {/* Input: Messages */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300">Brief queries description (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly detail your query context..."
                  className="w-full bg-[#F8F9FB] dark:bg-slate-900 border border-[#EAEAEA] dark:border-slate-800 rounded-xl py-3 px-4.5 text-xs md:text-sm outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold"
                />
              </div>

              {submitSuccess ? (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-2 animate-pulse">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                  Command dispatched of our auditor successfully.
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#0A192F] text-white hover:bg-slate-900 border border-accent-gold/25 font-bold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  {isSubmitting ? (
                    'Registering credentials...'
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5 text-accent-gold" />
                      Dispatch Request
                    </>
                  )}
                </button>
              )}

            </form>

          </div>

          {/* Right Column: Google Maps embedded Panel */}
          <div className="lg:col-span-4 rounded-[32px] overflow-hidden border border-[#EAEAEA] dark:border-slate-800 shadow-sm relative h-[380px] lg:h-auto min-h-[350px] hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.08)] transition-all duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5244589998184!2d78.2037!3d26.2163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1s0x3976c6bb526dc6df%3A0x1bb1e60aaefb24eb!2sThatipur%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0 grayscale dark:invert-[0.9] dark:hue-rotate-180"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              title="GUPTA ADARSH & CO. Location Map"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
