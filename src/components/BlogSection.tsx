import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, User, Calendar, Clock, ArrowUpRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { BLOG_DATA } from '../data';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenBooking: (ctx?: string) => void;
}

export default function BlogSection({ onOpenBooking }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['All', 'Tax Strategy', 'Corporate Finance', 'GST Compliance'];

  const filteredBlogs = selectedCategory === 'All'
    ? BLOG_DATA
    : BLOG_DATA.filter(b => b.category === selectedCategory);

  // In-depth luxury article content definitions to prevent basic placeholders
  const getArticleFullContent = (id: string) => {
    switch (id) {
      case 'blog-1':
        return `
### Understanding the Core Structural Changes
In the Finance Act, the Union Government refined standard income tax slabs, specifically expanding the reach of the New Tax Regime (Section 115BAC). The goal is obvious: nudge individual taxpayers away from complex investment structures (such as matching premium insurance timelines, premium deposits under Section 80C) and toward simplified, higher liquid personal holdings.

#### 1. Slabs & Rates Comparison
Under the New Regime (FY 2025-26):
* Income up to ₹3,00,000 has zero taxation.
* Income from ₹3L to ₹7L is taxed at a modest 5%.
* Income from ₹7L to ₹10L is taxed at 10%.
* Income from ₹10L to ₹12L is taxed at 15%.
* Income from ₹12L to ₹15L is taxed at 20%.
* Income above ₹15L is capped at 30%.

Under the legacy Old Regime:
Your standard slabs (starting 5% above ₹2.5L and leaping directly to 20% at ₹5L, up to 30% after ₹10L) stay static, but allow full 80C (up to ₹1.5L) and 80D (medical premium) exclusions.

#### 2. The Standard Deduction Rule
Under the New Regime, standard deductions are set at ₹75,000. In comparison, the Old Regime caps it at ₹50,000. This ₹25,000 variance alters the mathematical balance point significantly.

#### 3. Where is the Breakeven Point?
If your gross annual earning parameters are around ₹15 Lakhs:
* To match the New Regime's liability under the Old Regime, you need to claim solid deductions exceeding ₹3,75,000 through home interest, 80C, 80D, and HRA combined.
* If you do not have active homeloan interest (Section 24b) or major rent schedules, migrating to the New Regime instantly saves you ₹35,000 to ₹50,000 in physical cash annually.

#### Conclusion
Never approximate tax compliance. Our firm develops customized, legal individual tax maps that balance future wealth programs with current liability optimization.
        `;
      case 'blog-2':
        return `
### The Underbelly of Bank Loan Credit Approvals
For any growing MSME or pioneer corporate in Gwalior seeking working capital enhancements, bank credit committees represent a major gatekeeper. Too many founders believe that presenting audited balance sheets is enough. In truth, credit managers evaluate your CMA (Credit Monitoring Arrangement) projection profile above all.

#### 1. What is CMA Data?
CMA data is a systematic, standardized compilation of past and future cash schedules, capital ratios, and asset registers. Bank analysts audit your past 2 years of performance, estimate current schedules, and study 5-year business projections to judge repayment capacity.

#### 2. The Key Ratios Bankers Watch Like Hawks
* **Current Ratio:** Your current assets divided by current liabilities. A ratio below 1.33 is a fatal red flag. It reflects that you are financing long-term projects with dangerous short-term debit channels.
* **Debt Service Coverage Ratio (DSCR):** This measures your operating profit against total annual repayment commitments (principal + interest). Bankers mandate a DSCR score of 1.5 or above to secure safety margins.
* **Maximum Permissible Bank Finance (MPBF):** This classic Tandon Committee formula dictates how much working capital credit a bank can legally extend. If your bookkeeping fails to track working capital gaps, your MPBF limits trigger rejections.

#### 3. Checklist for Loan Submissions
1. Detailed project report with concrete industry benchmarks.
2. Verified, certified CMA projections signed by an active Chartered Accountant.
3. Realistic cash matching profiles (demonstrating you have sufficient funds to cover initial promoter margins).

Partnering with an experienced CA guarantees your forecasts are structurally verified, ensuring bank discussions proceed smoothly and successfully.
        `;
      case 'blog-3':
        return `
### The Battle Over Input Tax Credit (ITC) Leakage
GST reconciliation represents one of the most operationally demanding tasks for Indian business owners. Failing to reconcile purchase invoices against what your supplier files on the GSTR portal can instantly lock up your cash flows and result in expensive department notices.

#### 1. The Trap of Supplier Negligence
Under Section 16(2)(aa) of the CGST Act, you cannot claim Input Tax Credit on your purchases unless your vendors:
1. Correctly upload purchase invoices in GSTR-1.
2. File GSTR-3B monthly, paying the respective tax to the treasury.
3. The transaction is fully visible in your auto-drafted GSTR-2B.

If a supplier makes a typo, or postpones filing, your ITC claims get flagged as "unmatched" by automated treasury algorithms, leading to system penalties.

#### 2. Mastering Reconciliation
* **Continuous Auditing:** Avoid waiting for March annual reconciliations. Run weekly or monthly 2B audits.
* **Vendor Aging Charts:** Classify suppliers into compliant, slow, and non-compliant tiers. Block payments of chronic non-filers equivalent to the GST portion to shield your capital.
* **Addressing Circular 183 Notifications:** Leverage chartered accountant validation certificates to resolve compliance bottlenecks dating back to prior fiscal cycles.

Our GST specialized division provides high-end automated checks, helping enterprises secure ITC cash flows seamlessly.
        `;
      default:
        return 'Detailed article content loading from encrypted archive... Check your internet connectivity.';
    }
  };

  return (
    <section id="blog-section" className="py-32 bg-white dark:bg-[#0A192F] scroll-mt-24 border-t border-gray-159 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-[#D4AF37] text-sm font-semibold uppercase tracking-widest font-mono">
              <BookOpen className="h-4 w-4" />
              Intelligence Desk
            </div>
            <h2 className="font-serif text-4xl md:text-[54px] lg:text-[56px] leading-[1.12] font-medium tracking-tight text-[#0A192F] dark:text-white">
              Tax Strategy Newsletters
            </h2>
            <p className="text-base text-gray-500 dark:text-slate-400 font-sans">
              Stay ahead of regulators with premium, high-value briefs crafted by senior chartered accountants.
            </p>
          </div>

          {/* Filtering Categories slider */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-3 rounded-2xl text-sm font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
                  selectedCategory === cat
                    ? 'bg-[#0A192F] text-white border-accent-gold dark:bg-white dark:text-[#0A192F]'
                    : 'border-gray-150 text-gray-600 hover:bg-neutral-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-950'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog, idx) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActiveArticle(blog)}
                className="group rounded-[32px] border border-gray-100 dark:border-slate-800/80 overflow-hidden bg-neutral-bg/30 dark:bg-slate-900/10 hover:border-accent-gold/45 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
                id={`blog-card-${blog.id}`}
              >
                <div>
                  {/* Image container with elegant zooming */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-5 left-5 bg-[#0A192F]/80 dark:bg-[#0A192F]/90 backdrop-blur-sm border border-accent-gold/15 px-3.5 py-1.5 rounded-xl text-[11px] font-mono font-bold tracking-wider text-accent-gold">
                      {blog.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Body details */}
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-3.5 text-[12.5px] text-gray-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {blog.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#0A192F] dark:text-white leading-snug group-hover:text-[#D4AF37] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-slate-400 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer read action */}
                <div className="p-8 pt-0 border-t border-gray-50 dark:border-slate-850/50 flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-slate-300">
                  <span className="flex items-center gap-1.5 text-[12.5px] text-gray-450 dark:text-slate-450 font-normal">
                    <User className="h-4 w-4" />
                    By {blog.author}
                  </span>
                  <span className="text-[#D4AF37] flex items-center gap-1 hover:translate-x-1.5 transition-transform font-bold text-[13px]">
                    Read Article
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Embedded slide-up article reader */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-end justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveArticle(null)}
                className="absolute inset-0 bg-[#0A192F]/70 backdrop-blur-sm"
                id="article-backdrop"
              />

              {/* Reader frame */}
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                className="relative w-full max-w-4xl bg-white dark:bg-[#0A192F] h-[85vh] rounded-t-[38px] border-t border-accent-gold/25 shadow-2xl flex flex-col overflow-hidden"
                id="article-reader-container"
              >
                {/* Header controls */}
                <div className="px-8 py-5 border-b border-gray-100 dark:border-slate-850 flex items-center justify-between bg-gradient-to-r from-neutral-50 to-white dark:from-[#0a192f] dark:to-[#122b45]/30">
                  <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-accent-gold bg-accent-gold/15 px-3 py-1 rounded-md">
                    {activeArticle.category}
                  </span>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-slate-800 text-gray-500 dark:text-slate-350 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Article Body */}
                <div className="flex-1 overflow-y-auto no-scrollbar p-8 md:p-14 space-y-8">
                  {/* Title metadata */}
                  <div className="space-y-4">
                    <h1 className="font-serif text-3xl md:text-[42px] font-bold text-[#0A192F] dark:text-white leading-tight">
                      {activeArticle.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 font-mono border-b border-b-gray-100 dark:border-slate-850/60 pb-5">
                      <span>Authored By: <strong>{activeArticle.author}</strong></span>
                      <span>•</span>
                      <span>Published: {activeArticle.date}</span>
                      <span>•</span>
                      <span>Reading Time: {activeArticle.readTime}</span>
                    </div>
                  </div>

                  {/* Body paragraphs */}
                  <div className="prose max-w-none text-gray-700 dark:text-slate-300 space-y-5 text-base md:text-[18px] leading-relaxed font-sans">
                    {getArticleFullContent(activeArticle.id).split('\n\n').map((para, i) => {
                      if (para.startsWith('###')) {
                        return (
                          <h3 key={i} className="font-serif text-xl md:text-2xl font-bold text-[#0A192F] dark:text-white mt-8">
                            {para.replace('###', '').trim()}
                          </h3>
                        );
                      }
                      if (para.startsWith('####')) {
                        return (
                          <h4 key={i} className="font-sans text-[15px] md:text-[17px] font-bold text-[#D4AF37] uppercase tracking-wider mt-5">
                            {para.replace('####', '').trim()}
                          </h4>
                        );
                      }
                      if (para.trim().startsWith('*')) {
                        return (
                          <ul key={i} className="list-disc pl-5 my-2 space-y-1.5">
                            {para.split('\n').map((li, j) => (
                              <li key={j}>{li.replace('*', '').trim()}</li>
                            ))}
                          </ul>
                        );
                      }
                      if (para.trim().startsWith('1.')) {
                        return (
                          <ol key={i} className="list-decimal pl-5 my-2 space-y-1.5">
                            {para.split('\n').map((li, j) => (
                              <li key={j}>{li.replace(/^\d+\./, '').trim()}</li>
                            ))}
                          </ol>
                        );
                      }
                      return <p key={i}>{para}</p>;
                    })}
                  </div>

                  {/* Call to action inside reader */}
                  <div className="mt-12 p-8 rounded-[28px] bg-gradient-to-r from-[#031122] to-[#0A192F] text-white border border-accent-gold/20 flex flex-col md:flex-row items-center justify-between gap-8 animate-reveal mt-16">
                    <div className="space-y-1.5 text-center md:text-left">
                      <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest font-mono flex items-center justify-center md:justify-start gap-1.5">
                        <Sparkles className="h-4 w-4" />
                        Gupta Adarsh & Co. Compliance Audit
                      </span>
                      <h4 className="font-serif text-2xl font-semibold">Need exact optimization for your entity?</h4>
                      <p className="text-sm text-slate-400">Receive tailored compliance structures. First discovery briefing is complimentary.</p>
                    </div>
                    <button
                      onClick={() => {
                        setActiveArticle(null);
                        onOpenBooking(`Briefing aligned to: ${activeArticle.title}`);
                      }}
                      className="px-[26px] py-[15px] rounded-xl bg-accent-gold text-gray-900 font-bold text-sm hover:bg-gold-hover transition-colors shrink-0 cursor-pointer"
                    >
                      Establish Direct Liaison
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
