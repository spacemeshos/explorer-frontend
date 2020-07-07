import {
  OVERVIEW,
  EPOCHS,
  LAYERS,
  TXNS,
  REWARDS,
  ACCOUNTS,
  SMESHER,
  SMART_WALLET,
  ATXS,
  BLOCKS,
} from '../../../../config/constants';

export default {
  [OVERVIEW]: [
    {
      fieldName: 'id',
    },
    {
      fieldName: 'layer',
    },
    {
      fieldName: 'value',
    },
    {
      fieldName: 'from',
    },
    {
      fieldName: 'to',
    },
    {
      fieldName: 'type',
    },
  ],
  [EPOCHS]: [
    {
      fieldName: 'epoch id',
    },
    {
      fieldName: 'started',
    },
    {
      fieldName: 'ended',
    },
    {
      fieldName: 'layers',
    },
    {
      fieldName: 'transactions',
    },
    {
      fieldName: 'smeshers',
    },
    {
      fieldName: 'rewards',
    },
    {
      fieldName: 'total smc',
    },
  ],
  [TXNS]: [
    {
      fieldName: 'id',
    },
    {
      fieldName: 'layer',
    },
    {
      fieldName: 'value',
    },
    {
      fieldName: 'from',
    },
    {
      fieldName: 'to',
    },
    {
      fieldName: 'type',
    },
  ],
  [ATXS]: [
    { fieldName: 'id' },
    { fieldName: 'value' },
    { fieldName: 'age' },
    { fieldName: 'from' },
    { fieldName: 'type' },
  ],
  [LAYERS]: [
    {
      fieldName: 'id',
    },
    {
      fieldName: 'transactions',
    },
    {
      fieldName: 'age',
    },
    {
      fieldName: 'txn value',
    },
    {
      fieldName: 'atx value',
    },
  ],
  [REWARDS]: [
    {
      fieldName: 'rewards',
    },
    {
      fieldName: 'account',
    },
    {
      fieldName: 'smesher',
    },
    {
      fieldName: 'layer',
    },
    {
      fieldName: 'space',
    },
    {
      fieldName: 'value',
    },
  ],
  [ACCOUNTS]: [
    {
      fieldName: 'id',
    },
    {
      fieldName: 'sent',
    },
    {
      fieldName: 'recieved',
    },
    {
      fieldName: 'Last Active',
    },
    {
      fieldName: 'awards',
    },
    {
      fieldName: 'balance',
    },
  ],
  [SMART_WALLET]: [
    {
      fieldName: 'id',
    },
    {
      fieldName: 'sent',
    },
    {
      fieldName: 'recieved',
    },
    {
      fieldName: 'Last Active',
    },
    {
      fieldName: 'awards',
    },
    {
      fieldName: 'balance',
    },
  ],
  [SMESHER]: [
    {
      fieldName: 'id',
    },
    {
      fieldName: 'Rewards Account',
    },
    {
      fieldName: 'Committed space',
    },
    {
      fieldName: 'Total Atx Txns',
    },
  ],
  [BLOCKS]: [
    {
      fieldName: 'block',
    },
    {
      fieldName: 'smesher',
    },
    {
      fieldName: 'transactions',
    },
    {
      fieldName: 'age',
    },
    {
      fieldName: 'txn value',
    },
  ],
};
