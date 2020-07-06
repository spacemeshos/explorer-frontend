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

const DetailsBlock = (props: Props) => {
  const { viewStore } = props;

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Block Number</span>
          <span className="item-value">
            <a href="/">123123</a>
            <CopyButton value="123123"/>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Block start Timestamp</span>
          <span className="item-value">
             31 days ago (Jun-25-2019 05:13:39 PM +UTC)
          </span>
        </li>
        <li className="item">
          <span className="item-name">Block end Timestamp</span>
          <span className="item-value">
            31 days ago (Jun-25-2019 05:13:39 PM +UTC)
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total transactions</span>
          <span className="item-value"><a href={`/${EPOCHS}/126812/${LAYERS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, '126812', LAYERS)}>137 txns</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards</span>
          <span className="item-value"><a href={`/${EPOCHS}/320/${REWARDS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, '320', REWARDS)}>1000 (32 SMH)</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards value</span>
          <span className="item-value"><a href={`/${EPOCHS}/1200/${REWARDS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, '1200', REWARDS)}>1200</a></span>
        </li>
        <li className="item">
          <span className="item-name">Finality</span>
          <span className="item-value">98,8%</span>
        </li>
        <li className="item">
          <span className="item-name">Epoch</span>
          <span className="item-value"><a href={`/${EPOCHS}/1200`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, '1200')}>1200</a></span>
        </li>
        <li className="item">
          <span className="item-name">Layer</span>
          <span className="item-value"><a href={`/${LAYERS}/1200`} onClick={(e) => viewStore.linkHandler(e, LAYERS, '1200')}>1200</a></span>
        </li>
        <li className="item">
          <span className="item-name">Hash</span>
          <span className="item-value">
            0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8"/>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsBlock;
