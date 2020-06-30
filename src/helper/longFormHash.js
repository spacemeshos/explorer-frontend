const longFormHash = (value) => {
  if(typeof value === 'undefined')
    return "?";
  if(value.length < 10)
    return value;
  return value.substr(0, 6) + '...' + value.substr(-4);
};

export default longFormHash;
