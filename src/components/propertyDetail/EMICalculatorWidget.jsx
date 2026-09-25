import React, { useState } from 'react';
import { Calculator, IndianRupee, PieChart, ShieldCheck, Banknote } from 'lucide-react';
import { calculateEMI, INDIAN_BANK_RATES } from '../../utils/emiCalculator';
import { formatIndianPrice, formatIndianNumber, formatFullINR } from '../../utils/currencyFormatter';

export default function EMICalculatorWidget({ property }) {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); // 20% down payment
  const [interestRate, setInterestRate] = useState(8.50);
  const [tenureYears, setTenureYears] = useState(20);

  if (!property || property.purpose === 'Rent' || property.purpose === 'PG-Co-living') {
    return null; // EMI calculator applies for purchase properties
  }

  const initialPrice = property?.price || 10000000;
  const loanAmount = Math.round(initialPrice * (1 - downPaymentPercent / 100));

  const emiResult = calculateEMI(loanAmount, interestRate, tenureYears);

  // Estimated stamp duty & registration
  const stampDutyAmt = Math.round(initialPrice * ((property.stampDutyRate || 6) / 100));
  const registrationAmt = property.registrationFee || 30000;

  return (
    <div 
      style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        padding: '28px',
        marginBottom: '32px',
        boxShadow: 'var(--shadow-xs)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calculator size={22} color="var(--primary)" />
          <h3 style={{ fontSize: '20px', color: 'var(--primary)' }}>Home Loan EMI & Cost Breakdown</h3>
        </div>
        <span style={{ fontSize: '12px', background: 'var(--saffron-light)', color: 'var(--saffron)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>
          Indian Banks Rates
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {/* Left: Sliders */}
        <div>
          {/* Property Value */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Property Base Price:</span>
              <strong>{formatFullINR(initialPrice)}</strong>
            </div>
          </div>

          {/* Down Payment Slider */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
              <span>Down Payment ({downPaymentPercent}%):</span>
              <strong style={{ color: 'var(--saffron)' }}>{formatFullINR(Math.round(initialPrice * (downPaymentPercent / 100)))}</strong>
            </div>
            <input 
              type="range" 
              min={10} 
              max={50} 
              value={downPaymentPercent}
              onChange={e => setDownPaymentPercent(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--saffron)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)' }}>
              <span>10% (Min)</span>
              <span>20% (Standard)</span>
              <span>50%</span>
            </div>
          </div>

          {/* Loan Amount */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '13px' }}>
              <span>Net Loan Amount:</span>
              <strong style={{ color: 'var(--primary)' }}>{formatFullINR(loanAmount)}</strong>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
              <span>Annual Interest Rate:</span>
              <strong style={{ color: 'var(--primary)' }}>{interestRate.toFixed(2)}% p.a.</strong>
            </div>
            <input 
              type="range" 
              min={7.5} 
              max={12.0} 
              step={0.1}
              value={interestRate}
              onChange={e => setInterestRate(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--primary)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)' }}>
              <span>7.5%</span>
              <span>8.5% (SBI/HDFC)</span>
              <span>12.0%</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
              <span>Loan Tenure:</span>
              <strong>{tenureYears} Years ({tenureYears * 12} Months)</strong>
            </div>
            <input 
              type="range" 
              min={5} 
              max={30} 
              value={tenureYears}
              onChange={e => setTenureYears(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--primary)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)' }}>
              <span>5 Yrs</span>
              <span>20 Yrs</span>
              <span>30 Yrs</span>
            </div>
          </div>
        </div>

        {/* Right: EMI Output Box & Bank Rates */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div 
            style={{
              background: 'var(--bg-page)',
              border: '2px solid var(--primary)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              textAlign: 'center'
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: 'var(--text-muted)' }}>
              ESTIMATED MONTHLY EMI
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 800, color: 'var(--primary)', margin: '6px 0' }}>
              {formatFullINR(emiResult.monthlyEMI)} <span style={{ fontSize: '14px', fontWeight: 500 }}>/ mo</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid var(--border-color)', paddingTop: '12px', marginTop: '12px', fontSize: '12px' }}>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block' }}>Principal</span>
                <strong>{formatIndianPrice(emiResult.principal)}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block' }}>Total Interest</span>
                <strong style={{ color: 'var(--saffron)' }}>{formatIndianPrice(emiResult.totalInterest)}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block' }}>Total Payable</span>
                <strong>{formatIndianPrice(emiResult.totalPayment)}</strong>
              </div>
            </div>
          </div>

          {/* Statutory Government Charges Estimate */}
          <div style={{ background: 'var(--bg-alt)', padding: '14px', borderRadius: 'var(--radius-md)', fontSize: '12px' }}>
            <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '6px' }}>
              🏛️ Government Registration & Taxes ({property.state}):
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Stamp Duty (~{property.stampDutyRate || 6}%):</span>
              <strong>{formatFullINR(stampDutyAmt)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Registration Charges:</span>
              <strong>{formatFullINR(registrationAmt)}</strong>
            </div>
          </div>

          {/* Bank Rate Quick Selectors */}
          <div style={{ fontSize: '12px' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
              Select Bank Rate Benchmark:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {INDIAN_BANK_RATES.slice(0, 3).map(b => (
                <button
                  key={b.bank}
                  type="button"
                  onClick={() => setInterestRate(b.rate)}
                  style={{
                    fontSize: '11px',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: interestRate === b.rate ? '1.5px solid var(--saffron)' : '1px solid var(--border-color)',
                    background: interestRate === b.rate ? 'var(--saffron-light)' : '#fff',
                    color: interestRate === b.rate ? 'var(--saffron)' : 'var(--text-main)',
                    fontWeight: 600
                  }}
                >
                  {b.bank.split(' ')[0]} @ {b.rate}%
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
