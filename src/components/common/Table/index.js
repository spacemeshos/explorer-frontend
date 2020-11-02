// @flow
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

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
  STATUS_SUCCESS,
} from '../../../config/constants';
import tableFieldConfig from './config/tableFieldConfig';
import LayersRow from './LayersRow';
import AtxsRow from './AtxsRow';
import BlocksRow from './BlocksRow';
import AppRow from './AppRow';
import Loader from '../Loader';
import NoData from '../NoData';

type Props = {
  viewStore: Object,
  name: string,
};

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
  },
];

const Table = (props: Props) => {
  const { viewStore, name } = props;

  const data = toJS(viewStore.currentView.data);
  const status = toJS(viewStore.currentView.status);
  const pagination = toJS(viewStore.currentView.pagination);

  const [isFetching, setIsFetching] = useState(false);

  const pageEndDetection = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }
    setIsFetching(true);
    console.log('Fetch more list items!');
  };

  useEffect(() => {
    window.addEventListener('scroll', pageEndDetection);
    return () => window.removeEventListener('scroll', pageEndDetection);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    pagination && pagination.hasNext && viewStore.getPaginationData(name, pagination.next);
    setIsFetching(false);
  }, [isFetching]);

  const renderTableData = () => {
    switch (name) {
      case OVERVIEW:
        return (
          <TransactionsRow
            key={nanoid()}
            data={data.slice(0, 7)}
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
          <RewardsRow
            key={nanoid()}
            data={data}
            config={tableFieldConfig[name]}
            viewStore={viewStore}
          />
        );
      case ACCOUNTS:
        return (
          <AccountsRow
            key={nanoid()}
            data={viewStore.currentView.data}
            config={tableFieldConfig[name]}
            viewStore={viewStore}
          />
        );
      case SMART_WALLET:
        return (
          <AppRow
            key={nanoid()}
            data={smartWalletData}
            config={tableFieldConfig[name]}
            viewStore={viewStore}
          />
        );
      case SMESHER:
        return (
          <SmesherRow
            key={nanoid()}
            data={viewStore.currentView.data}
            config={tableFieldConfig[name]}
            viewStore={viewStore}
          />
        );
      case ATXS:
        return (
          <AtxsRow
            key={nanoid()}
            data={viewStore.currentView.data}
            config={tableFieldConfig[name]}
            viewStore={viewStore}
          />
        );
      case BLOCKS:
        return (
          <BlocksRow
            key={nanoid()}
            data={data}
            config={tableFieldConfig[name]}
            viewStore={viewStore}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="table">
      <div className="responsive-table">
        <div className="tr th">
          {tableFieldConfig[name].map((item) => (
            <div key={nanoid()} style={item.style} className="td">
              {item.fieldName}
            </div>
          ))}
        </div>
        {data ? renderTableData() : <Loader size={100} />}
        {status === STATUS_SUCCESS && data.length === 0 && <NoData />}
      </div>
    </div>
  );
};

export default observer(Table);
