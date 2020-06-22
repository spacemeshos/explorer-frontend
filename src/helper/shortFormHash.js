const shortFormHash = (hash) => {
  if(typeof hash === 'undefined')
    return "?";

  return hash.substr(0, 8) + '...';
};

export default shortFormHash;
