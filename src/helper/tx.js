export const TransactionType = {
  SingleSigSpawn: 1,
  MultiSigSpawn: 2,
  SingleSigSpend: 3,
};

export const typeOfTransaction = (type) => {
  switch (type) {
    case 1:
      return 'SingleSig.Spawn';
    case 2:
      return 'MultiSig.Spawn';
    case 3:
      return 'SingleSig.Spend';
    default:
      return null;
  }
};
