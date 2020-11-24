import { commaNumber } from './comma';

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export const byteConverter = (x, returnObject: boolean) => {
  let l = 0;
  let n = parseInt(x, 10) || 0;

  while (n >= 1024 && ++l) {
    n /= 1024;
  }

  return returnObject ? { value: n.toFixed(n < 10 && l > 0 ? 1 : 0), unit: units[l] } : `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
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
