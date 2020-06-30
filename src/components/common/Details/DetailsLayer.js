// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {
  EPOCHS,
  LAYERS,
  REWARDS,
  BLOCK,
  TXNS
} from '../../../config/constants';

type Props = {
  viewStore: Object,
};

const DetailsLayer = (props: Props) => {
  const { viewStore } = props;

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Layer Number</span>
          <span className="item-value">
            <a href="/">000000</a>
            <CopyButton value="000000"/>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Layer Start Timestamp</span>
          <span className="item-value">
             2 minutes ago - Jun/25/2019 - 05:13:39 PM +UTC)
          </span>
        </li>
        <li className="item">
          <span className="item-name">Layer End Timestamp</span>
          <span className="item-value">
            2 minutes ago - Jun/25/2019 - 05:13:39 PM +UTC)
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Transactions</span>
          <span className="item-value"><a href={`/${LAYERS}/000000/${TXNS}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, '000000', TXNS)}>137 txns</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards </span>
          <span className="item-value"><a href={`/${LAYERS}/320/${REWARDS}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, '320', REWARDS)}>1000 (32 SMH)</a></span>
        </li>
        <li className="item">
          <span className="item-name">Finality</span>
          <span className="item-value">98,8%</span>
        </li>
        <li className="item">
          <span className="item-name">Epoch</span>
          <span className="item-value"><a href={`/${EPOCHS}/1200`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, '1224')}>1224</a></span>
        </li>
        <li className="item">
          <span className="item-name">Hash</span>
          <span className="item-value">0x52hsgj2jwyb23wbwew32874682734g2hj3g23
          <CopyButton value="0x52hsgj2jwyb23wbwew32874682734g2hj3g23"/>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Blocks</span>
          <span className="item-value"><a href={`/${LAYERS}/000000/${BLOCK}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, '000000', BLOCK)}>14 blocks</a></span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsLayer;
