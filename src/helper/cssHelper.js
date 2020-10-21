export const setFontSize = (number) => {
  const num = JSON.stringify(number);
  if (num && num.length < 4) return '60px';
  if (num && num.length >= 4) return '38px';
  if (num && num.length > 8) return '34px';
};

export const setLineHeight = (number) => {
  const num = JSON.stringify(number);
  if (num && num.length < 4) return '42px';
  if (num && num.length >= 4) return '30px';
  if (num && num.length > 8) return '28px';
};

