// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {
  EPOCHS,
  LAYERS,
  REWARDS,
} from '../../../config/constants';

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
          <span className="item-value">
            --
          </span>
        </li>
        <li className="item">
          <span className="item-name">Block end Timestamp</span>
          <span className="item-value">
            --
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total transactions</span>
          <span className="item-value"><a href={`/${EPOCHS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS)}>--</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards</span>
          <span className="item-value"><a href={`/${EPOCHS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS)}>--</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards value</span>
          <span className="item-value"><a href={`/${EPOCHS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS)}>--</a></span>
        </li>
        <li className="item">
          <span className="item-name">Finality</span>
          <span className="item-value">--</span>
        </li>
        <li className="item">
          <span className="item-name">Epoch</span>
          <span className="item-value"><a href={`/${EPOCHS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS )}>--</a></span>
        </li>
        <li className="item">
          <span className="item-name">Layer</span>
          <span className="item-value"><a href={`/${LAYERS}/${data.layer}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, data.layer)}>{data.layer}</a></span>
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
