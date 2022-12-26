import { commaNumber } from './comma';

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export const byteConverter = (x, returnObject: boolean) => {
  let l = 0;
  let n = parseInt(x, 10) || 0;

  while (n >= 1024 && ++l) {
    n /= 1024;
  }

  return returnObject ? {
    value: n.toFixed(n < 10 && l > 0 ? 1 : 0),
    unit: units[l],
  } : `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
};

export const smhCoinConverter = (amount: number, returnObject: boolean) => {
  let v = 0;
  let unit = 'SMH';

  if (amount >= 10 ** 9) {
    v = amount / 10 ** 12;
  } else if (amount >= 10 ** 6) {
    v = amount / 10 ** 9;
    unit = 'GSMD';
  } else if (amount >= 10 ** 4) {
    v = amount / 10 ** 6;
    unit = 'MSMD';
  } else if (amount === 0) {
    // we want to show 0 balance in SMH units
    v = 0;
    unit = 'SMH';
  } else if (!Number.isNaN(amount) && typeof amount === 'number') {
    v = amount;
    unit = 'SMD';
  }

  // truncate to 3 decimals and truncate trailing fractional 0s
  const s = parseFloat(v.toFixed(3)).toString();
  return returnObject ? { value: commaNumber(s), unit } : `${commaNumber(s)} ${unit}`;
};

const CoinUnits = {
  SMH: 'SMH',
  Smidge: 'Smidge',
};

const packValueAndUnit = (value: number, unit: string) => ({
  value: parseFloat(value.toFixed(3)).toString(),
  unit,
});

export const toSMH = (smidge: number) => smidge / 10 ** 12;
export const toSmidge = (smh: number) => Math.ceil(smh * 10 ** 12);

// Parses number into { value, unit } format.
// Used to format smidge strings
export const parseSmidge = (amount: number) => {
  // If amount is "falsy" (0 | undefined | null)
  if (!amount) return packValueAndUnit(0, CoinUnits.SMH);
  // Show `23.053 SMH` for big amount
  if (amount >= 10 ** 9) return packValueAndUnit(toSMH(amount), CoinUnits.SMH);
  // Or `6739412 Smidge` (without dot) for small amount
  if (!Number.isNaN(amount)) return packValueAndUnit(amount, CoinUnits.Smidge);
  // Show `0 SMH` for zero amount and NaN
  return packValueAndUnit(0, CoinUnits.SMH);
};

// Returns formatted display string for a smidge amount.
// All coin displayed in the app should display amount formatted
export const formatSmidge = (amount: number): string => {
  const { value, unit } = parseSmidge(amount);
  return `${value} ${unit}`;
};
