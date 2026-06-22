import { useState, useEffect } from 'react';
import SchemaMarkup from './components/SchemaMarkup';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessTimelineView from './components/ProcessTimelineView';
import TaxCalculator from './components/TaxCalculator';
import IndustriesServedView from './components/IndustriesServedView';
import TestimonialsView from './components/TestimonialsView';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FooterRef from './components/FooterRef';
import BookingModal from './components/BookingModal';
import { Phone, MessageSquare, ArrowUp, CalendarRange } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Read local cache or default to light theme
    const saved = localStorage.getItem('ga-dark-mode');
    return saved === 'true';
  });

  const [bookingOpen, setBookingOpen] = useState(false);
  const [prefService, setPrefService] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync dark class on document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('ga-dark-mode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('ga-dark-mode', 'false');
    }
  }, [darkMode]);

  // Monitor scroll for floating "Scroll To Top" display
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBooking = (srv?: string) => {
    setPrefService(srv);
    setBookingOpen(true);
  };

  const closeBooking = () => {
    setBookingOpen(false);
    setPrefService(undefined);
  };

  const shareDraftContext = () => {
    if (navigator.share) {
      navigator.share({
        title: 'GUPTA ADARSH & CO. | Chartered Accountants',
        text: 'Trusted Chartered Accountants & Tax Advisors in Gwalior. Flawless 4.9 star rating.',
        url: window.location.href
      }).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen relative bg-neutral-bg text-neutral-text dark:bg-[#0A192F] dark:text-slate-100 selection:bg-accent-gold selection:text-slate-900 transition-colors duration-200">
      
      {/* 1. SEO Structured Schema Markup */}
      <SchemaMarkup />

      {/* 2. Brand sticky header containing searchable console and dark-toggle */}
      <Header 
        onOpenBooking={openBooking} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Main Structural Compartment */}
      <main className="relative">
        {/* 3. Immersive Hero visual with dynamic counters & PDF briefs */}
        <HeroSection onOpenBooking={openBooking} />

        {/* 4. Modern Bento grid exhibiting core client trust values */}
        <WhyChooseUs />

        {/* 5. About the leaders, narrative copy, mission & vision metrics */}
        <AboutSection />

        {/* 6. Robust Service listings grid containing categorical filters */}
        <ServicesSection onOpenBooking={openBooking} />

        {/* 7. Comprehensive horizontal timeline and stages indicators */}
        <ProcessTimelineView />

        {/* 8. Functional comparing tool: New slabs vs Old regime calculation breakdowns */}
        <TaxCalculator onOpenBooking={openBooking} />

        {/* 9. Specialized industry segments served across Gwalior */}
        <IndustriesServedView />

        {/* 10. Certified Google reviews testimonials deck */}
        <TestimonialsView />

        {/* 11. Editorial newsletter summaries with drawer article overlays */}
        <BlogSection onOpenBooking={openBooking} />

        {/* 12. Complete 15 Indian Tax compliance accordion FAQs with filter querying */}
        <FAQSection onOpenBooking={openBooking} />

        {/* 13. Map geolocation grid and validated direct advice dispatch cards */}
        <ContactSection />
      </main>

      {/* 14. Regulatory ICAI compliant brand footer */}
      <FooterRef onOpenBooking={openBooking} />

      {/* 15. Scheduling modal overlay portal */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={closeBooking} 
        preselectedService={prefService} 
      />

      {/* FLOATING ACTION UTILITIES (Sticky lower anchors) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* Floating WhatsApp Hotline */}
        <a
          href="https://wa.me/918319571654?text=Hi%20Gupta%20Adarsh%20%26%20Co.%2C%20I%2520would%2520like%2520to%2520consult%2520regarding%2520taxation%2520services."
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          title="Direct WhatsApp Helpline"
          id="floating-whatsapp-btn"
        >
          <MessageSquare className="h-5 w-5 fill-white" />
        </a>

        {/* Floating Call Assistance */}
        <a
          href="tel:+918319571654"
          className="h-12 w-12 rounded-full bg-accent-gold text-slate-900 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          title="Direct Dial Assistance"
          id="floating-call-btn"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Floating Appointment Booking Trigger */}
        <button
          onClick={() => openBooking()}
          className="h-12 px-4 rounded-full bg-gradient-to-r from-[#122B45] to-[#0A192F] text-white border border-accent-gold/45 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer font-semibold text-xs leading-none"
          title="Schedule Appointment"
          id="floating-scheduler-btn"
        >
          <CalendarRange className="h-4.5 w-4.5 text-accent-gold" />
          <span>Liaison Desk</span>
        </button>

        {/* Smooth Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="h-12 w-12 rounded-full bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-350 border border-gray-150 dark:border-slate-805 flex items-center justify-center shadow-md hover:border-accent-gold hover:scale-105 transition-all cursor-pointer"
            title="Scroll To Top"
            id="floating-scroll-top-btn"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>

    </div>
  );
}
