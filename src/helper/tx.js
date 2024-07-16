export const typeOfTransaction = (type) => {
  switch (type) {
    case 'TRANSACTION_TYPE_SINGLE_SIG_SEND':
      return 'Send';
    case 'TRANSACTION_TYPE_SINGLE_SIG_SPAWN':
      return 'Spawn';
    case 'TRANSACTION_TYPE_MULTI_SIG_SEND':
      return 'MultiSig.Send';
    case 'TRANSACTION_TYPE_MULTI_SIG_SPAWN':
      return 'MultiSig.Spawn';
    case 'TRANSACTION_TYPE_VESTING_SPAWN':
      return 'Vesting.Spawn';
    case 'TRANSACTION_TYPE_VAULT_SPAWN':
      return 'Vault.Spawn';
    case 'TRANSACTION_TYPE_DRAIN_VAULT':
      return 'Vault.Drain';
    default:
      return 'Unspecified';
  }
};

export const mappingStatus = (status) => {
  switch (status) {
    case 'TRANSACTION_STATE_PROCESSED':
      return 'approved';
    default:
      return 'pending';
  }
};

export const mappingResult = (status) => {
  switch (status) {
    case 'TRANSACTION_STATE_REJECTED':
      return 'failure';
    case 'TRANSACTION_STATE_INSUFFICIENT_FUNDS':
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
