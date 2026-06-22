import { ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { PROCESS_TIMELINE } from '../data';

export default function ProcessTimelineView() {
  return (
    <section id="timeline" className="py-32 bg-neutral-bg dark:bg-[#0A192F]/40 scroll-mt-24 border-t border-gray-155 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-[#D4AF37] text-sm font-semibold uppercase tracking-widest font-mono">
            <Sparkles className="h-4 w-4" />
            Compliance Timelines
          </div>
          <h2 className="font-serif text-4xl md:text-[54px] lg:text-[56px] leading-[1.12] font-medium tracking-tight text-[#0A192F] dark:text-white">
            Operational Integration Roadmap
          </h2>
          <p className="text-base text-gray-500 dark:text-slate-400">
            From initial document audit to direct government transmission, our workflows are meticulously systematic.
          </p>
        </div>

        {/* Timeline representation */}
        <div className="relative">
          {/* Horizontal connecting vector line for large displays */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-accent-gold/15 via-accent-gold/60 to-accent-gold/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 relative z-10">
            {PROCESS_TIMELINE.map((step, idx) => (
              <div
                key={step.step}
                className="group relative rounded-[32px] border border-[#EAEAEA] dark:border-slate-800 bg-white dark:bg-[#122B45]/15 p-8 space-y-5 shadow-sm hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.08)] transition-all duration-300 flex flex-col justify-between"
                id={`timeline-step-${step.step}`}
              >
                <div className="space-y-4">
                  {/* Step digit counter */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-bold text-accent-gold/20 group-hover:text-accent-gold/60 transition-colors">
                      {step.step}
                    </span>
                    <span className="h-7 px-3 flex items-center justify-center rounded bg-accent-gold/10 border border-accent-gold/20 text-[11px] font-mono text-accent-gold font-bold">
                      STAGE {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-[18px] lg:text-[19px] font-semibold text-[#0A192F] dark:text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 dark:text-slate-400 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                {/* Decorative small indicator dot */}
                <div className="hidden lg:block absolute -bottom-5.5 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-accent-gold bg-white dark:bg-[#0A192F]" />

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
