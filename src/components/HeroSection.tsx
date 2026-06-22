import { motion } from 'motion/react';
import { Phone, MessageSquare, Sparkles, ShieldCheck, ArrowRight, Star, FileDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const handleDownloadProfile = () => {
    // Generate a temporary decorative professional corporate brief
    const element = document.createElement('a');
    const file = new Blob([
      `GUPTA ADARSH & CO. - CHARTERED ACCOUNTANTS
=========================================
Establishment Brief: Leading Tax Advisory & Auditing Firm
Location: Gandhi Road, Thatipur, Gwalior, Madhya Pradesh, India
Rating: 4.9 / 5 Stars (200+ Google Reviews)
Primary Liaison Line: +91 83195 71654

SERVICES DOCUMENTED:
1. Income Tax Return Filing (ITR-1 to 7)
2. GST Registration & Monthly Compliance Audits
3. Detailed Project Reports (DPR) & CMA Preparations
4. Internal Controls & Corporate Bookkeeping
5. State Licensure Gumasta and PTRC compliance

CONFIDENTIALITY GUARANTEE:
All audit directories are protected under strict professional NDAs.`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Gupta_Adarsh_Co_Profile.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="relative min-h-screen pt-40 pb-28 flex items-center overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#122B45] to-[#0D233C] text-white">
      {/* Decorative Golden Ambient Glow Background */}
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" 
        style={{ maskImage: 'radial-gradient(ellipse_at_center,black,transparent_75%)', WebkitMaskImage: 'radial-gradient(ellipse_at_center,black,transparent_75%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left copy column */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Rating tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-[13px] text-slate-350"
          >
            <Star className="h-4 w-4 fill-accent-gold text-accent-gold" />
            <span className="font-semibold text-white">4.9/5 Rating</span> on Google Reviews (200+ clients)
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-[68px] lg:text-[76px] font-medium tracking-tight leading-[1.08]"
            >
              Guiding Corporate wealth with <span className="text-accent-gold italic font-serif">precision</span> and trust.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed"
            >
              Trusted Chartered Accountants & tax advisors in Gwalior providing high-end structural accounting, ITR filiations, GST audits, and bank loan CMA preparations.
            </motion.p>
          </div>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-5 pt-2"
          >
            <button
              onClick={() => onOpenBooking()}
              className="px-7 py-4.5 rounded-2xl bg-accent-gold text-gray-900 font-bold text-sm uppercase tracking-wider hover:bg-gold-hover transition-all flex items-center gap-2.5 border border-yellow-300/10 shadow-lg cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              id="hero-book-btn"
            >
              <Sparkles className="h-4.5 w-4.5" />
              Book Free Consultation
            </button>

            <button
              onClick={handleDownloadProfile}
              className="px-6 py-4.5 rounded-2xl bg-white/5 text-sm uppercase font-semibold tracking-wider hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2 cursor-pointer"
              id="hero-download-btn"
            >
              <FileDown className="h-4.5 w-4.5 text-accent-gold" />
              Company Profile
            </button>
          </motion.div>

          {/* Core assurances badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/5 text-slate-400 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4.5 w-4.5 text-accent-gold" />
              Certified Audits
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4.5 w-4.5 text-accent-gold" />
              Secure Data NDA
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4.5 w-4.5 text-accent-gold" />
              Strict Local Compliance
            </span>
          </motion.div>
        </div>

        {/* Right visualization column */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/50 p-8 md:p-10 backdrop-blur-md"
          >
            {/* Visual Header */}
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-5">
              <div className="flex items-center gap-2.5">
                <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">Gwalior Command Core</span>
              </div>
              <span className="text-xs font-mono text-accent-gold">GA-{new Date().getFullYear()}</span>
            </div>

            {/* Metric counters layout */}
            <div className="space-y-8">
              <div>
                <span className="text-sm text-slate-450 block mb-1">Total Client Engagements (Aggregate)</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-serif font-semibold text-white">1,500+</span>
                  <span className="text-xs text-emerald-400 font-medium font-mono">👑 Certified</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-1">
                <div>
                  <span className="text-xs text-slate-450 block mb-1">Tax Filings Completed</span>
                  <p className="text-2xl md:text-3xl font-serif font-bold text-white">8,500+</p>
                </div>
                <div>
                  <span className="text-xs text-slate-450 block mb-1">Active GST Portals</span>
                  <p className="text-2xl md:text-3xl font-serif font-bold text-white">450+</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-1 border-t border-white/5">
                <div>
                  <span className="text-xs text-slate-450 block mb-1">Licensed Experience</span>
                  <p className="text-2xl md:text-3xl font-serif font-bold text-accent-gold">12 Yr+</p>
                </div>
                <div>
                  <span className="text-xs text-slate-450 block mb-1">Corporate Audits</span>
                  <p className="text-2xl md:text-3xl font-serif font-bold text-white">380+</p>
                </div>
              </div>
            </div>

            {/* Mini prompt highlight */}
            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[13px] text-slate-350">
              <span>Ready to organize your statements?</span>
              <button
                onClick={() => onOpenBooking()}
                className="text-[#D4AF37] font-semibold flex items-center gap-0.5 hover:underline"
              >
                Onboard Now
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
