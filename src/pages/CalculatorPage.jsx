import React, { useState } from 'react';
import { 
  Calculator, IndianRupee, PieChart, Banknote, 
  HelpCircle, ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { calculateEMI, calculateEligibility, INDIAN_BANK_RATES } from '../utils/emiCalculator';
import { formatFullINR, formatIndianPrice, formatIndianNumber } from '../utils/currencyFormatter';
import { Link } from 'react-router-dom';

export default function CalculatorPage() {
  // EMI State
  const [loanAmount, setLoanAmount] = useState(6500000); // 65 Lakh
  const [interestRate, setInterestRate] = useState(8.50);
  const [tenureYears, setTenureYears] = useState(20);

  // Eligibility State
  const [monthlyIncome, setMonthlyIncome] = useState(150000); // 1.5 Lakh / mo
  const [existingEMIs, setExistingEMIs] = useState(15000);

  const emiData = calculateEMI(loanAmount, interestRate, tenureYears);
  const eligibleLoan = calculateEligibility(monthlyIncome, existingEMIs, interestRate, tenureYears);

  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        <div className="section-header">
          <span className="section-tag">
            <Calculator size={13} />
            Financial Planning
          </span>
          <h1 className="section-title">Indian Home Loan EMI & Eligibility Calculator</h1>
          <p className="section-subtitle">
            Accurate calculations based on RBI repo-linked benchmarks and major Indian commercial bank interest rates.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: 'clamp(16px, 4vw, 36px)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '40px'
          }}
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(20px, 4vw, 40px)',
              alignItems: 'center'
            }}
          >
            {/* Left: Interactive Controls */}
            <div>
              <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '24px' }}>
                Loan Parameters (INR ₹)
              </h3>

              {/* Slider 1: Loan Amount */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Desired Loan Amount
                  </label>
                  <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary)' }}>
                    {formatFullINR(loanAmount)} ({formatIndianPrice(loanAmount)})
                  </span>
                </div>
                <input 
                  type="range"
                  min={1000000} // 10 Lakh
                  max={100000000} // 10 Cr
                  step={500000}
                  value={loanAmount}
                  onChange={e => setLoanAmount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--saffron)' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  <span>₹10 Lakh</span>
                  <span>₹50 Lakh</span>
                  <span>₹2.5 Cr</span>
                  <span>₹10 Cr</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Interest Rate (% per annum)
                  </label>
                  <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary)' }}>
                    {interestRate.toFixed(2)}% p.a.
                  </span>
                </div>
                <input 
                  type="range"
                  min={7.5}
                  max={13.0}
                  step={0.05}
                  value={interestRate}
                  onChange={e => setInterestRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--primary)' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  <span>7.5% (Repo linked)</span>
                  <span>8.5% (Avg Bank)</span>
                  <span>13.0% (NBFC)</span>
                </div>
              </div>

              {/* Slider 3: Loan Tenure */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Tenure (Years)
                  </label>
                  <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary)' }}>
                    {tenureYears} Years ({tenureYears * 12} Installments)
                  </span>
                </div>
                <input 
                  type="range"
                  min={1}
                  max={30}
                  value={tenureYears}
                  onChange={e => setTenureYears(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--primary)' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  <span>5 Yrs</span>
                  <span>15 Yrs</span>
                  <span>20 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>

              {/* Indian Bank Rate Presets */}
              <div>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  Click to Auto-Fill Current Indian Bank Rates:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {INDIAN_BANK_RATES.map(b => (
                    <button
                      key={b.bank}
                      type="button"
                      onClick={() => setInterestRate(b.rate)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 600,
                        border: interestRate === b.rate ? '1.5px solid var(--saffron)' : '1px solid var(--border-color)',
                        background: interestRate === b.rate ? 'var(--saffron-light)' : 'var(--bg-page)',
                        color: interestRate === b.rate ? 'var(--saffron)' : 'var(--text-main)',
                        transition: 'var(--transition)'
                      }}
                    >
                      {b.bank.split(' ')[0]} ({b.rate}%)
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: EMI Output Box */}
            <div 
              style={{
                background: 'var(--bg-alt)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(18px, 4vw, 36px)',
                border: '1.5px solid var(--border-color)',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                MONTHLY EMI PAYABLE
              </span>
              <div 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 6vw, 44px)',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  margin: '10px 0 20px 0',
                  wordBreak: 'break-word'
                }}
              >
                {formatFullINR(emiData.monthlyEMI)}
                <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-muted)' }}> / month</span>
              </div>

              {/* Progress Bar (Principal vs Interest) */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ height: '10px', borderRadius: '6px', overflow: 'hidden', display: 'flex', marginBottom: '8px' }}>
                  <div style={{ width: `${emiData.principalPercentage}%`, background: 'var(--primary)' }} />
                  <div style={{ width: `${emiData.interestPercentage}%`, background: 'var(--saffron)' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>● Principal: {emiData.principalPercentage}%</span>
                  <span style={{ color: 'var(--saffron)', fontWeight: 600 }}>● Interest: {emiData.interestPercentage}%</span>
                </div>
              </div>

              {/* Detail Metrics */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', background: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '20px', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Total Principal Amount:</span>
                  <strong>{formatFullINR(emiData.principal)}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Total Interest Payable:</span>
                  <strong style={{ color: 'var(--saffron)' }}>{formatFullINR(emiData.totalInterest)}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '8px' }}>
                  <span style={{ fontWeight: 700 }}>Total Payment (Prin + Int):</span>
                  <strong style={{ fontSize: '15px', color: 'var(--primary)' }}>{formatFullINR(emiData.totalPayment)}</strong>
                </div>
              </div>

              <Link to="/properties" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
                <span>Find Properties for ₹{formatIndianNumber(emiData.monthlyEMI)}/mo EMI</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Loan Eligibility Estimator Block */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: '36px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Banknote size={24} color="var(--rera-green)" />
            <h2 style={{ fontSize: '22px', color: 'var(--primary)' }}>
              Check Your Home Loan Eligibility
            </h2>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Indian banks permit a Fixed Obligation to Income Ratio (FOIR) of up to 55% of your net monthly salary.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', alignItems: 'center' }}>
            <div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Monthly In-Hand Gross Salary (INR ₹)
                </label>
                <input 
                  type="number" 
                  value={monthlyIncome}
                  onChange={e => setMonthlyIncome(Number(e.target.value))}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', fontSize: '14px' }}
                />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                  Current: {formatFullINR(monthlyIncome)} ({formatIndianPrice(monthlyIncome)} / mo)
                </span>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  Existing Monthly EMIs (Car loan, personal loan, etc.)
                </label>
                <input 
                  type="number" 
                  value={existingEMIs}
                  onChange={e => setExistingEMIs(Number(e.target.value))}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', fontSize: '14px' }}
                />
              </div>
            </div>

            {/* Eligibility Result Box */}
            <div 
              style={{
                background: 'var(--rera-green-light)',
                border: '1.5px solid var(--rera-green-border)',
                borderRadius: 'var(--radius-md)',
                padding: '28px',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--rera-green)' }}>
                MAXIMUM ELIGIBLE HOME LOAN
              </span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 800, color: 'var(--rera-green)', margin: '8px 0' }}>
                {formatFullINR(eligibleLoan)}
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-body)', display: 'block', marginBottom: '16px' }}>
                Approx. <strong>{formatIndianPrice(eligibleLoan)}</strong> at {interestRate}% over {tenureYears} years
              </span>

              <button 
                onClick={() => setLoanAmount(eligibleLoan)}
                className="btn btn-primary btn-sm"
              >
                Apply this Amount to EMI Calculator
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
