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
import RewardsRowEx from './RewardsRowEx';
import {useEffect, useState} from "react";
import {toJS} from 'mobx';
import {observer} from 'mobx-react';

type Props = {
  viewStore: Object,
  name: string,
};

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

const Table = (props: Props) => {
  const { viewStore, name } = props;
  const data = toJS(viewStore.currentView.data);

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
    console.log('Fetch more list items!');
  };

  useEffect(() => {
    if (!isFetching) return;
    viewStore.getPaginationData(name, 1);
  }, [isFetching]);

  const renderTableData = () => {
    switch (name) {
      case OVERVIEW:
        return (
          <TransactionsRow
            key={nanoid()}
            data={viewStore.currentView.data}
            config={tableFieldConfig[name]}
            viewStore={viewStore}
          />
        );
      case EPOCHS:
        return (
          <EpochsRow
            key={nanoid()}
            data={viewStore.currentView.data}
            config={tableFieldConfig[name]}
            viewStore={viewStore}
          />
        );
      case LAYERS:
        return (
          <LayersRow
            key={nanoid()}
            data={viewStore.currentView.data}
            config={tableFieldConfig[name]}
            viewStore={viewStore}
          />
        );
      case TXNS:
        return (
          <TransactionsRow
            key={nanoid()}
            data={viewStore.currentView.data}
            config={tableFieldConfig[name]}
            viewStore={viewStore}
          />
        );
      case REWARDS:
        return (
          <RewardsRowEx
            key={nanoid()}
            data={data}
            config={tableFieldConfig[name]}
            viewStore={viewStore}
          />
        );
      case ACCOUNTS:
        return (
          <AccountsRow key={nanoid()} data={viewStore.currentView.data} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      case SMART_WALLET:
        return (
          <AppRow key={nanoid()} data={viewStore.currentView.data} config={tableFieldConfig[name]} viewStore={viewStore} />
        );
      case SMESHER:
        return (
          <SmesherRow key={nanoid()} data={viewStore.currentView.data} config={tableFieldConfig[name]} viewStore={viewStore} />
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

export default observer(Table);
