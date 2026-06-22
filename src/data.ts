import { ServiceItem, FAQItem, BlogPost, TestimonialItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'itr-filing',
    name: 'Income Tax Return Filing',
    description: 'Filing ITR-1 to ITR-7 with precise calculation of tax liability, claim optimization, and full compliance under the latest finance act.',
    category: 'Taxation',
    details: [
      'Salaried individuals (ITR-1 & ITR-2)',
      'Business & professionals (ITR-3 & ITR-4)',
      'Firms, LLPs, & Joint Ventures (ITR-5)',
      'Corporate tax filing (ITR-6)',
      'Scrutiny response, rectification, & appeals representation'
    ],
    iconName: 'Percent'
  },
  {
    id: 'gst-registration',
    name: 'GST Registration & Setup',
    description: 'Seamless registration process under Central & State GST Acts, helping your business secure state licenses and initiate corporate sales.',
    category: 'GST',
    details: [
      'New GST registration & amendment of details',
      'Composition Scheme advice and registration',
      'E-way bill & e-invoicing configuration',
      'LUT filing for exporters',
      'GST cancellation & revocation services'
    ],
    iconName: 'Building2'
  },
  {
    id: 'gst-return-filing',
    name: 'GST Return Filing & Audits',
    description: 'Ensure accurate filing of monthly, quarterly, and annual returns including reconciliation of input tax credit (ITC) queries.',
    category: 'GST',
    details: [
      'GSTR-1, GSTR-3B filings',
      'GSTR-9 (Annual return) & GSTR-9C reconciliation statements',
      'ITC reconciliation (2A/2B matching) to prevent leakage',
      'Reply to GST notices and auditing defense support',
      'Representation before GST appellate authorities'
    ],
    iconName: 'Scale'
  },
  {
    id: 'project-reports',
    name: 'Detailed Project Reports (DPR)',
    description: 'Crafting high-quality visual and analytical project reports designed for banking, joint-venture capital, and state subsidies.',
    category: 'Advisory',
    details: [
      'Market feasibility assessment reports',
      'Financial projections, cash flow analysis, & break-even calculation',
      'Pioneer project reports for government initiatives',
      'Machinery, land planning, and deployment reports',
      'SBA & MSME scheme projection consulting'
    ],
    iconName: 'FileText'
  },
  {
    id: 'cma-data-preparation',
    name: 'CMA Data Preparation',
    description: 'Structuring Credit Monitoring Arrangement (CMA) data for high-ticket corporate bank loan approvals and working capital checks.',
    category: 'Advisory',
    details: [
      'Preparation of CMA data statements (Past & projected years)',
      'Ratio analysis (current ratio, debt-service coverage, MPBF)',
      'Fund-flow and cash-flow statement validation',
      'Presentations for banking panel discussion',
      'Working capital limit enhancement support'
    ],
    iconName: 'LayoutDashboard'
  },
  {
    id: 'accounting-services',
    name: 'Strategic Accounting Services',
    description: 'Designing tailor-made double-entry financial structures that streamline business operations, providing owners clarity and cost leaks detection.',
    category: 'Accounting',
    details: [
      'Periodic trial balances & financial statements compilation',
      'Fixed asset register setup and accounting audits',
      'Inventory ledger setup & integration guidelines',
      'Management Information System (MIS) reporting templates',
      'Corporate accounting audits coordination'
    ],
    iconName: 'ClipboardList'
  },
  {
    id: 'bookkeeping',
    name: 'Digital Bookkeeping Outsourcing',
    description: 'Offload daily transaction records, ledger updates, bank matching, and payroll processing to certified digital experts.',
    category: 'Accounting',
    details: [
      'Cloud accounting system integration (Tally Prime, QuickBooks, Zoho)',
      'Daily/weekly ledger posting of expenses & bills',
      'Bank and credit-card statements reconciliation',
      'Receivables & Payables tracking updates',
      'Monthly structural reviews'
    ],
    iconName: 'Coins'
  },
  {
    id: 'tax-planning',
    name: 'Advanced Tax Planning & Optimization',
    description: 'Strategic legal planning to minimize tax exposures for businesses, directors, property owners, and high earners legally.',
    category: 'Taxation',
    details: [
      'Structuring salaries & payouts to mitigate Surcharge details',
      'Capital gain optimizations (Section 54, 54EC, 54F custom plans)',
      'Optimization of business expense claims under Sec 37(1)',
      'Corporate structural design (Private Ltd vs Partnerships)',
      'Advanced tax calculations & advance tax reminder management'
    ],
    iconName: 'PiggyBank'
  },
  {
    id: 'business-advisory',
    name: 'Premium Business Advisory',
    description: 'Boardroom-level insights guiding business investments, mergers, joint ventures, capital raising, and operational structuring.',
    category: 'Advisory',
    details: [
      'Start-up valuation and growth structuring model',
      'Internal controls review and cost-saving audits',
      'Mergers, acquisitions, and asset acquisition advice',
      'Joint Venture planning & family governance trusts',
      'Risk mitigation analysis'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'compliance-services',
    name: 'Company & LLP Compliance',
    description: 'Managing end-to-end statutory records filing with the Ministry of Corporate Affairs (MCA), ensuring zero penalty exposures.',
    category: 'Corporate',
    details: [
      'Filing MCA annual returns (AOC-4 and MGT-7)',
      'LLP Form-8 & Form-11 compilation and statutory filings',
      'Board resolutions, minutes book, and register maintenance',
      'Director identification numbers (DIN) and DSC procurement',
      'Active-compliance compliance returns'
    ],
    iconName: 'ShieldCheck'
  },
  {
    id: 'business-registration',
    name: 'New Business Incorporation',
    description: 'Turn your entrepreneurial vision into a certified legal entity within 7-10 business days with all licenses ready.',
    category: 'Corporate',
    details: [
      'Private Limited Company (PVT LTD) registration',
      'Limited Liability Partnership (LLP) setup',
      'One Person Company (OPC) or Sole Proprietorship',
      'Partnership firm draft deed and registrar registration',
      'Startup India recognition with MSME Udyam credentials'
    ],
    iconName: 'Briefcase'
  },
  {
    id: 'professional-tax',
    name: 'State Level Professional Tax & Registrations',
    description: 'Custom state-level registration compliance for Gwalior businesses under Madhya Pradesh state guidelines.',
    category: 'Compliance & Audits',
    details: [
      'Professional Tax Enrollment Certificate (PTEC)',
      'Professional Tax Registration Certificate (PTRC)',
      'Monthly/annual PT returns filing',
      'Shop & Establishment license (Gumasta)',
      'Trademark filing & brand protection guidelines'
    ],
    iconName: 'Award'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the last date to file Income Tax Returns (ITR) in India?',
    answer: 'For individual taxpayers, salaried employees, and non-audit business cases, the standard deadline to file ITR is July 31st of the assessment year. For corporate entities and business cases requiring audit under Section 44AB, the deadline is October 31st. We highly advise starting document compilation by June to optimize tax planning deductions.',
    category: 'Income Tax'
  },
  {
    id: 'faq-2',
    question: 'What is the limit for GST Registration in Madhya Pradesh?',
    answer: 'In Madhya Pradesh, GST registration is mandatory for service providers if their annual turnover exceeds ₹20 Lakhs. For businesses engaged exclusively in the domestic supply of goods, the registration threshold is ₹40 Lakhs. However, businesses supplying goods inter-state must obtain a GST registration regardless of turnover.',
    category: 'GST'
  },
  {
    id: 'faq-3',
    question: 'How much tax can I save under Section 80C and 80D?',
    answer: 'Under Section 80C, you can claim deductions up to ₹1.5 Lakhs by investing in options like PPF, ELSS, EPF, NPS, or paying school fees. Additionally, Section 80D allows an extra deduction of up to ₹25,000 for health insurance premiums for yourself/spouse/children, plus up to ₹50,000 for senior citizen parents.',
    category: 'Income Tax'
  },
  {
    id: 'faq-4',
    question: 'What is the difference between CV/CMA Data and a Project Report?',
    answer: 'A Project Report is a master document explaining the business concept, market analysis, operations, machinery, and detailed technical aspects. CMA (Credit Monitoring Arrangement) Data is a specialized financial model displaying 2 past, 1 current, and 2-5 projected financial years, ratios, and fund flows specifically requested by bank credit committees to check loan feasibility.',
    category: 'CMA & Finance'
  },
  {
    id: 'faq-5',
    question: 'Which registration should I choose for my new startup: LLP or Private Limited?',
    answer: 'For businesses planning to raise external venture capital or issue stock options (ESOPs) to employees, a Private Limited Company is the global standard. For self-funded Co-founders seeking flexible management, lower annual compliance overhead, and the safety of limited liability without equity fundraising plans, an LLP (Limited Liability Partnership) is optimal.',
    category: 'Business Registration'
  },
  {
    id: 'faq-6',
    question: 'What documents are required to file my individual Income Tax Return?',
    answer: 'You will need: 1. PAN Card and Aadhaar Card. 2. Form 16 (from your employer). 3. Form 26AS & Annual Information Statement (AIS) which we fetch. 4. Bank account statement showing savings interest. 5. Investment proofs (LIC, PPF, ELSS). 6. House loan interest certificate (if applicable).',
    category: 'Income Tax'
  },
  {
    id: 'faq-7',
    question: 'Is a physical meeting mandatory to start tax services with your firm in Gwalior?',
    answer: 'No, while we love welcoming clients to our beautiful physical office in Thatipur, Gwalior, we run a secure digital client onboarding infrastructure. More than 65% of our consulting is transacted digitally via secure email, WhatsApp PDF dispatch, and zoom. We serve clients across Gwalior, MP, Delhi NCR, and NRI clients overseas.',
    category: 'Compliance & Audits'
  },
  {
    id: 'faq-8',
    question: 'What is GST Composition Scheme and who can opt for it?',
    answer: 'The Composition Scheme is a simplified GST structure for small businesses with an annual turnover up to ₹1.5 Crores (₹75 Lakhs for regional services). Under this, taxpayers pay GST at a flat minimal percentage (e.g., 1% for traders/manufacturers, 6% for service providers) without claiming ITC, requiring simple quarterly billing instead of monthly calculations.',
    category: 'GST'
  },
  {
    id: 'faq-9',
    question: 'What is Presumptive Taxation under Section 44AD and 44ADA?',
    answer: 'Section 44AD allows small businesses (turnover < ₹3 Crores) to declare their business profits at a flat 6% (for digital sales) or 8% of total turnover without maintaining complex ledger records. Section 44ADA allows professionals like doctors, engineers, and designers (receipts < ₹75 Lakhs) to declare 50% of receipts as their flat taxable income, avoiding compliance stress.',
    category: 'Income Tax'
  },
  {
    id: 'faq-10',
    question: 'What is the penalty for late filing of GST and ITR returns?',
    answer: 'The penalty for filing GSTR late is ₹50 per day (₹20 if Nil return) up to 0.25% of turnover. For ITR, a late filing fee of ₹1,000 (if taxable income is up to ₹5 Lakhs) or ₹5,000 (if income is above ₹5 Lakhs) is charged under section 234F. Further, 1% per month interest also accumulates on outstanding dues.',
    category: 'Compliance & Audits'
  },
  {
    id: 'faq-11',
    question: 'When is a Tax Audit mandatory for an Indian business under Section 44AB?',
    answer: 'A Tax Audit is mandatory if a business turnover exceeds ₹1 Crore. However, if cash receipts and cash expenditures constitute less than 5% of total transactions (highly digital businesses), this threshold is elevated to ₹10 Crores. For professionals, the threshold limit is ₹50 Lakhs.',
    category: 'Compliance & Audits'
  },
  {
    id: 'faq-12',
    question: 'What is MSME Udyam Registration and how does it benefit small businesses?',
    answer: 'Udyam Registration is a free government certification scheme for MSMEs. Benefits include collateral-free bank loans, priority sector lending, protection against delayed payments from corporate buyers (law mandates payouts within 45 days), eligibility for ISO certification subsidies, and discounts on trademark filings.',
    category: 'Business Registration'
  },
  {
    id: 'faq-13',
    question: 'How do you charge for Project Reports and CMA preparations?',
    answer: 'Our professional fees are highly transparent with zero hidden costs. Pricing depends entirely on the size of the loan, project complexity, and number of years projected. We provide a firm written quotation up-front before initiating document study, which includes full assistance during actual bank credit discussions.',
    category: 'CMA & Finance'
  },
  {
    id: 'faq-14',
    question: 'Can you help in replying to tax notices from previous financial years?',
    answer: 'Yes, we specialize in high-end tax representations, audits, and notice resolutions. Our technical team deep-dives into your historical tax portals, matches Form 26AS, tracks down transaction gaps, and files exact replies or rectification requests under Section 154 to resolve outstanding demands.',
    category: 'Compliance & Audits'
  },
  {
    id: 'faq-15',
    question: 'What is GMs Shop & Establishment license (Gumasta)?',
    answer: 'In Madhya Pradesh, Gumasta is a mandatory trade license required by municipal departments to physically operate a shop or office storefront. It serves as essential commercial address verification, enabling CAs to legally process corporate bank Current Account applications for your business.',
    category: 'Business Registration'
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'New vs Old Tax Regime: Dynamic Optimization for Indian Salaried Employees in FY 2025-26',
    excerpt: 'Detailed comparison of tax slabs, deductions allowable under standard structures, and how to choose the right regime for your profile.',
    category: 'Tax Strategy',
    readTime: '6 min read',
    date: 'June 18, 2026',
    author: 'CA Adarsh Gupta',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-2',
    title: 'The Blueprint to Securing Business Loan approvals: Standard CMA Data Requirements and Bank Checklists',
    excerpt: 'Avoid credit rejection. Learn how bank credit teams audit working capital cycles, current ratios, and MPBF formulas in your financial files.',
    category: 'Corporate Finance',
    readTime: '8 min read',
    date: 'May 24, 2026',
    author: 'Finance Consultant Desk',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-3',
    title: 'Navigating GST ITC Reconciliation (Circular 183): A Comprehensive Shield and Checklist against department notices',
    excerpt: 'Mastering the compliance alignment of 2A, 2B, and GSTR-3B filings to shield your enterprise cash flows and protect critical profits.',
    category: 'GST Compliance',
    readTime: '5 min read',
    date: 'April 11, 2026',
    author: 'GST Assurance Division',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Sanjeev Mishra',
    rating: 5,
    company: 'Mishra Manufacturing Industries',
    role: 'Managing Director',
    content: 'Gupta Adarsh & Co. completely reorganized our corporate tax structure and CMA projections. Thanks to their detailed insights, our bank loan of ₹2.5 Crores was sanctioned with zero hassles. The team is dedicated and extremely professional.',
    initials: 'SM',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Dr. Ankita Sharma',
    rating: 5,
    company: 'Fortis Gwalior Panelist',
    role: 'Senior Consultant Pedodontist',
    content: 'Filing my ITR was always stressful due to dual hospital consultancy programs. This firm handled my returns under Presumptive Taxation, planning my tax deductions seamlessly. Their digital portal support meant I sat in clinic while they handled everything.',
    initials: 'AS',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Rohit Agrawal',
    rating: 5,
    company: 'Invento Tech Labs',
    role: 'Founder & CEO',
    content: 'Choosing a CA in Gwalior who understands startups is hard. CA Adarsh Gupta was a breath of fresh air. They set up our LLP registration and handled our MSME classification flawlessly. They are practically part of our advisory board!',
    initials: 'RA',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Vijay Kirar',
    rating: 5,
    company: 'Kirar & Sons Wholesale',
    role: 'Managing Partner',
    content: 'We migrated our entire operations from manual bookkeeping to cloud-based GSTR filings with their support. Extremely prompt responsiveness, and professional advisory. Five stars for transparent billing structure.',
    initials: 'VK',
    verified: true
  }
];

