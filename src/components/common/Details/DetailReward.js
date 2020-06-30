// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';

type Props = {
  viewStore: Object,
};

const DetailReward = (props: Props) => {
  const { viewStore } = props;

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Id</span>
          <span className="item-value">
            0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8"/>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Timestamp</span>
          <span className="item-value">
             2 minutes ago - (Jun-25-2019 - 05:13:39 PM +UTC)
          </span>
        </li>
        <li className="item">
          <span className="item-name">Layer Number</span>
          <span className="item-value">
            000000
          </span>
        </li>
        <li className="item">
          <span className="item-name">Smasher ID</span>
          <span className="item-value">
            <a href="/">0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8</a>
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8"/>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Account</span>
          <span className="item-value">
            <a href="/">0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8</a>
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8"/>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Block Reward</span>
          <span className="item-value">32 SMH</span>
        </li>
        <li className="item">
          <span className="item-name">Space</span>
          <span className="item-value">360 GB</span>
        </li>
      </ul>
    </div>
  );
};

export default DetailReward;
