import { 
  Building2, 
  HandPlatter, 
  Activity, 
  Smartphone, 
  Store, 
  Home, 
  Utensils, 
  BookOpen, 
  Keyboard, 
  HardHat,
  ShieldCheck
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data';

function IndustryIcon({ name, ...props }: { name: string; className?: string }) {
  switch (name) {
    case 'HardHat':
      return <HardHat {...props} />;
    case 'Activity':
      return <Activity {...props} />;
    case 'Smartphone':
      return <Smartphone {...props} />;
    case 'Store':
      return <Store {...props} />;
    case 'Home':
      return <Home {...props} />;
    case 'Utensils':
      return <Utensils {...props} />;
    default:
      return <Building2 {...props} />;
  }
}

export default function IndustriesServedView() {
  const customIndustries = [
    ...INDUSTRIES_SERVED,
    { name: 'Education & Trusts', icon: 'BookOpen', description: 'Section 12AB tax exemptions filings, school payroll audits' },
    { name: 'IT & Freelancers', icon: 'Keyboard', description: 'STPI guidelines, export compliance, dual withholding tax maps' }
  ];

  return (
    <section id="industries" className="py-32 bg-white dark:bg-[#0A192F] scroll-mt-24 border-t border-gray-159 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title details */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-[#D4AF37] text-sm font-semibold uppercase tracking-widest font-mono">
            <Building2 className="h-4.5 w-4.5" />
            Industrial Scope
          </div>
          <h2 className="font-serif text-4xl md:text-[54px] lg:text-[56px] leading-[1.12] font-medium tracking-tight text-[#0A192F] dark:text-white">
            Industries Aligned to Our Track
          </h2>
          <p className="text-base text-gray-500 dark:text-slate-400">
            Providing tailored chartered accounting expertise for diverse corporate and commercial operations.
          </p>
        </div>

        {/* Categories cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {customIndustries.map((ind) => (
            <div
              key={ind.name}
              className="group rounded-[32px] border border-[#EAEAEA] dark:border-slate-800 bg-[#F8F9FB]/30 dark:bg-slate-900/10 p-8 flex flex-col justify-between hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:bg-white dark:hover:bg-[#122B45]/10 hover:shadow-[0_0_18px_rgba(212,175,55,0.08)] transition-all duration-300"
              id={`industry-${ind.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="space-y-5">
                {/* Switcher icon */}
                <div className="h-11.5 w-11.5 bg-[#0A192F] text-accent-gold dark:bg-transparent dark:text-accent-gold rounded-xl flex items-center justify-center border border-white/5 shadow shrink-0">
                  {ind.icon === 'BookOpen' ? (
                    <BookOpen className="h-6 w-6" />
                  ) : ind.icon === 'Keyboard' ? (
                    <Keyboard className="h-6 w-6" />
                  ) : (
                    <IndustryIcon name={ind.icon} className="h-6 w-6" />
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif font-semibold text-base text-[#0A192F] dark:text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {ind.name}
                  </h3>
                  <p className="text-[13px] text-gray-500 dark:text-slate-400 mt-1 leading-snug font-sans">
                    {ind.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100/40 dark:border-slate-850/30 flex items-center gap-2 text-[11.5px] text-emerald-500 font-mono mt-4">
                <ShieldCheck className="h-4 w-4" />
                Specialized Track Connected
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
