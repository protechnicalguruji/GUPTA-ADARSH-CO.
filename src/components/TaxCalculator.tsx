import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, TrendingUp, HelpCircle, ArrowRight, BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react';
import { TaxCalculationResult } from '../types';

interface TaxCalculatorProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function TaxCalculator({ onOpenBooking }: TaxCalculatorProps) {
  const [grossIncome, setGrossIncome] = useState<number>(1200000);
  const [sec80C, setSec80C] = useState<number>(150000);
  const [sec80D, setSec80D] = useState<number>(25000);
  const [sec24, setSec24] = useState<number>(0);
  const [otherDeductions, setOtherDeductions] = useState<number>(0);

  const [result, setResult] = useState<TaxCalculationResult | null>(null);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const calculateTax = () => {
    // 1. New Tax Regime Calculation (FY 2025-26 / AY 2026-27)
    // Under New Regime: Standard Deduction = 75,000 (retained & expanded). No 80C, 80D, Sec 24 allowable.
    const newStdDeduction = 75000;
    const taxableNew = Math.max(0, grossIncome - newStdDeduction);
    let rawTaxNew = 0;
    const newBreakdown: { slab: string; rate: string; tax: number }[] = [];

    // New Slabs:
    // Up to 3,000,000 (3L): Nil
    // 3L - 7L: 5% (rebate up to 7,000,000 exists, wait; tax is rebated to 0 if total taxable income <= 7L)
    // 7L - 10L: 10%
    // 10L - 12L: 15%
    // 12L - 15L: 20%
    // Above 15L: 30%
    const currentTaxableNew = taxableNew;

    // Slab 1: Up to 3,00000
    newBreakdown.push({ slab: 'Up to ₹3L', rate: '0%', tax: 0 });

    // Slab 2: 3L to 7L (Amount: 4L)
    if (currentTaxableNew > 300000) {
      const amt = Math.min(currentTaxableNew, 700000) - 300000;
      const tax = amt * 0.05;
      rawTaxNew += tax;
      newBreakdown.push({ slab: '₹3L - ₹7L', rate: '5%', tax });
    } else {
      newBreakdown.push({ slab: '₹3L - ₹7L', rate: '5%', tax: 0 });
    }

    // Slab 3: 7L to 10L (Amount: 3L)
    if (currentTaxableNew > 700000) {
      const amt = Math.min(currentTaxableNew, 1000000) - 700000;
      const tax = amt * 0.10;
      rawTaxNew += tax;
      newBreakdown.push({ slab: '₹7L - ₹10L', rate: '10%', tax });
    } else {
      newBreakdown.push({ slab: '₹7L - ₹10L', rate: '10%', tax: 0 });
    }

    // Slab 4: 10L to 12L (Amount: 2L)
    if (currentTaxableNew > 1000000) {
      const amt = Math.min(currentTaxableNew, 1200000) - 1000000;
      const tax = amt * 0.15;
      rawTaxNew += tax;
      newBreakdown.push({ slab: '₹10L - ₹12L', rate: '15%', tax });
    } else {
      newBreakdown.push({ slab: '₹10L - ₹12L', rate: '15%', tax: 0 });
    }

    // Slab 5: 12L to 15L (Amount: 3L)
    if (currentTaxableNew > 1200000) {
      const amt = Math.min(currentTaxableNew, 1500000) - 1200000;
      const tax = amt * 0.20;
      rawTaxNew += tax;
      newBreakdown.push({ slab: '₹12L - ₹15L', rate: '20%', tax });
    } else {
      newBreakdown.push({ slab: '₹12L - ₹15L', rate: '20%', tax: 0 });
    }

    // Slab 6: Above 15L
    if (currentTaxableNew > 1500000) {
      const amt = currentTaxableNew - 1500000;
      const tax = amt * 0.30;
      rawTaxNew += tax;
      newBreakdown.push({ slab: 'Above ₹15L', rate: '30%', tax });
    } else {
      newBreakdown.push({ slab: 'Above ₹15L', rate: '30%', tax: 0 });
    }

    // Rebate 87A for New Regime (If taxable income up to ₹7,000,000, rawTaxNew is 0)
    if (taxableNew <= 700000) {
      rawTaxNew = 0;
    }

    // Cess (4%)
    const finalNewTax = rawTaxNew + (rawTaxNew * 0.04);


    // 2. Old Tax Regime Calculation
    // Under Old Regime: Standard Deduction = 50,000. Cap 80C at 1.5L, 80D at 25k (general), Sec 24 at 2L.
    const deductionsOld = 50000 + Math.min(150000, sec80C) + Math.min(25000, sec80D) + Math.min(200000, sec24) + otherDeductions;
    const taxableOld = Math.max(0, grossIncome - deductionsOld);
    let rawTaxOld = 0;
    const oldBreakdown: { slab: string; rate: string; tax: number }[] = [];

    // Old Slabs:
    // Up to 2,50,000: Nil
    // 2.5L to 5L: 5%
    // 5L to 10L: 20%
    // Above 10L: 30%
    const currentTaxableOld = taxableOld;

    // Up to 2.5L
    oldBreakdown.push({ slab: 'Up to ₹2.5L', rate: '0%', tax: 0 });

    // 2.5L to 5L (Amount: 2.5L)
    if (currentTaxableOld > 250000) {
      const amt = Math.min(currentTaxableOld, 500000) - 250000;
      const tax = amt * 0.05;
      rawTaxOld += tax;
      oldBreakdown.push({ slab: '₹2.5L - ₹5L', rate: '5%', tax });
    } else {
      oldBreakdown.push({ slab: '₹2.5L - ₹5L', rate: '5%', tax: 0 });
    }

    // 5L to 10L (Amount: 5L)
    if (currentTaxableOld > 500000) {
      const amt = Math.min(currentTaxableOld, 1000000) - 500000;
      const tax = amt * 0.20;
      rawTaxOld += tax;
      oldBreakdown.push({ slab: '₹5L - ₹10L', rate: '20%', tax });
    } else {
      oldBreakdown.push({ slab: '₹5L - ₹10L', rate: '20%', tax: 0 });
    }

    // Above 10L
    if (currentTaxableOld > 1000000) {
      const amt = currentTaxableOld - 1000000;
      const tax = amt * 0.30;
      rawTaxOld += tax;
      oldBreakdown.push({ slab: 'Above ₹10L', rate: '30%', tax });
    } else {
      oldBreakdown.push({ slab: 'Above ₹10L', rate: '30%', tax: 0 });
    }

    // Rebate 87A for Old Regime (If taxable income up to ₹5,000,000, rawTaxOld is 0)
    if (taxableOld <= 500000) {
      rawTaxOld = 0;
    }

    // Cess (4%)
    const finalOldTax = rawTaxOld + (rawTaxOld * 0.04);

    const savings = Math.max(0, Math.abs(finalOldTax - finalNewTax));

    setResult({
      taxableIncome: taxableNew,
      oldTax: finalOldTax,
      newTax: finalNewTax,
      savings: finalOldTax === finalNewTax ? 0 : savings,
      oldBreakdown,
      newBreakdown
    });
  };

