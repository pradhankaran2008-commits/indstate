/**
 * Indian Home Loan EMI Calculator Utility
 * Formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
 * P = Principal loan amount
 * R = Monthly interest rate (Annual rate / 12 / 100)
 * N = Number of monthly installments (Tenure in years * 12)
 */

export function calculateEMI(principal, annualRate, tenureYears) {
  const p = Number(principal);
  const r = Number(annualRate) / 12 / 100;
  const n = Number(tenureYears) * 12;

  if (p <= 0 || r <= 0 || n <= 0) {
    return {
      monthlyEMI: 0,
      totalInterest: 0,
      totalPayment: 0,
      principal: p,
      interestPercentage: 0,
      principalPercentage: 100
    };
  }

  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - p;

  return {
    monthlyEMI: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
    principal: Math.round(p),
    interestPercentage: Math.round((totalInterest / totalPayment) * 100),
    principalPercentage: Math.round((p / totalPayment) * 100)
  };
}

export const INDIAN_BANK_RATES = [
  { bank: 'State Bank of India (SBI)', rate: 8.40, processingFee: '0.35% (Min ₹2,000)' },
  { bank: 'HDFC Bank', rate: 8.50, processingFee: '0.50% (Min ₹3,000)' },
  { bank: 'ICICI Bank', rate: 8.60, processingFee: '0.50% (Min ₹3,000)' },
  { bank: 'Axis Bank', rate: 8.75, processingFee: '0.50% (Min ₹2,500)' },
  { bank: 'Bank of Baroda', rate: 8.40, processingFee: '0.25% (Min ₹2,500)' },
  { bank: 'Kotak Mahindra Bank', rate: 8.65, processingFee: '0.50% (Min ₹2,500)' }
];

export function calculateEligibility(monthlyGrossIncome, existingEMIs = 0, rate = 8.50, tenureYears = 20) {
  // Most Indian banks permit FOIR (Fixed Obligation to Income Ratio) up to 50-60%
  const maxEMIAllowed = Math.max(0, (monthlyGrossIncome * 0.55) - existingEMIs);
  const r = rate / 12 / 100;
  const n = tenureYears * 12;
  
  if (maxEMIAllowed <= 0 || r <= 0 || n <= 0) return 0;
  
  // Inverse EMI to calculate maximum eligible principal:
  // P = EMI * ((1+r)^n - 1) / (r * (1+r)^n)
  const eligiblePrincipal = maxEMIAllowed * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
  return Math.round(eligiblePrincipal);
}
