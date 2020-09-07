// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {
  EPOCHS,
  LAYERS,
  REWARDS,
  BLOCKS,
  TXNS,
} from '../../../config/constants';

import {timeAgo, timeWithFormat} from '../../../helper/formatter';

type Props = {
  data: Object,
  viewStore: Object,
};

const DetailsLayer = (props: Props) => {
  const { data, viewStore } = props;

  console.log('data', data);
  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Layer Number</span>
          <span className="item-value">
            <a href="/">{data ? data.number : '00000'}</a>
            <CopyButton value="000000" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Layer Start Timestamp</span>
          <span className="item-value">
            {data && `${timeAgo(data.start)} - ${timeWithFormat(data.start)}`}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Layer End Timestamp</span>
          <span className="item-value">
             {data && `${timeAgo(data.end)} - ${timeWithFormat(data.end)}`}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Transactions</span>
          <span className="item-value"><a href={`/${LAYERS}/000000/${TXNS}`} onClick={(e) => {
            // TODO remove after implementation
            e.preventDefault();
            // viewStore.linkHandler(e, LAYERS, '000000', TXNS)
          }}>{data ? data.txs : '0000'}</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards </span>
          <span className="item-value"><a href={`/${LAYERS}/320/${REWARDS}`} onClick={(e) => {
            // TODO remove after implementation
            e.preventDefault();
            // viewStore.linkHandler(e, LAYERS, '320', REWARDS)
          }}>--</a></span>
        </li>
        <li className="item">
          <span className="item-name">Finality</span>
          <span className="item-value">--</span>
        </li>
        <li className="item">
          <span className="item-name">Epoch</span>
          <span className="item-value"><a href={`/${EPOCHS}/1200`} onClick={(e) => {
            // TODO remove after implementation
            e.preventDefault();
            //viewStore.linkHandler(e, EPOCHS, '1224')
          }}>--</a></span>
        </li>
        <li className="item">
          <span className="item-name">Hash</span>
          <span className="item-value">
            --
            <CopyButton value="0x52hsgj2jwyb23wbwew32874682734g2hj3g23" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Blocks</span>
          <span className="item-value"><a href={`/${LAYERS}/000000/${BLOCKS}`} onClick={(e) => {
            // TODO remove after implementation
            e.preventDefault();
            // viewStore.linkHandler(e, LAYERS, '000000', BLOCKS)
          }}>-- blocks</a></span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsLayer;
