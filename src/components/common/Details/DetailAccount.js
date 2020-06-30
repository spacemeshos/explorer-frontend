// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';

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
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8"/>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Rewards Account</span>
          <span className="item-value">
            0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8"/>
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
            <a href="/">100</a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Transactions</span>
          <span className="item-value">
            <a href="/">100</a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailAccount;
