/**
 * Formats numbers into Indian Currency (INR) format.
 * Examples:
 * 8500000 -> ₹85 Lakh
 * 17500000 -> ₹1.75 Cr
 * 45000 -> ₹45,000 / mo (if forRent)
 */

export function formatIndianPrice(amount, isRent = false) {
  if (!amount || isNaN(amount)) return '₹0';
  const num = Number(amount);

  if (isRent) {
    return `₹${formatIndianNumber(num)} / mo`;
  }

  if (num >= 10000000) {
    const cr = (num / 10000000).toFixed(2);
    // Remove trailing .00 if whole number
    return `₹${cr.replace(/\.00$/, '')} Cr`;
  } else if (num >= 100000) {
    const lakh = (num / 100000).toFixed(2);
    return `₹${lakh.replace(/\.00$/, '')} Lakh`;
  } else if (num >= 1000) {
    return `₹${formatIndianNumber(num)}`;
  }
  return `₹${num}`;
}

export function formatIndianNumber(num) {
  if (!num && num !== 0) return '0';
  const x = Math.round(num).toString();
  const lastThree = x.substring(x.length - 3);
  const otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers !== '') {
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
  }
  return lastThree;
}

export function formatFullINR(amount) {
  if (!amount && amount !== 0) return '₹0';
  return `₹${formatIndianNumber(amount)}`;
}

export function parseIndianPriceInput(input) {
  if (typeof input === 'number') return input;
  if (!input) return 0;
  const clean = input.toString().replace(/[^\d.]/g, '');
  return parseFloat(clean) || 0;
}

export function formatArea(sqft) {
  if (!sqft) return '0 sq.ft.';
  const sqm = Math.round(sqft * 0.092903);
  return {
    sqft: `${formatIndianNumber(sqft)} sq.ft.`,
    sqm: `${formatIndianNumber(sqm)} m²`
  };
}
