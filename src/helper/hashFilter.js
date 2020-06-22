const hashFilter = (hash) => {
  if(typeof hash === 'undefined')
    return "?";

  // if(hash.substr(0,2) === '0x')
  //   hash = hash.substr(2,64);
    console.log('hash', hash);
  return hash.substr(0, 4) + '...' + hash.substr(56, 4);
};

export default hashFilter;
