import { Star, ShieldAlert, Heart, ArrowUp } from 'lucide-react';

interface FooterRefProps {
  onOpenBooking: (service?: string) => void;
}

export default function FooterRef({ onOpenBooking }: FooterRefProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t border-accent-gold/20 pt-20 pb-12 relative z-10 font-sans">
      
      {/* Scroll to Top floating key element */}
      <button
        onClick={scrollToTop}
        className="absolute -top-7 right-8 h-14 w-14 rounded-full bg-[#122B45] text-white hover:text-accent-gold border border-accent-gold/25 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
        title="Scroll back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid Groups */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Presentation */}
          <div className="col-span-1 md:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-3">
              <div className="h-10.5 w-10.5 rounded-xl bg-white flex items-center justify-center border border-accent-gold/40">
                <span className="font-serif font-bold text-[#0A192F] text-lg">GA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base tracking-widest text-white">GUPTA ADARSH & CO.</span>
                <span className="text-[10.5px] uppercase tracking-widest text-slate-400 font-bold">Chartered Accountants</span>
              </div>
            </a>
            <p className="text-sm text-slate-405 leading-relaxed max-w-sm">
              Providing premium, Apple-inspired corporate audits, wealth optimization structures, and bulletproof taxation filing compliance from Thatipur, Gwalior.
            </p>

            {/* Rating Stars badge */}
            <div className="flex items-center gap-2.5 pt-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent-gold fill-accent-gold" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">4.9/5 Rating</span>
              <span className="text-[11.5px] text-slate-400 font-mono">(200+ Reviews)</span>
            </div>
          </div>

          {/* Quick links: Services */}
          <div className="col-span-1 md:col-span-3 space-y-5 text-sm">
            <h4 className="font-semibold text-[#D4AF37] uppercase tracking-wider text-[11.5px] font-bold">Tax & GST Compliance</h4>
            <ul className="space-y-3 text-[13.5px]">
              <li>
                <button onClick={() => onOpenBooking('Income Tax return filing')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Income Tax Return filing (ITR-1 to 7)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('GST Return filing')} className="hover:text-white transition-colors cursor-pointer text-left">
                  GST Registration & setup
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('GST Return filing')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Monthly GST Returns audit
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('Tax Planning')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Advanced tax structure planning
                </button>
              </li>
            </ul>
          </div>

          {/* Quick links: Advisory */}
          <div className="col-span-1 md:col-span-3 space-y-5 text-sm">
            <h4 className="font-semibold text-[#D4AF37] uppercase tracking-wider text-[11.5px] font-bold">Corporate Advisory & Auditing</h4>
            <ul className="space-y-3 text-[13.5px]">
              <li>
                <button onClick={() => onOpenBooking('CMA Data Preparation')} className="hover:text-white transition-colors cursor-pointer text-left">
                  CMA Data & banking submissions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('Project Reports')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Detailed Project Reports (DPR)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('Business Registration')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Private Limited / LLP setup
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('Compliance Services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Annual MCA legal compliances
                </button>
              </li>
            </ul>
          </div>

          {/* Location / hours brief */}
          <div className="col-span-1 md:col-span-2 space-y-5 text-sm">
            <h4 className="font-semibold text-[#D4AF37] uppercase tracking-wider text-[11.5px] font-bold">Headquarters</h4>
            <p className="text-slate-400 leading-relaxed text-xs">
              Krishna Kunj, 2113 Gandhi Road, Behind Kirar Bhawan, Thatipur, Gwalior, Madhya Pradesh - 474011
            </p>
            <p className="text-[#D4AF37] font-semibold font-mono text-[11px] tracking-wider uppercase">
              DAILY: 09:00 AM - 08:00 PM
            </p>
          </div>

        </div>

        {/* Regulatory disclaimer block as mandated by ICAI (Chartered Accountants Council Guideline) */}
        <div className="py-8 border-b border-white/5 text-[11.5px] text-slate-500 flex gap-3.5 items-start">
          <ShieldAlert className="h-5.5 w-5.5 text-accent-gold/60 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Regulatory Disclaimer:</strong> As per the rules of the Institute of Chartered Accountants of India (ICAI), we are not permitted to advertise or solicit work in any form. The contents of this portal are intended purely to offer helpful client informational directories, calculations, and local schedules. The calculations performed by the Dual Tax Optimizer are estimates; clients must seek personal professional advice before processing financial transfers.
          </p>
        </div>

        {/* Bottom Bar copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-[13px] text-slate-500">
          <p>© {new Date().getFullYear()} GUPTA ADARSH & CO. • All rights reserved. Registered under Indian Partnership Act. • Developed under strict compliance with ICAI ethics code.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
