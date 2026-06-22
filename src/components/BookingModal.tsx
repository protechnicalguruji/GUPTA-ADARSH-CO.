import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Sparkles, User, Mail, Phone, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';
import { BookingDetails } from '../types';
import { SERVICES_DATA } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [formData, setFormData] = useState<Partial<BookingDetails>>({
    name: '',
    phone: '',
    email: '',
    serviceRequested: preselectedService || 'Income Tax Return Filing',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name?.trim()) tempErrors.name = 'Full name is required';
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) {
      tempErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid 10-digit Indian phone number (starting 6-9)';
    }

    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.preferredDate) tempErrors.preferredDate = 'Please select a date';
    if (!formData.preferredTime) tempErrors.preferredTime = 'Please select a preferred hour';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceRequested: preselectedService || 'Income Tax Return Filing',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  const handleCloseAndReset = () => {
    onClose();
    setTimeout(() => {
      handleReset();
    }, 300);
  };

  const timeSlots = [
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
    '06:00 PM - 08:00 PM'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseAndReset}
            className="absolute inset-0 bg-[#0A192F]/80 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl overflow-hidden rounded-[28px] border border-accent-gold/20 bg-white shadow-2xl dark:bg-[#0A192F]/95 dark:border-accent-gold/15"
            id="modal-container"
          >
            {/* Header branding band */}
            <div className="bg-gradient-to-r from-[#0A192F] to-[#122B45] px-7 py-5.5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Sparkles className="h-6 w-6 text-accent-gold" />
                <span className="font-serif font-medium tracking-tight text-xl text-accent-gold">
                  Secure Consultation Portal
                </span>
              </div>
              <button
                onClick={handleCloseAndReset}
                className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                id="close-modal-btn"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content body */}
            <div className="p-8 overflow-y-auto max-h-[80vh] no-scrollbar">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5.5">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#0A192F] dark:text-white">
                      Establish Direct Liaison
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1.5">
                      Provide details. A senior chartered accountant will prepare your initial tax review and call you under strict NDA guidelines.
                    </p>
                  </div>

                  {/* Form fields */}
                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                        Full Name / Business Entity *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                          <User className="h-4.5 w-4.5" />
                        </span>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full rounded-xl border py-3 pl-11 pr-4 text-sm bg-gray-50 dark:bg-slate-900/50 outline-none transition-all ${
                            errors.name 
                              ? 'border-red-500 ring-1 ring-red-500' 
                              : 'border-gray-200 dark:border-slate-800 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold'
                          }`}
                          placeholder="Adarsh Singhania"
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-[11.5px] mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                        Contact Phone (WhatsApp Enabled) *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                          <Phone className="h-4.5 w-4.5" />
                        </span>
                        <span className="absolute inset-y-0 left-10 flex items-center text-sm font-medium text-gray-500 pr-2 border-r border-gray-200 dark:border-slate-800">
                          +91
                        </span>
                        <input
                          type="tel"
                          maxLength={10}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                          className={`w-full rounded-xl border py-3 pl-24 pr-4 text-sm bg-gray-50 dark:bg-slate-900/50 outline-none transition-all ${
                            errors.phone 
                              ? 'border-red-500 ring-1 ring-red-500' 
                              : 'border-gray-200 dark:border-slate-800 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold'
                          }`}
                          placeholder="8319571654"
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[11.5px] mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email ID */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                          <Mail className="h-4.5 w-4.5" />
                        </span>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full rounded-xl border py-3 pl-11 pr-4 text-sm bg-gray-50 dark:bg-slate-900/50 outline-none transition-all ${
                            errors.email 
                              ? 'border-red-500 ring-1 ring-red-500' 
                              : 'border-gray-200 dark:border-slate-800 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold'
                          }`}
                          placeholder="client@growth.com"
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-[11.5px] mt-1">{errors.email}</p>}
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                        Select Core Service Require *
                      </label>
                      <select
                        value={formData.serviceRequested}
                        onChange={(e) => setFormData({ ...formData, serviceRequested: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50 py-3 px-4.5 text-sm outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.name} className="dark:bg-[#0A192F]">
                            {srv.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date & Time Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none">
                            <Calendar className="h-4.5 w-4.5" />
                          </span>
                          <input
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className={`w-full rounded-xl border py-3 pl-11 pr-2 text-sm bg-gray-50 dark:bg-slate-900/50 outline-none transition-all ${
                              errors.preferredDate 
                                ? 'border-red-500 ring-1 ring-red-500' 
                                : 'border-gray-200 dark:border-slate-800 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold'
                            }`}
                          />
                        </div>
                        {errors.preferredDate && <p className="text-red-500 text-[11.5px] mt-1">{errors.preferredDate}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                          Slot Preference *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none">
                            <Clock className="h-4.5 w-4.5" />
                          </span>
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className={`w-full rounded-xl border py-3 pl-11 pr-2 text-sm bg-gray-50 dark:bg-slate-900/50 outline-none transition-all ${
                              errors.preferredTime 
                                ? 'border-red-500 ring-1 ring-red-500' 
                                : 'border-gray-200 dark:border-slate-800 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold'
                            }`}
                          >
                            <option value="">Select slot</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot} className="dark:bg-[#0A192F]">
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                        {errors.preferredTime && <p className="text-red-500 text-[11.5px] mt-1">{errors.preferredTime}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                        Specific Compliance Context (Optional)
                      </label>
                      <div className="relative">
                        <span className="absolute top-3.5 left-3.5 text-slate-400">
                          <MessageSquare className="h-4.5 w-4.5" />
                        </span>
                        <textarea
                          rows={2.5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50 py-3 pl-11 pr-4 text-sm outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold"
                          placeholder="e.g. GST notice clearance, dual structure optimization..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-slate-800/60 flex items-center justify-between text-[11.5px] text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-emerald-500" />
                      100% Encrypted Data Connection
                    </span>
                    <span>Gupta Adarsh & Co.</span>
                  </div>

                  {/* Submission Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0A192F] to-[#122B45] text-white py-4 text-sm font-bold border border-accent-gold/20 shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 hover:border-accent-gold/60 flex items-center justify-center gap-2 cursor-pointer animate-reveal-key"
                    id="submit-booking-form-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Processing Secure Channels...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4.5 w-4.5 text-accent-gold animate-pulse" />
                        Verify credentials & book priority call
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center flex flex-col items-center justify-center space-y-5">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="h-20 w-20 rounded-full bg-emerald-50 dark:bg-emerald-950/25 flex items-center justify-center border border-emerald-500/20"
                  >
                    <CheckCircle className="h-12 w-12 text-emerald-500" />
                  </motion.div>

                  <h3 className="font-serif text-3xl font-semibold text-[#0A192F] dark:text-white">
                    Liaison Registered
                  </h3>

                  <div className="mx-auto max-w-sm rounded-xl border border-gray-100 dark:border-slate-800/80 bg-gray-50/50 dark:bg-slate-900/30 p-5 text-left text-sm space-y-2.5 text-gray-600 dark:text-slate-300">
                    <p className="font-bold text-gray-800 dark:text-white flex justify-between">
                      <span>Liaison ID:</span>
                      <span className="font-mono text-accent-gold">GA-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </p>
                    <p><strong>Client Representative:</strong> {formData.name}</p>
                    <p><strong>Primary Line:</strong> +91 {formData.phone}</p>
                    <p><strong>Mandate Service:</strong> {formData.serviceRequested}</p>
                    <p><strong>Liaison Time:</strong> {formData.preferredDate} at {formData.preferredTime}</p>
                  </div>

                  <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                    Our compliance division is matching your profile. Executive CA Adarsh Gupta will contact you within 2 hours on your primary line. A temporary copy has been catalogued in your browser.
                  </p>

                  <button
                    onClick={handleCloseAndReset}
                    className="mt-6 px-8 py-3 rounded-xl border border-gray-200 dark:border-slate-800 text-sm font-bold hover:bg-neutral-150 dark:hover:bg-slate-800 transition-colors"
                  >
                    Exit Portal
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
