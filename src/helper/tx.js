export const TransactionType = {
  SingleSigSpawn: 1,
  MultiSigSpawn: 2,
  SingleSigSpend: 3,
};

export const typeOfTransaction = (type) => {
  switch (type) {
    case 1:
      return 'Spawn';
    case 2:
      return 'MultiSig.Spawn';
    case 3:
      return 'Spend';
    default:
      return null;
  }
};

export const mappingStatus = (status) => {
  switch (status) {
    case 6:
      return 'approved';
    default:
      return 'pending';
  }
};

export const mappingResult = (status) => {
  switch (status) {
    case 1:
      return 'failure';
    case 2:
      return 'invalid';
    default:
      return null;
  }
};

export const mapTxResult = (state, result) => {
  const status = mappingStatus(state);
  const res = mappingResult(result);

  return res === null ? status : res;
};