  useEffect(() => {
    calculateTax();
  }, [grossIncome, sec80C, sec80D, sec24, otherDeductions]);

  const recommendedRegime = result && result.newTax < result.oldTax ? 'NEW REGIME' : 'OLD REGIME';

  return (
    <section id="tax-calculator" className="py-32 bg-neutral-bg dark:bg-[#0A192F]/60 scroll-mt-24 border-t border-gray-159 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title branding header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-[#D4AF37] text-sm font-semibold uppercase tracking-widest font-mono">
            <Calculator className="h-4 w-4" />
            Optimized Engine
          </div>
          <h2 className="font-serif text-4xl md:text-[54px] lg:text-[56px] leading-[1.12] font-medium tracking-tight text-[#0A192F] dark:text-white">
            Dual Regime Tax Optimizer
          </h2>
          <p className="text-base text-gray-500 dark:text-slate-400 font-sans max-w-2xl mx-auto">
            Input gross earning profiles and deductions. Compare tax liabilities of the New structural slabs vs traditional Old regimes instantly.
          </p>
        </div>

        {/* Dynamic Interactive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Inputs Section */}
          <div className="lg:col-span-5 bg-white dark:bg-[#122B45]/50 rounded-[32px] border border-gray-100 dark:border-slate-800 p-8 shadow-sm space-y-7">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#0A192F] dark:text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent-gold" />
                Financial Parameters
              </h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Adjust sliders to align estimates.</p>
            </div>

            {/* Income Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-700 dark:text-slate-300">Annual Gross Salary / Profits (INR)</span>
                <span className="font-mono text-accent-gold font-semibold text-base">{formatCurrency(grossIncome)}</span>
              </div>
              <input
                type="range"
                min={200000}
                max={5000000}
                step={50000}
                value={grossIncome}
                onChange={(e) => setGrossIncome(Number(e.target.value))}
                className="w-full accent-accent-gold bg-gray-100 dark:bg-slate-800 h-2 rounded-lg appearance-none cursor-pointer"
                id="gross-income-slider"
              />
              <div className="flex justify-between text-[11.5px] text-gray-400 font-mono">
                <span>₹2L</span>
                <span>₹25L</span>
                <span>₹50L</span>
              </div>
            </div>

            {/* Section 80C Slider */}
            <div className="space-y-3 pt-3 border-t border-gray-50 dark:border-slate-850">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-700 dark:text-slate-300 flex items-center gap-1.5">
                  Section 80C Deductions
                  <HelpCircle className="h-4.5 w-4.5 text-gray-400 cursor-pointer" title="PPF, PF, ELSS, Insurance premiums" />
                </span>
                <span className="font-mono text-gray-600 dark:text-slate-300 text-sm font-semibold">{formatCurrency(sec80C)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={150000}
                step={5000}
                value={sec80C}
                onChange={(e) => setSec80C(Number(e.target.value))}
                className="w-full accent-accent-gold bg-gray-100 dark:bg-slate-800 h-2 rounded-lg appearance-none cursor-pointer"
                id="deductions-80c-slider"
              />
              <div className="flex justify-between text-[11.5px] text-gray-400 font-mono">
                <span>₹0</span>
                <span>Max: ₹1.5L</span>
              </div>
            </div>

            {/* Section 80D Slider */}
            <div className="space-y-3 pt-3 border-t border-gray-50 dark:border-slate-850">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-700 dark:text-slate-300 flex items-center gap-1.5">
                  Medical Insurance (80D)
                </span>
                <span className="font-mono text-gray-600 dark:text-slate-300 text-sm font-semibold">{formatCurrency(sec80D)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={25000}
                step={5000}
                value={sec80D}
                onChange={(e) => setSec80D(Number(e.target.value))}
                className="w-full accent-accent-gold bg-gray-100 dark:bg-slate-800 h-2 rounded-lg appearance-none cursor-pointer"
                id="medical-80d-slider"
              />
              <div className="flex justify-between text-[11.5px] text-gray-400 font-mono">
                <span>₹0</span>
                <span>Max: ₹25k</span>
              </div>
            </div>

            {/* Section 24b Home Loan Slider */}
            <div className="space-y-3 pt-3 border-t border-gray-50 dark:border-slate-850">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-700 dark:text-slate-300 pr-2">
                  Housing Loan Interest (Sec 24b)
                </span>
                <span className="font-mono text-gray-600 dark:text-slate-300 text-sm font-semibold">{formatCurrency(sec24)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={200000}
                step={10000}
                value={sec24}
                onChange={(e) => setSec24(Number(e.target.value))}
                className="w-full accent-accent-gold bg-gray-100 dark:bg-slate-800 h-2 rounded-lg appearance-none cursor-pointer"
                id="homeloan-sec24-slider"
              />
              <div className="flex justify-between text-[11.5px] text-gray-400 font-mono">
                <span>₹0</span>
                <span>Max: ₹2L</span>
              </div>
            </div>

            {/* Note alert */}
            <div className="p-5 rounded-2xl bg-[#0A192F]/5 dark:bg-[#122B45]/70 border border-gray-100 dark:border-slate-800 text-[12.5px] text-slate-600 dark:text-slate-300 flex gap-3 items-start">
              <AlertCircle className="h-5 w-5 text-accent-gold shrink-0 mt-0.5" />
              <span>
                Standard deductions (₹75k for New, ₹50k for Old) are integrated. Under current regulations, the New Regime provides a complete rebate up to ₹7,00,000.
              </span>
            </div>
          </div>
          
          {/* Outputs & Recommendation */}
          <div className="lg:col-span-7 space-y-7">
            
            {result && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5.5">
                {/* New Regime Card */}
                <div className={`p-8 rounded-[28px] border transition-all ${
                  recommendedRegime === 'NEW REGIME'
                    ? 'bg-[#0A192F] text-white border-accent-gold shadow-lg shadow-accent-gold/5'
                    : 'bg-white text-gray-900 border-gray-100 dark:bg-[#122B45]/10 dark:text-white dark:border-slate-800/80'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-widest font-mono uppercase text-slate-400">NEW REGIME</span>
                    {recommendedRegime === 'NEW REGIME' && (
                      <span className="px-3 py-1 rounded-full bg-accent-gold/20 border border-accent-gold/40 text-accent-gold text-[10px] font-bold font-mono">
                        OPTIMAL CHOICE
                      </span>
                    )}
                  </div>
                  <h4 className="text-[34px] font-serif font-medium mt-4 text-accent-gold">
                    {formatCurrency(result.newTax)}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">Calculated Annual Tax liability</p>
                  
                  <div className="mt-5.5 pt-5.5 border-t border-slate-700/30 text-sm text-gray-400 space-y-2.5 font-mono">
                    <div className="flex justify-between">
                      <span>Standard Deduction:</span>
                      <span>-₹75,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Other Savings claims:</span>
                      <span>Not Allowed</span>
                    </div>
                  </div>
                </div>

                {/* Old Regime Card */}
                <div className={`p-8 rounded-[28px] border transition-all ${
                  recommendedRegime === 'OLD REGIME'
                    ? 'bg-[#0A192F] text-white border-accent-gold shadow-lg shadow-accent-gold/5'
                    : 'bg-white text-gray-900 border-gray-100 dark:bg-[#122B45]/10 dark:text-white dark:border-slate-800/80'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-widest font-mono uppercase text-slate-400">OLD REGIME</span>
                    {recommendedRegime === 'OLD REGIME' && (
                      <span className="px-3 py-1 rounded-full bg-accent-gold/20 border border-accent-gold/40 text-accent-gold text-[10px] font-bold font-mono">
                        OPTIMAL CHOICE
                      </span>
                    )}
                  </div>
                  <h4 className="text-[34px] font-serif font-medium mt-4 text-accent-gold">
                    {formatCurrency(result.oldTax)}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">Calculated Annual Tax liability</p>

                  <div className="mt-5.5 pt-5.5 border-t border-slate-700/30 text-sm text-gray-400 space-y-2.5 font-mono">
                    <div className="flex justify-between">
                      <span>Standard Deduction:</span>
                      <span>-₹50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deductions claimed:</span>
                      <span>-{formatCurrency(grossIncome - result.taxableIncome + 25000)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Savings & Advisory Action Box */}
            {result && (
              <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#031122] to-[#0A192F] text-white border border-accent-gold/30 p-8 flex flex-col md:flex-row items-center justify-between gap-7.5 shadow-xl">
                <div className="space-y-3 text-center md:text-left">
                  <div className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase flex items-center justify-center md:justify-start gap-1.5 font-mono">
                    <TrendingUp className="h-4.5 w-4.5" />
                    Recommended Strategic Savings Output
                  </div>
                  {result.savings > 0 ? (
                    <>
                      <h3 className="font-serif text-3xl md:text-[38px] leading-tight font-semibold text-white">
                        Maximize Assets by <span className="text-accent-gold">{formatCurrency(result.savings)}</span>
                      </h3>
                      <p className="text-sm text-slate-400 max-w-md">
                        Our tax planning algorithms recommend selecting the <strong className="text-white">{recommendedRegime}</strong>. Tax systems undergo rapid changes; our specialists structure safe exemptions.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-serif text-3xl md:text-4xl font-semibold text-white">
                        Both Regimes are Balanced
                      </h3>
                      <p className="text-sm text-slate-400 max-w-sm">
                        Calculated tax values are identical. Let us engineer customized structural capital plans to optimize investments.
                      </p>
                    </>
                  )}
                </div>

                <button
                  onClick={() => onOpenBooking(`Tax planning under ${recommendedRegime}`)}
                  className="rounded-xl bg-accent-gold text-gray-900 font-bold px-7.5 py-4 text-sm shadow-md hover:bg-gold-hover transition-colors flex items-center gap-2 shrink-0 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  id="calc-advisory-btn"
                >
                  Apply These Exemptions
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}

            {/* Slab details accordion */}
            <div className="rounded-[28px] border border-gray-150 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-7 space-y-5.5">
              <h4 className="text-sm font-bold tracking-widest text-[#0A192F] dark:text-slate-200 uppercase flex items-center gap-2 font-sans">
                <BookOpen className="h-4.5 w-4.5 text-accent-gold" />
                Finance Act Slabs & Cess Auditing Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                {/* New regime list */}
                <div className="space-y-2.5 border-r border-gray-100 dark:border-slate-800 pr-2">
                  <span className="font-bold text-sm text-[#0A192F] dark:text-white">New Regime Slab breakdown:</span>
                  <div className="space-y-2 font-mono text-gray-500 dark:text-slate-400 text-xs">
                    <div className="flex justify-between"><span>₹0 - ₹3,00,000</span> <span>0%</span></div>
                    <div className="flex justify-between"><span>₹3,00,000 - ₹7,00,000</span> <span>5%</span></div>
                    <div className="flex justify-between"><span>₹7,00,000 - ₹10,00,000</span> <span>10%</span></div>
                    <div className="flex justify-between"><span>₹10,00,000 - ₹12,00,000</span> <span>15%</span></div>
                    <div className="flex justify-between"><span>₹12,00,000 - ₹15,00,000</span> <span>20%</span></div>
                    <div className="flex justify-between"><span>Above ₹15,00,000</span> <span>30%</span></div>
                  </div>
                </div>

                {/* Old regime list */}
                <div className="space-y-2.5">
                  <span className="font-bold text-sm text-[#0A192F] dark:text-white">Old Regime Slab breakdown:</span>
                  <div className="space-y-2 font-mono text-gray-500 dark:text-slate-400 text-xs">
                    <div className="flex justify-between"><span>₹0 - ₹2,50,000</span> <span>0%</span></div>
                    <div className="flex justify-between"><span>₹2,50,000 - ₹5,00,000</span> <span>5%</span></div>
                    <div className="flex justify-between"><span>₹5,00,000 - ₹10,00,000</span> <span>20%</span></div>
                    <div className="flex justify-between"><span>Above ₹10,00,000</span> <span>30%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
