import { Compass, Target, Award, Quote, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white dark:bg-[#0A192F] scroll-mt-24 border-t border-gray-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout Master Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Card Cluster */}
          <div className="lg:col-span-12 xl:col-span-5 relative space-y-5">
            
            {/* Elegant Leader Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#EAEAEA] dark:border-slate-800 bg-[#F8F9FB] dark:bg-[#122B45]/20 p-10 shadow-sm hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.06)] transition-all duration-300">
              <Quote className="h-12 w-12 text-accent-gold/20 absolute right-8 top-8" />
              
              <div className="space-y-5">
                <span className="text-[11px] uppercase font-bold tracking-widest text-[#D4AF37] font-mono">
                  Principal Statement
                </span>
                
                <p className="font-serif italic text-[18px] md:text-xl text-[#0A192F] dark:text-slate-200 leading-relaxed">
                  "Compliance is not simple submission to state demands. It is the tactical organization of corporate assets to promote long-term wealth stability and industrial growth."
                </p>

                <div className="pt-5 border-t border-gray-200/50 dark:border-slate-850 flex items-center gap-3.5">
                  <div className="h-11 w-11 rounded-full bg-[#0A192F] text-white font-serif flex items-center justify-center font-bold text-base border border-accent-gold/20">
                    AG
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A192F] dark:text-white">CA Adarsh Gupta</h4>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400 font-mono">Founder & Managing Partner • Gupta Adarsh & Co.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Highlight Badge */}
            <div className="p-5.5 rounded-3xl border border-accent-gold/20 bg-[#0A192F] text-white flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2.5 bg-accent-gold/10 rounded-2xl shrink-0">
                <Award className="h-6 w-6 text-accent-gold" />
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-[13.5px]">Aggressive Professional Standards</p>
                <p className="text-slate-405 text-[11px]">Recognized across Gwalior municipal panels with a flawless 4.9⭐ rating.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-bold tracking-widest uppercase text-accent-gold font-mono block">
                ORGANIZATIONAL IDENTITY
              </span>
              <h2 className="font-serif text-4xl md:text-[54px] lg:text-[56px] leading-[1.12] font-medium tracking-tight text-[#0A192F] dark:text-white">
                Engineering client financial security.
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-600 dark:text-slate-350 leading-relaxed font-sans">
              Founded on the pillars of legal perfection and client confidentiality, GUPTA ADARSH & CO. is one of Gwalior's premier chartered accounting partnerships. We dismantle the friction of Indian taxation, providing direct regulatory shields to start-ups, salaried professionals, doctors, and family conglomerates.
            </p>

            {/* Mission & Vision split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100 dark:border-slate-850">
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A192F]/5 dark:bg-[#122B45]/40 rounded-xl shrink-0">
                    <Target className="h-5.5 w-5.5 text-accent-gold" />
                  </div>
                  <h4 className="font-serif font-bold text-[15.5px] text-[#0A192F] dark:text-white">Our Strategic Mandate</h4>
                </div>
                <p className="text-[13.5px] text-gray-500 dark:text-slate-400 leading-relaxed">
                  To supply bulletproof auditing ledgers and optimization models that lower tax exposure while keeping businesses 100% audit-compliant under Indian central finance boards.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A192F]/5 dark:bg-[#122B45]/40 rounded-xl shrink-0">
                    <Compass className="h-5.5 w-5.5 text-accent-gold" />
                  </div>
                  <h4 className="font-serif font-bold text-[15.5px] text-[#0A192F] dark:text-white">Our Global Vision</h4>
                </div>
                <p className="text-[13.5px] text-gray-500 dark:text-slate-400 leading-relaxed">
                  Establishing the most technologically integrated and trustworthy financial consulting desk in Madhya Pradesh, helping local MSMEs access high-quality banking capital.
                </p>
              </div>

            </div>

            {/* Three key reasons lists */}
            <div className="pt-6 space-y-4">
              <h4 className="text-[13.5px] font-bold font-sans text-[#0A192F] dark:text-slate-300 uppercase tracking-widest leading-none">
                Why Gwalior Operators Entrust Our Advisors
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-slate-405">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
                  Expert Notice Clearance
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
                  Fast Turnaround
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
                  No Hidden Retainers
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
