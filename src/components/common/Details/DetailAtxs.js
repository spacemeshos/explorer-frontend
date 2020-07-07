// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {
  EPOCHS,
  LAYERS,
  REWARDS,
} from '../../../config/constants';

type Props = {
  viewStore: Object,
};

const DetailAtxs = (props: Props) => {
  const { viewStore } = props;

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">ID</span>
          <span className="item-value">
            <a href="/">0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8</a>
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Atx</span>
          <span className="item-value">
            200
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
          <span className="item-value"><a href={`/${EPOCHS}/126812/${LAYERS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, '126812', LAYERS)}>100</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Transactions</span>
          <span className="item-value"><a href={`/${EPOCHS}/320/${REWARDS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, '320', REWARDS)}>100</a></span>
        </li>
      </ul>
    </div>
  );
};

export default DetailAtxs;
