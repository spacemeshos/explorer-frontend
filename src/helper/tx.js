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
    case 'TRANSACTION_TYPE_DEPLOY':
      return 'Deploy';
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

export const amount = (tx) => {
  switch (tx.tx.type) {
    case 'TRANSACTION_TYPE_DRAIN_VAULT':
      return tx.tx.contents.drainVault.amount;
    case 'TRANSACTION_TYPE_MULTI_SIG_SEND':
    case 'TRANSACTION_TYPE_SINGLE_SIG_SEND':
      return tx.tx.contents.send.amount;
    default:
      return 0;
  }
};

export const destination = (tx) => {
  switch (tx.tx.type) {
    case 'TRANSACTION_TYPE_DRAIN_VAULT':
      return tx.tx.contents.drainVault.destination;
    case 'TRANSACTION_TYPE_MULTI_SIG_SEND':
    case 'TRANSACTION_TYPE_SINGLE_SIG_SEND':
      return tx.tx.contents.send.destination;
    default:
      return tx.tx.principal;
  }
};

export const getStatusText = (data) => {
  switch (data) {
    case 'approved':
    case 'success':
      return 'success';
    case 'failure':
      return 'failure';
    case 'invalid':
      return 'invalid';
    case 'pending':
      return 'pending';
    default:
      break;
  }
};
