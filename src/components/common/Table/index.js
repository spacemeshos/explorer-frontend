// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';

import TransactionsRow from './TransactionsRow';
import EpochsRow from './EpochsRow';
import RewardsRow from './RewardsRow';
import AccountsRow from './AccountsRow';
import SmesherRow from './SmesherRow';

import {
  ACCOUNTS,
  EPOCHS,
  LAYERS,
  OVERVIEW,
  REWARDS,
  SMART_WALLET,
  SMESHER,
  TXNS,
  ATXS,
  BLOCKS,
} from '../../../config/constants';
import tableFieldConfig from './config/tableFieldConfig';
import LayersRow from './LayersRow';
import AtxsRow from './AtxsRow';
import BlocksRow from './BlocksRow';
import AppRow from './AppRow';

type Props = {
  viewStore: Object,
  name: string,
};

const transactionTableData = [
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 32,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: 187291,
    value: 12,
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    to: '0x00cC5CE08f8838Af8b9602e26914Ea00bd42f10b',
    type: 'smh',
  },
];

const epochTableData = [
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
  {
    id: '126812',
    started: '31 days ago',
    ended: '14 days ago',
    layers: '123',
    transactions: '3867',
    smeshers: '126',
    rewards: '320 SMH',
    total: '32 SMH',
  },
];

const layerTableData = [
  {
    id: '126812',
    transactions: '123',
    age: '14 days ago',
    txnValue: '123',
    atxValue: '3867',
  },
];

const rewardsTableData = [
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    account: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    smesher: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    layer: '123321',
    space: '120',
    value: '325',
  },
];

const accountsTableData = [
  {
    id: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    sent: '32',
    recieved: '32',
    lastActive: '2 hrs ago',
    awards: '320',
    balance: '11',
  },
];

const smesherTableData = [
  {
    id: '126812',
    rewardsAccount: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    committedSpace: '200',
    totalAtxTxns: '32',
  },
];

const atxsTableData = [
  {
    id: '126812',
    value: '32',
    age: '2 minutes ago',
    from: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    type: 'SMH',
  },
];

const blocksTableData = [
  {
    block: '126812',
    smesher: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    transaction: '162',
    age: '2 minutes ago',
    txnValue: '32',
  },
];

const smartWalletData = [
  {
    address: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    name: 'SM W #1',
    created: '3 days ago',
    balance: '11',
  },
  {
    address: '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8',
    name: 'SM W #1',
    created: '3 days ago',
    balance: '11',
  }
];

const Table = (props: Props) => {
  const { viewStore, name } = props;

  const renderTableData = () => {
    switch (name) {
      case OVERVIEW:
        return (
          <TransactionsRow key={nanoid()} data={transactionTableData} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      case EPOCHS:
        return (
          <EpochsRow key={nanoid()} data={epochTableData} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      case LAYERS:
        return (
          <LayersRow key={nanoid()} data={layerTableData} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      case TXNS:
        return (
          <TransactionsRow key={nanoid()} data={transactionTableData} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      case REWARDS:
        return (
          <RewardsRow key={nanoid()} data={rewardsTableData} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      case ACCOUNTS:
        return (
          <AccountsRow key={nanoid()} data={accountsTableData} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      case SMART_WALLET:
        return (
          <AppRow key={nanoid()} data={smartWalletData} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      case SMESHER:
        return (
          <SmesherRow key={nanoid()} data={smesherTableData} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      case ATXS:
        return (
          <AtxsRow key={nanoid()} data={atxsTableData} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      case BLOCKS:
        return (
          <BlocksRow key={nanoid()} data={blocksTableData} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      default:
        break;
    }
  };

  return (
    <div className="table">
      <div className="tr th">
        { tableFieldConfig[name].map((item) => <div key={nanoid()} className="td">{item.fieldName}</div>) }
      </div>
      { renderTableData() }
    </div>

  );
};

export default Table;
