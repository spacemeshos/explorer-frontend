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
  BLOCKS, ACCOUNTS_TXNS,
} from '../../../config/constants';

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
      style: { flexGrow: 2 },
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
    { fieldName: 'space' },
    { fieldName: 'target epoch' },
    { fieldName: 'Previous Activation' },
  ],
  [LAYERS]: [
    {
      fieldName: 'id',
    },
    {
      fieldName: 'started',
    },
    {
      fieldName: 'transactions',
    },
    {
      fieldName: 'rewards',
    },
  ],
  [REWARDS]: [
    {
      fieldName: 'reward',
    },
    {
      fieldName: 'account',
    },
    {
      fieldName: 'layer',
    },
    {
      fieldName: 'value',
    },
  ],
  [ACCOUNTS]: [
    {
      fieldName: 'account',
    },
    {
      fieldName: 'sent',
    },
    {
      fieldName: 'received',
    },
    {
      fieldName: 'Last Active',
    },
    {
      fieldName: 'balance',
    },
  ],
  [SMART_WALLET]: [
    {
      fieldName: 'address',
    },
    {
      fieldName: 'name',
    },
    {
      fieldName: 'created',
    },
    {
      fieldName: 'balance',
    },
  ],
  [SMESHER]: [
    {
      fieldName: 'Smesher Id',
    },
    {
      fieldName: 'Rewards Account',
    },
    {
      fieldName: 'Space',
    },
    {
      fieldName: 'Activations',
    },
  ],
  [BLOCKS]: [
    {
      fieldName: 'block',
    },
    {
      fieldName: 'transactions',
    },
    {
      fieldName: 'transactions value',
    },
  ],
  [ACCOUNTS_TXNS]: [
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
      fieldName: 'counter',
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
};
