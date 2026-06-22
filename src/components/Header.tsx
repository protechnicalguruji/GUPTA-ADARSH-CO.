import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sun, Moon, Menu, X, Phone, Shield, Sparkles, Command, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, FAQ_DATA, BLOG_DATA } from '../data';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ onOpenBooking, darkMode, setDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{
    services: typeof SERVICES_DATA;
    faqs: typeof FAQ_DATA;
    blogs: typeof BLOG_DATA;
  }>({ services: [], faqs: [], blogs: [] });

  // Handle scroll backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live query search algorithm
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults({ services: [], faqs: [], blogs: [] });
      return;
    }

    const query = searchQuery.toLowerCase();

    const filteredServices = SERVICES_DATA.filter(
      (s) => s.name.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)
    );

    const filteredFaqs = FAQ_DATA.filter(
      (f) => f.question.toLowerCase().includes(query) || f.answer.toLowerCase().includes(query)
    );

    const filteredBlogs = BLOG_DATA.filter(
      (b) => b.title.toLowerCase().includes(query) || b.excerpt.toLowerCase().includes(query)
    );

    setSearchResults({
      services: filteredServices,
      faqs: filteredFaqs,
      blogs: filteredBlogs
    });
  }, [searchQuery]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearchResultClick = (type: 'services' | 'faqs' | 'blogs', targetId: string) => {
    setSearchOpen(false);
    setSearchQuery('');
    
    // Find matching HTML element and scroll to it smoothly
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add momentary pulse indicator
        element.classList.add('ring-2', 'ring-accent-gold', 'ring-offset-2');
        setTimeout(() => {
          element.classList.remove('ring-2', 'ring-accent-gold', 'ring-offset-2');
        }, 2000);
      }, 300);
    }
  };

  const hasResults = 
    searchResults.services.length > 0 || 
    searchResults.faqs.length > 0 || 
    searchResults.blogs.length > 0;

  return (
    <>
      {/* Scroll indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-gold via-yellow-400 to-amber-500 z-50 origin-left" />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-white/90 dark:bg-[#0A192F]/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-slate-800'
            : 'py-6 bg-transparent'
        }`}
        id="main-app-header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-xl bg-[#0A192F] dark:bg-white flex items-center justify-center border border-accent-gold/30 shadow-inner group-hover:border-accent-gold transition-colors">
              <span className="font-serif font-bold text-lg text-accent-gold dark:text-[#0A192F]">
                GA
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-[15.5px] leading-tight tracking-[0.06em] text-[#0A192F] dark:text-white flex items-center gap-1">
                GUPTA ADARSH <span className="text-accent-gold font-sans text-[11px] tracking-normal font-semibold font-mono">& CO.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-slate-400 font-semibold">
                Chartered Accountants
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Cluster */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-[13.5px] font-semibold tracking-widest text-gray-700 dark:text-slate-300 hover:text-accent-gold dark:hover:text-accent-gold transition-colors">
              ABOUT
            </a>
            <a href="#services" className="text-[13.5px] font-semibold tracking-widest text-gray-700 dark:text-slate-300 hover:text-accent-gold dark:hover:text-accent-gold transition-colors">
              SERVICES
            </a>
            <a href="#why-choose-us" className="text-[13.5px] font-semibold tracking-widest text-gray-700 dark:text-slate-300 hover:text-accent-gold dark:hover:text-accent-gold transition-colors">
              BENEFITS
            </a>
            <a href="#timeline" className="text-[13.5px] font-semibold tracking-widest text-gray-700 dark:text-slate-300 hover:text-accent-gold dark:hover:text-accent-gold transition-colors">
              PROCESS
            </a>
            <a href="#tax-calculator" className="text-[13.5px] font-semibold tracking-widest text-gray-700 dark:text-slate-300 hover:text-accent-gold dark:hover:text-accent-gold transition-colors">
              CALCULATOR
            </a>
            <a href="#faqs" className="text-[13.5px] font-semibold tracking-widest text-gray-700 dark:text-slate-300 hover:text-accent-gold dark:hover:text-accent-gold transition-colors">
              FAQ
            </a>
          </nav>

          {/* Utility Tools */}
          <div className="hidden md:flex items-center gap-5">
            {/* Live Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 text-slate-500 hover:text-[#0A192F] dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center gap-1.5 text-sm"
              id="search-trigger-btn"
              title="Search Services & FAQs"
            >
              <Search className="h-5 w-5" />
              <kbd className="hidden lg:inline-block px-2 py-0.5 text-[10px] font-mono rounded bg-gray-100 dark:bg-slate-700 pointer-events-none">
                ⌘K
              </kbd>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 text-slate-500 hover:text-[#0A192F] dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              id="dark-mode-toggle"
              aria-label="Toggle theme mode"
            >
              {darkMode ? <Sun className="h-5 w-5 text-accent-gold" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* CTA Book Consultation */}
            <button
              onClick={() => onOpenBooking()}
              className="relative overflow-hidden group bg-gradient-to-r from-[#0A192F] to-[#122B45] text-white px-6 py-3.5 rounded-2xl border border-accent-gold/20 text-[13.5px] font-semibold hover:border-accent-gold/50 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 cursor-pointer animate-none"
              id="header-consult-btn"
            >
              <Sparkles className="h-4 w-4 text-accent-gold animate-pulse" />
              Book Consultation
            </button>
          </div>

          {/* Tablet & Mobile Utility Cluster */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 text-slate-500 dark:text-slate-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-850"
              id="mobile-search-btn"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-1.5 text-slate-500 dark:text-slate-400 rounded-full"
              id="mobile-theme-btn"
            >
              {darkMode ? <Sun className="h-5 w-5 text-accent-gold" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 dark:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              id="mobile-menu-trigger"
              aria-label="Open menu drawer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 right-0 z-30 bg-white dark:bg-[#0A192F] border-b border-gray-100 dark:border-slate-850 shadow-xl md:hidden overflow-hidden"
            id="mobile-drawer-layer"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-gray-800 dark:text-slate-200"
              >
                ABOUT FIRM
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-gray-800 dark:text-slate-200"
              >
                OUR SERVICES
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-gray-800 dark:text-slate-200"
              >
                WHY CHOOSE US
              </a>
              <a
                href="#timeline"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-gray-800 dark:text-slate-200"
              >
                COMPLIANCE TIMELINE
              </a>
              <a
                href="#tax-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-gray-800 dark:text-slate-200"
              >
                TAX CALCULATOR
              </a>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-gray-800 dark:text-slate-200"
              >
                COMPLIANCE FAQS
              </a>

              <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-center bg-gradient-to-r from-[#0A192F] to-[#122B45] text-white py-3 rounded-xl border border-accent-gold/25 font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent-gold" />
                  Request Direct Call
                </button>
                <a
                  href="tel:+918319571654"
                  className="w-full text-center py-2.5 rounded-xl border border-gray-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1.5"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +91 83195 71654
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Live Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[15vh]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery('');
              }}
              className="absolute inset-0 bg-[#0A192F]/60 backdrop-blur-sm"
              id="search-backdrop"
            />

            {/* Console frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0A192F] border border-accent-gold/25 shadow-2xl rounded-2xl overflow-hidden"
              id="search-console-container"
            >
              {/* Query input panel */}
              <div className="flex items-center gap-3 px-4 border-b border-gray-100 dark:border-slate-850 py-4">
                <Command className="h-5 w-5 text-gray-400 dark:text-slate-500" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Query tax filing, GST setup, company registration, notice reply..."
                  className="w-full text-base bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500"
                />
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="text-xs text-gray-400 dark:text-slate-550 border border-gray-200 dark:border-slate-800 px-1.5 py-0.5 rounded hover:bg-neutral-100 dark:hover:bg-slate-800 transition-colors"
                >
                  ESC
                </button>
              </div>

              {/* Dynamic matching items view */}
              <div className="max-h-[50vh] overflow-y-auto no-scrollbar p-3">
                {searchQuery.trim() === '' ? (
                  <div className="py-8 text-center text-xs text-gray-400">
                    <p className="font-medium text-slate-550">Empowered Search Console</p>
                    <p className="mt-1">Type keywords like "ITR", "GST", "Audits", "Fees", or "CMA" to summon corporate resources.</p>
                  </div>
                ) : !hasResults ? (
                  <div className="py-8 text-center text-xs text-gray-400">
                    <p>No compliance directories or files match your parameters.</p>
                    <button
                      onClick={() => {
                        setSearchOpen(false);
                        onOpenBooking();
                      }}
                      className="mt-3 text-[#D4AF37] font-semibold flex items-center justify-center gap-1 mx-auto hover:underline"
                    >
                      Establish manual liaison with auditor instead
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 py-2">
                    {/* Services Results */}
                    {searchResults.services.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold tracking-widest uppercase text-accent-gold px-2 mb-1">
                          Core CA Services ({searchResults.services.length})
                        </h4>
                        <div className="space-y-1">
                          {searchResults.services.map((srv) => (
                            <button
                              key={srv.id}
                              onClick={() => handleSearchResultClick('services', srv.id)}
                              className="w-full text-left rounded-lg p-2 hover:bg-neutral-50 dark:hover:bg-slate-850/50 flex flex-col transition-all cursor-pointer"
                            >
                              <span className="text-sm font-medium text-[#0A192F] dark:text-white flex items-center justify-between">
                                {srv.name}
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-slate-800 text-gray-500">
                                  {srv.category}
                                </span>
                              </span>
                              <span className="text-xs text-gray-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {srv.description}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* FAQs Results */}
                    {searchResults.faqs.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold tracking-widest uppercase text-accent-gold px-2 mb-1">
                          Compliance Bulletins & FAQs ({searchResults.faqs.length})
                        </h4>
                        <div className="space-y-1">
                          {searchResults.faqs.map((faq) => (
                            <button
                              key={faq.id}
                              onClick={() => handleSearchResultClick('faqs', 'faqs')}
                              className="w-full text-left rounded-lg p-2 hover:bg-neutral-50 dark:hover:bg-slate-850/50 flex flex-col transition-all cursor-pointer"
                            >
                              <span className="text-sm font-medium text-[#0A192F] dark:text-white">
                                {faq.question}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {faq.answer}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Blogs Results */}
                    {searchResults.blogs.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold tracking-widest uppercase text-accent-gold px-2 mb-1 font-sans">
                          Tax Strategy Newsletters ({searchResults.blogs.length})
                        </h4>
                        <div className="space-y-1">
                          {searchResults.blogs.map((blog) => (
                            <button
                              key={blog.id}
                              onClick={() => handleSearchResultClick('blogs', 'blog-section')}
                              className="w-full text-left rounded-lg p-2 hover:bg-neutral-50 dark:hover:bg-slate-850/50 flex flex-col transition-all cursor-pointer"
                            >
                              <span className="text-sm font-medium text-[#0A192F] dark:text-white">
                                {blog.title}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {blog.excerpt}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
