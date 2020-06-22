const longFormHash = (hash) => {
  if(typeof hash === 'undefined')
    return "?";
  return hash.substr(0, 6) + '...' + hash.substr(-4);
};

export default longFormHash;