export const INDUSTRIES_SERVED = [
  { name: 'Manufacturing', icon: 'HardHat', description: 'CMA data projection, factory compliance audits' },
  { name: 'Healthcare & Doctors', icon: 'Activity', description: 'ITR-4 professional setups, optimal deduction maps' },
  { name: 'Startups & Tech', icon: 'Smartphone', description: 'LLP incorporation, MSME licenses, seed advisory' },
  { name: 'Retail & Shops', icon: 'Store', description: 'GST filing, daily bookkeeping, MP Gumasta setups' },
  { name: 'Real Estate & Builders', icon: 'Home', description: 'Capital gain optimization plans, project reports' },
  { name: 'Restaurants & Hotels', icon: 'Utensils', description: 'GST accounting, state licensure tax clearances' }
];

export const PROCESS_TIMELINE = [
  {
    step: '01',
    title: 'Book Consultation',
    description: 'Schedule a discovery session through our digital system, phone, or in person at our Gwalior office to evaluate your requirements.'
  },
  {
    step: '02',
    title: 'Document Exchange',
    description: 'Safely transfer your files (Form 16, Bank sheets, GST portal access, invoices) via secure client drive or physical submission.'
  },
  {
    step: '03',
    title: 'Expert Analysis',
    description: 'Our senior chartered accountants deep-dive into your profiles, calculating optimal tax exemptions and auditing reconciliations.'
  },
  {
    step: '04',
    title: 'Execution & Approval',
    description: 'We draft the legal filing forms, CMA models, or registration requests and share structural summaries for your written review.'
  },
  {
    step: '05',
    title: 'Compliance Completed',
    description: 'Upon confirmation, we transmit filings directly with government servers and dispatch certified visual receipts and proofs.'
  }
];

