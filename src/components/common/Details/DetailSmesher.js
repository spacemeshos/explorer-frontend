// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {
  ACCOUNTS, ATXS, REWARDS, SMESHER,
} from '../../../config/constants';

type Props = {
  viewStore: Object,
};

const DetailAccount = (props: Props) => {
  const { viewStore } = props;

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Id</span>
          <span className="item-value">
            0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Rewards Account</span>
          <span className="item-value">
            <a href={`/${ACCOUNTS}/0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, '0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8')}>
              0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8
              <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8" />
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Space</span>
          <span className="item-value">
            100 GB
          </span>
        </li>
        <li className="item">
          <span className="item-name">Reward Committed</span>
          <span className="item-value">
            <a href={`/${SMESHER}/126812/${REWARDS}`} onClick={(e) => viewStore.linkHandler(e, SMESHER, '126812', REWARDS)}>100</a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Transactions</span>
          <span className="item-value">
            <a href={`/${SMESHER}/126812/${ATXS}`} onClick={(e) => viewStore.linkHandler(e, SMESHER, '126812', ATXS)}>100</a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailAccount;
