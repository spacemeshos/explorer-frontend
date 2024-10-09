const units = ['bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

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

const CoinUnits = {
  SMH: 'SMH',
  Smidge: 'Smidge',
};

// Truncates a number to a specified number of decimal places without rounding
const truncateToDecimalPlaces = (num: number, decimalPlaces: number) => {
  const numPower = 10 ** decimalPlaces;
  return Math.floor(num * numPower) / numPower;
};

const packValueAndUnit = (value: number, unit: string) => ({
  value: value.toString(),
  unit,
});

export const toSMH = (smidge: number) => smidge / 10 ** 9;
export const toSmidge = (smh: number) => Math.round(smh * 10 ** 9);

// Parses number into { value, unit } format.
// Used to format smidge strings
export const parseSmidge = (amount: number) => {
  // If amount is "falsy" (0 | undefined | null)
  if (!amount) return packValueAndUnit(0, CoinUnits.SMH);
  if (amount >= 10 ** 9) {
    // Truncate to 3 decimal places without rounding
    const smhValue = truncateToDecimalPlaces(toSMH(amount), 3);
    return packValueAndUnit(smhValue, CoinUnits.SMH);
    // Or `6739412 Smidge` (without dot) for small amount
  }
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

// hex to base64
export const hexToBase64 = (hex: string) => {
  const hexWithoutPrefix = hex.replace(/^0x/, '');
  return btoa(hexWithoutPrefix.match(/\w{2}/g).map((a) => String.fromCharCode(parseInt(a, 16))).join(''));
};

// base64 to hex
export const base64ToHex = (base64: string) => `0x${atob(base64).split('').map((c) => (`0${c.charCodeAt(0).toString(16)}`).slice(-2)).join('')}`;

export const calculateEpoch = (layer: number, layersPerEpoch: number) => Math.floor(layer / layersPerEpoch);
