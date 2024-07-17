import type { Spacemeshv2alpha1TransactionResultStatus, Spacemeshv2alpha1TransactionState } from 'api';

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

export const mappingState = (status: Spacemeshv2alpha1TransactionState) => {
  switch (status) {
    case 'TRANSACTION_STATE_PROCESSED':
      return 'approved';
    default:
      return 'pending';
  }
};

export const mappingResult = (status: Spacemeshv2alpha1TransactionResultStatus) => {
  switch (status) {
    case 'TRANSACTION_STATUS_FAILURE':
      return 'failure';
    case 'TRANSACTION_STATUS_INVALID':
      return 'invalid';
    default:
      return null;
  }
};

export const mapTxResult = (state: Spacemeshv2alpha1TransactionState, result: Spacemeshv2alpha1TransactionResultStatus) => {
  const status = mappingState(state);
  const res = mappingResult(result);

  return res === null ? status : res;
};
