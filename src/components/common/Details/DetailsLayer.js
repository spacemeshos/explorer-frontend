// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {
  EPOCHS,
  LAYERS,
  REWARDS,
  BLOCKS,
  TXNS, SMESHER,
} from '../../../config/constants';

import {timeAgo, timeWithFormat} from '../../../helper/formatter';
import {smhCoinConverter} from '../../../helper/converter';

type Props = {
  data: Object,
  viewStore: Object,
};

const DetailsLayer = (props: Props) => {
  const { data, viewStore } = props;

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Layer Number</span>
          <span className="item-value">
            {data.number}
            <CopyButton value={data.number} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Layer Start Timestamp</span>
          <span className="item-value">
            {`${timeAgo(data.start)} - ${timeWithFormat(data.start)}`}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Layer End Timestamp</span>
          <span className="item-value">
             {`${timeAgo(data.end)} - ${timeWithFormat(data.end)}`}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Transactions</span>
          <span className="item-value">
            <a
              href={`/${LAYERS}/${data.number}/${TXNS}`}
              onClick={(e) => { viewStore.linkHandler(e, LAYERS, data.number, TXNS)}}
            >
              {data.txs}
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards </span>
          <span className="item-value">
            <a
              href={`/${LAYERS}/${data.number}/${REWARDS}`}
              onClick={(e) => {viewStore.linkHandler(e, LAYERS, data.number, REWARDS)}}
            >
              {smhCoinConverter(data.rewards)}
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Finality</span>
          <span className="item-value">0%</span>
        </li>
        <li className="item">
          <span className="item-name">Epoch</span>
          <span className="item-value">
            <a
              href={`/${EPOCHS}/${data.epoch}`}
              onClick={(e) => {viewStore.linkHandler(e, EPOCHS, data.epoch)}}
            >
              {data.epoch}
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Smeshers</span>
          <span className="item-value"><a href={`/${LAYERS}/${data.smeshers}/${SMESHER}`} onClick={(e) => {viewStore.linkHandler(e, LAYERS, data.smeshers, SMESHER)}}>{data.smeshers}</a></span>
        </li>
        <li className="item">
          <span className="item-name">Hash</span>
          <span className="item-value">
            {data.hash}
            <CopyButton value= {data.hash} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Blocks</span>
          <span className="item-value">
            <a
              href={`/${LAYERS}/${data.blocksnumber}/${BLOCKS}`}
              onClick={(e) => {viewStore.linkHandler(e, LAYERS, data.blocksnumber, BLOCKS)}}>
              {data.blocksnumber} blocks
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsLayer;
