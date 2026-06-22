export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  category: 'Taxation' | 'GST' | 'Corporate' | 'Advisory' | 'Accounting' | 'Compliance & Audits';
  details: string[];
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Income Tax' | 'GST' | 'Business Registration' | 'Compliance & Audits' | 'CMA & Finance';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // Optional - our detailed reader manages full paragraphs dynamically
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  company: string;
  role: string;
  content: string;
  initials: string;
  verified: boolean;
}

export interface BookingDetails {
  name: string;
  phone: string;
  email: string;
  serviceRequested: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface TaxCalculationResult {
  taxableIncome: number;
  oldTax: number;
  newTax: number;
  savings: number;
  oldBreakdown: { slab: string; rate: string; tax: number }[];
  newBreakdown: { slab: string; rate: string; tax: number }[];
}
