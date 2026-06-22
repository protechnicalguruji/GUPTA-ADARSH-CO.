import { Sparkles, Clock, ShieldCheck, Coins, Users, Star } from 'lucide-react';
import { BENTO_ADVANTAGES } from '../data';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-32 bg-white dark:bg-[#0A192F] scroll-mt-24 border-t border-gray-155 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-[#D4AF37] text-sm font-semibold uppercase tracking-widest font-mono">
            <Sparkles className="h-4 w-4 animate-spin duration-300" />
            Competitive Advantages
          </div>
          <h2 className="font-serif text-4xl md:text-[54px] lg:text-[56px] leading-[1.12] font-medium tracking-tight text-[#0A192F] dark:text-white">
            Operational Excellence & Elite Standards
          </h2>
          <p className="text-base text-gray-500 dark:text-slate-400">
            Engineered to remove friction, protect business privacy, and maximize cost optimization.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[215px]">
          {/* Card 1: Rated (col-span-2, row-span-2) */}
          <div className="md:col-span-2 md:row-span-2 rounded-[32px] border border-accent-gold/20 bg-gradient-to-br from-[#0A192F] to-[#122B45] text-white p-10 flex flex-col justify-between shadow-lg relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-2xl group-hover:bg-accent-gold/10 transition-colors pointer-events-none" />
            
            <div className="space-y-5">
              <div className="flex gap-1.5 animate-pulse duration-1000">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-accent-gold fill-accent-gold" />
                ))}
              </div>
              <h3 className="font-serif text-3xl md:text-[38px] lg:text-[40px] font-medium text-white leading-tight">
                Gwalior's Top Aggregated Client Rated Firm
              </h3>
              <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed font-sans mt-3">
                With a stellar 4.9 out of 5 stars based on 200+ actual reviews, our auditing and counseling division has gained the trust of regional developers.
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 flex gap-16 text-sm font-mono">
              <div>
                <span className="block text-[#D4AF37] text-3xl font-serif font-bold">⭐ 4.9</span>
                <span className="text-slate-400">Google Score</span>
              </div>
              <div>
                <span className="block text-white text-3xl font-serif font-bold">200+</span>
                <span className="text-slate-400">Verified Reviews</span>
              </div>
              <div>
                <span className="block text-white text-3xl font-serif font-bold text-[#D4AF37]">100%</span>
                <span className="text-slate-400">Client Compliance</span>
              </div>
            </div>
          </div>

          {/* Card 2: Turnaround (col-span-1, row-span-1) */}
          <div className="rounded-[32px] border border-[#EAEAEA] dark:border-slate-800 bg-white dark:bg-[#122B45]/15 p-8 flex flex-col justify-between hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.08)] transition-all duration-300 group">
            <div className="flex items-center justify-between text-[#0A192F] dark:text-accent-gold">
              <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-slate-400">Speed</span>
              <Clock className="h-6 w-6 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-4">
              <h4 className="font-serif text-[18px] font-semibold text-[#0A192F] dark:text-white">Fast Turnaround</h4>
              <p className="text-[13px] text-gray-500 dark:text-slate-400 mt-2 leading-relaxed">ITR filing executed in 48 hours. Formations completed in 7-10 sessions.</p>
            </div>
          </div>

          {/* Card 3: Confidential (col-span-1, row-span-1) */}
          <div className="rounded-[32px] border border-[#EAEAEA] dark:border-slate-800 bg-white dark:bg-[#122B45]/15 p-8 flex flex-col justify-between hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.08)] transition-all duration-300 group">
            <div className="flex items-center justify-between text-[#0A192F] dark:text-accent-gold">
              <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-slate-400">Protocols</span>
              <ShieldCheck className="h-6 w-6 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-4">
              <h4 className="font-serif text-[18px] font-semibold text-[#0A192F] dark:text-white">Data Confidentiality</h4>
              <p className="text-[13px] text-gray-500 dark:text-slate-400 mt-2 leading-relaxed">Secure cloud directories and NDAs matching elite bank encryption standards.</p>
            </div>
          </div>

          {/* Card 4: Pricing (col-span-1, row-span-1) */}
          <div className="rounded-[32px] border border-[#EAEAEA] dark:border-slate-800 bg-[#F8F9FB] dark:bg-slate-900/20 p-8 flex flex-col justify-between hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.08)] transition-all duration-300 group">
            <div className="flex items-center justify-between text-[#0A192F] dark:text-accent-gold">
              <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-slate-400 font-sans">Billing</span>
              <Coins className="h-6 w-6 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            </div>
            <div className="mt-4">
              <h4 className="font-serif text-[18px] font-semibold text-[#0A192F] dark:text-white">Transparent Fixed Tariff</h4>
              <p className="text-[13px] text-gray-500 dark:text-slate-400 mt-2 leading-relaxed">No unexpected invoicing, no commissions. Upfront transparent statements.</p>
            </div>
          </div>

          {/* Card 5: Expertise (col-span-2, row-span-1) */}
          <div className="md:col-span-2 rounded-[32px] border border-[#EAEAEA] dark:border-slate-800 bg-white dark:bg-[#122B45]/15 p-8 flex flex-col justify-between hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.08)] transition-all duration-300 relative overflow-hidden group">
            <div className="space-y-2">
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#D4AF37] font-bold block">Panel Counsel</span>
              <h4 className="font-serif text-xl font-semibold text-[#0A192F] dark:text-white group-hover:text-[#D4AF37] transition-colors">Continuous Support & Direct Partner Access</h4>
              <p className="text-[13px] text-gray-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                Connect directly with licensed CA Adarsh Gupta during notice audits rather than junior account executives. Continuous active updates on WhatsApp.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
