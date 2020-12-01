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
import { fullDate } from '../../../helper/formatter';
import { smhCoinConverter } from '../../../helper/converter';
import CustomTimeAgo from '../CustomTimeAgo';

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
          <span className="item-name">Number</span>
          <span className="item-value">
            {data.number}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Start Timestamp</span>
          <span className="item-value">
            <CustomTimeAgo time={data.start} />
            {` ${fullDate(data.start)}`}
          </span>
        </li>
        <li className="item">
          <span className="item-name">End Timestamp</span>
          <span className="item-value">
            <CustomTimeAgo time={data.end} />
            {` ${fullDate(data.end)}`}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Transactions</span>
          <span className="item-value">
            <a
              href={`/${LAYERS}/${data.number}/${TXNS}`}
              onClick={(e) => { viewStore.linkHandler(e, LAYERS, data.number, TXNS); }}
            >
              {data.txs}
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Rewards </span>
          <span className="item-value">
            <a
              href={`/${LAYERS}/${data.number}/${REWARDS}`}
              onClick={(e) => { viewStore.linkHandler(e, LAYERS, data.number, REWARDS); }}
            >
              {smhCoinConverter(data.rewards)}
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Confidence</span>
          <span className="item-value">--</span>
        </li>
        <li className="item">
          <span className="item-name">Epoch</span>
          <span className="item-value">
            <a
              href={`/${EPOCHS}/${data.epoch}`}
              onClick={(e) => { viewStore.linkHandler(e, EPOCHS, data.epoch); }}
            >
              {data.epoch}
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Smeshers</span>
          <span className="item-value"><a href={`/${LAYERS}/${data.number}/${SMESHER}`} onClick={(e) => { viewStore.linkHandler(e, LAYERS, data.number, SMESHER); }}>{data.smeshers}</a></span>
        </li>
        <li className="item">
          <span className="item-name">Hash</span>
          <span className="item-value">
            {data.hash}
            <CopyButton value={data.hash} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Blocks</span>
          <span className="item-value">
            <a
              href={`/${LAYERS}/${data.number}/${BLOCKS}`}
              onClick={(e) => { viewStore.linkHandler(e, LAYERS, data.number, BLOCKS); }}
            >
              {data.blocksnumber}
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsLayer;
