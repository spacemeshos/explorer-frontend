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
      fieldName: 'value',
      style: {flexGrow: 2}
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
    { fieldName: 'layer' },
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
      fieldName: 'activations',
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
      fieldName: 'account',
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
