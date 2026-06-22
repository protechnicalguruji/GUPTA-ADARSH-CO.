import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function TestimonialsView() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-32 bg-neutral-bg dark:bg-[#0A192F]/60 scroll-mt-24 border-t border-gray-159 dark:border-slate-850">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-[#D4AF37] text-sm font-semibold uppercase tracking-widest font-mono">
            <Sparkles className="h-4 w-4" />
            Client Testimonials
          </div>
          <h2 className="font-serif text-4xl md:text-[54px] lg:text-[56px] leading-[1.12] font-medium tracking-tight text-[#0A192F] dark:text-white">
            Endorsements of Trust
          </h2>
          <p className="text-base text-gray-500 dark:text-slate-400">
            Read certified assessments and reviews logged directly by regional manufacturers, medical consultants, and venture entrepreneurs.
          </p>
        </div>

        {/* Outer Testimonials Frame */}
        <div className="relative overflow-hidden rounded-[32px] border border-[#EAEAEA] dark:border-slate-800 bg-white dark:bg-[#122B45]/15 p-10 md:p-14 shadow-sm hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.05)] transition-all duration-300">
          
          <Quote className="h-16 w-16 text-accent-gold/15 absolute top-7 right-7 pointer-events-none" />

          {/* Staggered sliders container */}
          <div className="min-h-[250px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-7"
              >
                {/* 5 Stars Rating indicator */}
                <div className="flex gap-1" id="testimonial-star-rating">
                  {[...Array(TESTIMONIALS_DATA[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-gold fill-accent-gold" />
                  ))}
                </div>

                {/* Review Message */}
                <p className="font-serif text-base md:text-[18px] lg:text-[19px] text-gray-800 dark:text-slate-205 leading-relaxed font-normal">
                  "{TESTIMONIALS_DATA[activeIndex].content}"
                </p>

                {/* Writer profiles */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-100 dark:border-slate-850/60">
                  <div className="flex items-center gap-4.5">
                    <div className="h-13 w-13 rounded-full bg-slate-900 text-white font-serif font-bold text-base flex items-center justify-center border border-accent-gold/20 shrink-0">
                      {TESTIMONIALS_DATA[activeIndex].initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#0A192F] dark:text-white flex items-center gap-1.5">
                        {TESTIMONIALS_DATA[activeIndex].name}
                        {TESTIMONIALS_DATA[activeIndex].verified && (
                          <BadgeCheck className="h-5 w-5 text-emerald-500" title="Verified Gwalior Google Review" />
                        )}
                      </h4>
                      <p className="text-[11.5px] text-gray-400 font-mono mt-0.5">
                        {TESTIMONIALS_DATA[activeIndex].role} • {TESTIMONIALS_DATA[activeIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Trust source marker */}
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase bg-accent-gold/10 px-3 py-1 rounded-md border border-accent-gold/20">
                    GOOGLE REVIEW
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider navigation control dots */}
            <div className="flex items-center justify-between mt-10 pt-5 border-t border-gray-50 dark:border-slate-850/40">
              
              <div className="flex gap-2">
                {TESTIMONIALS_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeIndex === i ? 'w-8 bg-accent-gold' : 'w-2.5 bg-gray-200 dark:bg-slate-800'
                    }`}
                    aria-label={`Show slide testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Vector arrow buttons */}
              <div className="flex gap-2.5">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-150 dark:border-slate-800 text-gray-600 dark:text-slate-300 hover:border-accent-gold transition-colors cursor-pointer"
                  id="prev-testimonial-btn"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-150 dark:border-slate-800 text-gray-600 dark:text-slate-300 hover:border-accent-gold transition-colors cursor-pointer"
                  id="next-testimonial-btn"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
