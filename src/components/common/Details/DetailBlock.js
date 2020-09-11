// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {
  BLOCKS,
  EPOCHS,
  LAYERS,
  REWARDS,
} from '../../../config/constants';
import {timeAgo, timeWithFormat} from '../../../helper/formatter';

type Props = {
  data: Object,
  viewStore: Object,
};

const DetailsBlock = (props: Props) => {
  const { data, viewStore } = props;

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Block Number</span>
          <span className="item-value">
            <a href="/">{data.id}</a>
            <CopyButton value="123123" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Block start Timestamp</span>
          <span className="item-value">{`${timeAgo(data.start)} ${timeWithFormat(data.start)}`}</span>
        </li>
        <li className="item">
          <span className="item-name">Block end Timestamp</span>
          <span className="item-value">{`${timeAgo(data.end)} ${timeWithFormat(data.end)}`}</span>
        </li>
        <li className="item">
          <span className="item-name">Total transactions</span>
          <span className="item-value">
            {data.txsnumber}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards</span>
          <span className="item-value">
            --
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards value</span>
          <span className="item-value">--</span>
        </li>
        <li className="item">
          <span className="item-name">Finality</span>
          <span className="item-value">0%</span>
        </li>
        <li className="item">
          <span className="item-name">Epoch</span>
          <span className="item-value">
            {data.epoch}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Layer</span>
          <span className="item-value">
            {data.layer}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Hash</span>
          <span className="item-value">
            --
            <CopyButton value="--" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsBlock;
