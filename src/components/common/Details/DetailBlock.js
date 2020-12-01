// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import { fullDate } from '../../../helper/formatter';
import CustomTimeAgo from '../CustomTimeAgo';
import { EPOCHS, LAYERS } from '../../../config/constants';

type Props = {
  data: Object,
  viewStore: Object,
  network: Object,
};

const DetailsBlock = (props: Props) => {
  const { data, viewStore, network } = props;
  console.log(`last approved layer: ${network.lastapprovedlayer}`);
  console.log(`data layer: ${data.layer}`);
  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Block Number</span>
          <span className="item-value">
            --
          </span>
        </li>
        <li className="item">
          <span className="item-name">Block time</span>
          <span className="item-value">
            <CustomTimeAgo time={data.start} />
            {`${fullDate(data.start)}`}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Transactions</span>
          <span className="item-value">
            {data.txsnumber}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Rewards</span>
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
          <span className="item-value">{data.layer > network.lastapprovedlayer ? '0%' : '99%' }</span>
        </li>
        <li className="item">
          <span className="item-name">Epoch</span>
          <span className="item-value">
            <a href={`/${EPOCHS}/${data.epoch}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, data.epoch)}>{data.epoch}</a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Layer</span>
          <span className="item-value">
            <a href={`/${LAYERS}/${data.layer}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, data.layer)}>{data.layer}</a>
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
