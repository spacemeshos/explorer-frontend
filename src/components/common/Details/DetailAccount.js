// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {ACCOUNTS, EPOCHS, REWARDS, TXNS} from '../../../config/constants';

type Props = {
  data: Object,
  viewStore: Object,
};

const DetailAccount = (props: Props) => {
  const { data, viewStore } = props;

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Id</span>
          <span className="item-value">
            {data.address}
            <CopyButton value={data.address} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Counter</span>
          <span className="item-value">
            --
            <CopyButton value="--" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Rewards</span>
          <span className="item-value">
            <a href={`/${ACCOUNTS}/${data.address}/${REWARDS}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, data.address, REWARDS)}>
              --
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Transactions</span>
          <span className="item-value">
            <a href={`/${ACCOUNTS}/${data.address}/${TXNS}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, data.address, TXNS)}>
              --
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailAccount;
