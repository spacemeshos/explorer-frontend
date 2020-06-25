import {
  OVERVIEW,
  EPOCHS,
  LAYERS,
  TXNS,
  REWARDS,
  ACCOUNTS,
  SMESHER,
  SMART_WALLET,
} from '../../../../config/constants';

export default {
  [OVERVIEW]: [
    {
      fieldName: 'id'
    },
    {
      fieldName: 'layer'
    },
    {
      fieldName: 'value'
    },
    {
      fieldName: 'from',
    },
    {
      fieldName: 'to'
    },
    {
      fieldName: 'type'
    },
  ],
  [EPOCHS]: [
    {
      fieldName: 'epoch id'
    },
    {
      fieldName: 'started'
    },
    {
      fieldName: 'ended'
    },
    {
      fieldName: 'layers'
    },
    {
      fieldName: 'transactions'
    },
    {
      fieldName: 'smeshers'
    },
    {
      fieldName: 'rewards'
    },
    {
      fieldName: 'total smc'
    },
  ],
  [TXNS]: [
    {
      fieldName: 'id'
    },
    {
      fieldName: 'layer'
    },
    {
      fieldName: 'value'
    },
    {
      fieldName: 'from',
    },
    {
      fieldName: 'to'
    },
    {
      fieldName: 'type'
    },
  ],
  [LAYERS]: [
    {
      fieldName: 'id'
    },
    {
      fieldName: 'transactions'
    },
    {
      fieldName: 'age'
    },
    {
      fieldName: 'txn value'
    },
    {
      fieldName: 'atx value'
    },
  ],

}
