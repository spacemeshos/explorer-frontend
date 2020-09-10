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

const DetailAtxs = (props: Props) => {
  const { data, viewStore } = props;

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">ID</span>
          <span className="item-value">
            <a href="/">--</a>
            <CopyButton value="--" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Atx</span>
          <span className="item-value">
            --
          </span>
        </li>
        <li className="item">
          <span className="item-name">Space</span>
          <span className="item-value">
            --
          </span>
        </li>
        <li className="item">
          <span className="item-name">Reward Committed</span>
          <span className="item-value"><a href={`/${EPOCHS}/--/${LAYERS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, '--', LAYERS)}>--</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Transactions</span>
          <span className="item-value"><a href={`/${EPOCHS}/--/${REWARDS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, '--', REWARDS)}>--</a></span>
        </li>
      </ul>
    </div>
  );
};

export default DetailAtxs;