export const BENTO_ADVANTAGES = [
  {
    title: '⭐ Google Top-Rated Firm',
    description: 'Maintaining a 4.9-star rating based on 200+ actual reviews from satisfied business operators of Gwalior.',
    className: 'md:col-span-2 bg-gradient-to-br from-[#0A192F] to-[#122B45] text-white border-accent-gold/25'
  },
  {
    title: '⚡ Fast Turnaround Time',
    description: 'We prioritize deadlines. Business registrations finished within 7-10 working days; standard tax filings within 48 hours.',
    className: 'bg-white text-gray-900 border-gray-100'
  },
  {
    title: '🔒 Confirmed Confidentiality',
    description: 'Your assets, capital structures, and salary figures are stored natively inside encrypted corporate databases.',
    className: 'bg-white text-gray-900 border-gray-100'
  },
  {
    title: '💎 Transparent Fixed Pricing',
    description: 'No surprise bills or commissions. Honest, standard billing quoted in writing before we accept any file.',
    className: 'md:col-span-2 bg-gradient-to-r from-neutral-50 to-neutral-100 border-gray-200 text-gray-900'
  },
  {
    title: '💼 Expert Advisors',
    description: 'Led by licensed experts with years of expertise across central tax structures and commercial cases.',
    className: 'bg-white text-gray-900 border-gray-100'
  }
];
