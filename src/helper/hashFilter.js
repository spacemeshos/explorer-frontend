const hashFilter = (hash) => {
  if (typeof hash === 'undefined') return '?';
  return `${hash.substr(0, 4)}...${hash.substr(56, 4)}`;
};

export default hashFilter;
