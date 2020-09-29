// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import { fullDate } from '../../../helper/formatter';
import CustomTimeAgo from '../CustomTimeAgo';

type Props = {
  data: Object,
  viewStore: Object,
};

const DetailsBlock = (props: Props) => {
  const { data } = props;

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Block Number</span>
          <span className="item-value">
            {data.id}
            <CopyButton value={data.id} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Block start Timestamp</span>
          <span className="item-value">
            <CustomTimeAgo time={data.start} />
            {`${fullDate(data.start)}`}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Block end Timestamp</span>
          <span className="item-value">
            <CustomTimeAgo time={data.end} />
            {`${fullDate(data.end)}`}
          </span>
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
             {data.id.slice(0, 8)}
            <CopyButton value={data.id.slice(0, 8)} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsBlock;
