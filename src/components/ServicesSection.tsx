import { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';
import { 
  Percent, 
  Building2, 
  Scale, 
  FileText, 
  LayoutDashboard, 
  ClipboardList, 
  Coins, 
  PiggyBank, 
  TrendingUp, 
  ShieldCheck, 
  Briefcase, 
  Award,
  ArrowRight
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

// Bulletproof Lucide icon registry mapping to avoid dynamic bundler resolutions
function ServiceIcon({ name, ...props }: { name: string; className?: string }) {
  switch (name) {
    case 'Percent':
      return <Percent {...props} />;
    case 'Building2':
      return <Building2 {...props} />;
    case 'Scale':
      return <Scale {...props} />;
    case 'FileText':
      return <FileText {...props} />;
    case 'LayoutDashboard':
      return <LayoutDashboard {...props} />;
    case 'ClipboardList':
      return <ClipboardList {...props} />;
    case 'Coins':
      return <Coins {...props} />;
    case 'PiggyBank':
      return <PiggyBank {...props} />;
    case 'TrendingUp':
      return <TrendingUp {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'Briefcase':
      return <Briefcase {...props} />;
    case 'Award':
      return <Award {...props} />;
    default:
      return <ClipboardList {...props} />;
  }
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Taxation' | 'GST' | 'Corporate' | 'Advisory' | 'Accounting'>('All');

  const categories: ('All' | 'Taxation' | 'GST' | 'Corporate' | 'Advisory' | 'Accounting')[] = [
    'All',
    'Taxation',
    'GST',
    'Corporate',
    'Advisory',
    'Accounting'
  ];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-32 bg-neutral-bg dark:bg-[#0A192F]/40 scroll-mt-24 border-t border-gray-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-[#D4AF37] text-sm font-semibold uppercase tracking-widest font-mono">
              <ClipboardList className="h-4 w-4" />
              Service Directories
            </div>
            <h2 className="font-serif text-4xl md:text-[54px] lg:text-[56px] leading-[1.12] font-medium tracking-tight text-[#0A192F] dark:text-white">
              Executive Firm Capabilities
            </h2>
            <p className="text-base text-gray-500 dark:text-slate-400 font-sans">
              Twelve comprehensive financial modules tailored to secure capital growth and keep operations optimized.
            </p>
          </div>

          {/* Categorical Filtering Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-2xl text-sm font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
                  activeCategory === cat
                    ? 'bg-[#0A192F] text-white border-accent-gold dark:bg-white dark:text-[#0A192F]'
                    : 'border-gray-150 text-gray-600 hover:bg-neutral-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-950'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* 12-column Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-[32px] border border-[#EAEAEA] dark:border-slate-800 bg-white dark:bg-slate-900/10 p-8 flex flex-col justify-between hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.08)] transition-all duration-300"
              id={`service-card-${service.id}`}
            >
              {/* Card visual contents */}
              <div className="space-y-5">
                {/* Visual Icon */}
                <div className="h-13 w-13 rounded-3xl bg-[#0A192F]/5 dark:bg-[#122B45] text-[#0A192F] dark:text-accent-gold flex items-center justify-center border border-transparent group-hover:border-accent-gold/20 transition-colors shrink-0">
                  <ServiceIcon name={service.iconName} className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#0A192F] dark:text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Scope listing points */}
                <div className="pt-4 border-t border-gray-50 dark:border-slate-850/40 space-y-2">
                  <span className="text-[11px] font-bold tracking-widest text-[#0A192F] dark:text-slate-250 uppercase font-sans">
                    Compliance Scope:
                  </span>
                  <ul className="space-y-1.5 font-sans text-sm text-gray-450 dark:text-slate-450 list-inside list-disc">
                    {service.details.map((item, idx) => (
                      <li key={idx} className="line-clamp-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card CTA action */}
              <div className="pt-6">
                <button
                  onClick={() => onOpenBooking(service.name)}
                  className="w-full py-3.5 rounded-2xl border border-gray-150 dark:border-slate-800 text-[13.5px] font-semibold text-gray-700 dark:text-slate-300 hover:bg-[#0A192F] hover:text-white dark:hover:bg-white dark:hover:text-gray-950 hover:border-transparent transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
