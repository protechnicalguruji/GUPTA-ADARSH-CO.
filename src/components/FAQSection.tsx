import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Search, ArrowRight, Sparkles, MessageCircleCode } from 'lucide-react';
import { FAQ_DATA } from '../data';

interface FAQSectionProps {
  onOpenBooking: (ctx?: string) => void;
}

export default function FAQSection({ onOpenBooking }: FAQSectionProps) {
  const [activeId, setActiveId] = useState<string | null>('faq-1');
  const [categories, setCategories] = useState<'All' | 'Income Tax' | 'GST' | 'Business Registration' | 'Compliance & Audits' | 'CMA & Finance'>('All');
  const [faqQuery, setFaqQuery] = useState('');

  const filterTabs: ('All' | 'Income Tax' | 'GST' | 'Business Registration' | 'Compliance & Audits' | 'CMA & Finance')[] = [
    'All',
    'Income Tax',
    'GST',
    'Business Registration',
    'Compliance & Audits',
    'CMA & Finance'
  ];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    // Match Category
    const matchCategory = categories === 'All' || faq.category === categories;
    // Match search terms
    const matchSearch = 
      faqQuery.trim() === '' ||
      faq.question.toLowerCase().includes(faqQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-32 bg-neutral-bg dark:bg-[#0A192F]/80 scroll-mt-24 border-t border-gray-159 dark:border-slate-850">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title text */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-[#D4AF37] text-sm font-semibold uppercase tracking-widest font-mono">
            <HelpCircle className="h-4 w-4" />
            Knowledge Base
          </div>
          <h2 className="font-serif text-4xl md:text-[54px] lg:text-[56px] leading-[1.12] font-medium tracking-tight text-[#0A192F] dark:text-white">
            Compliance & Slabs Briefing
          </h2>
          <p className="text-base text-gray-500 dark:text-slate-400">
            Fourteen core regulatory guides compiled by our specialists to address standard company doubts.
          </p>
        </div>

        {/* Live self query bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4.5 text-slate-400">
            <Search className="h-5.5 w-5.5" />
          </div>
          <input
            type="text"
            value={faqQuery}
            onChange={(e) => setFaqQuery(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-850 rounded-2xl py-4 pl-13 pr-6 text-base outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold shadow-sm transition-all text-[#0A192F] dark:text-white dark:placeholder-slate-500"
            placeholder="Type query terms (e.g., gumasta, threshold, deductions)..."
            id="faq-search-box"
          />
          {faqQuery && (
            <button
              onClick={() => setFaqQuery('')}
              className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm text-slate-400 hover:text-gray-600 dark:text-slate-500 hover:dark:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Tab triggers */}
        <div className="flex items-center gap-2.5 w-full overflow-x-auto pb-4 mb-10 no-scrollbar scroll-smooth">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setCategories(tab)}
              className={`px-4.5 py-2.5 rounded-2xl text-sm font-semibold tracking-wider transition-all cursor-pointer border shrink-0 whitespace-nowrap ${
                categories === tab
                  ? 'bg-[#0A192F] text-white border-accent-gold dark:bg-white dark:text-[#0A192F]'
                  : 'border-transparent text-gray-500 hover:bg-white dark:text-slate-400 dark:hover:bg-slate-900'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Accordion render */}
        <div className="space-y-5.5">
          <AnimatePresence initial={false}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = activeId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    className={`rounded-[28px] border bg-white dark:bg-[#122B45]/15 overflow-hidden transition-colors ${
                      isOpen
                        ? 'border-accent-gold ring-1 ring-accent-gold/15 dark:border-accent-gold/40'
                        : 'border-gray-100 dark:border-slate-850/80 hover:border-gray-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {/* Header bar button */}
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left px-8 py-6 flex items-center justify-between gap-5 cursor-pointer text-[#0A192F] dark:text-white hover:text-accent-gold dark:hover:text-accent-gold transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif font-medium text-base md:text-[18px] lg:text-[19px] leading-snug">
                        {faq.question}
                      </span>
                      <div className={`p-2 rounded-full bg-slate-50 dark:bg-slate-900/60 transition-transform ${
                        isOpen ? 'rotate-180 text-accent-gold' : 'text-slate-500'
                      }`}>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </button>

                    {/* Expandable answer panel */}
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-8 pb-8 pt-0 border-t border-gray-100/50 dark:border-slate-850/50 text-sm md:text-base text-gray-600 dark:text-slate-350 leading-relaxed space-y-5">
                          <p>{faq.answer}</p>
                          <div className="flex justify-between items-center text-[11.5px] text-gray-400 font-mono pt-3 border-t border-gray-50 dark:border-slate-850/40">
                            <span>Category: <strong>{faq.category}</strong></span>
                            <span>Gupta Adarsh & Co. Archive</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-14 rounded-[28px] border border-dashed border-gray-250 dark:border-slate-800 bg-white dark:bg-transparent space-y-4">
                <HelpCircle className="h-10 w-10 text-slate-300 dark:text-slate-650 mx-auto" />
                <p className="text-base text-gray-500 dark:text-slate-400">No matching tax regulations found.</p>
                <button
                  onClick={() => {
                    setFaqQuery('');
                    setCategories('All');
                  }}
                  className="text-accent-gold font-bold text-sm"
                >
                  Reset parameters & show all
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Sticky footer help block */}
        <div className="mt-16 p-8 rounded-[28px] bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-[#122B45]/20 dark:to-[#122B45]/5 border border-gray-100 dark:border-slate-800 text-center space-y-4">
          <p className="text-sm text-gray-500 dark:text-slate-350">
            Have a specialized, complex corporate framework or ongoing auditing case?
          </p>
          <button
            onClick={() => onOpenBooking('Discussions regarding structural corporate audits')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37] hover:text-gold-hover transition-colors"
            id="faq-custom-consult-btn"
          >
            Schedule a Secure Consultation Call
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
