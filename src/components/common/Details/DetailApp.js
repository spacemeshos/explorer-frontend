// @flow
import React, { useState } from 'react';
import SmoothCollapse from 'react-smooth-collapse';

import CopyButton from '../CopyButton';
import {
  SMART_WALLET,
} from '../../../config/constants';


type Props = {
  viewStore: Object,
};

const DetailApp = (props: Props) => {
  const { viewStore } = props;

  const [expanded, setExpanded] = useState(false);
  const toggleHandler = () => setExpanded(!expanded);

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Address</span>
          <span className="item-value">
            <a href={`/${SMART_WALLET}/126812`} onClick={(e) => viewStore.linkHandler(e, SMART_WALLET, '126812')}>
              0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8
            </a>
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Code Template</span>
          <span className="item-value">
            <a href={`/${SMART_WALLET}/126812/template`} onClick={(e) => viewStore.linkHandler(e, SMART_WALLET, '126812')}>
              0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8
            </a>
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Created By</span>
          <span className="item-value">
            <a href={`/${SMART_WALLET}/126812/template`} onClick={(e) => viewStore.linkHandler(e, SMART_WALLET, '126812')}>
              0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8
            </a>
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Deploy Transaction</span>
          <span className="item-value">
            <a href={`/${SMART_WALLET}/126812/template`} onClick={(e) => viewStore.linkHandler(e, SMART_WALLET, '126812')}>
              0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8
            </a>
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Transactions</span>
          <span className="item-value">100</span>
        </li>
        <li className="item">
          <span className="item-name">State Hash</span>
          <span className="item-value">0x12341223131233232321321312312321312321abf112</span>
        </li>
        <li className="item">
          <span className="item-name">Daily Spend Limit</span>
          <span className="item-value">2 SMH</span>
        </li>
        <li className="item">
          <span className="item-name">Daily Spend Address</span>
          <span className="item-value">
              <a href={`/${SMART_WALLET}/126812`} onClick={(e) => viewStore.linkHandler(e, SMART_WALLET, '126812')}>
                0x012345567abcdef012345567abcdef012345567abcdef012345567abc
                <CopyButton value="0x012345567abcdef012345567abcdef012345567abcdef012345567abc" />
              </a>
            </span>
        </li>
        <li className="item">
          <span className="item-name">Authorized Accounts</span>
          <span className="item-value">2 SMH</span>
        </li>
        <li className="item">
          <span className="item-name">Vesting Period</span>
          <span className="item-value">3 Years</span>
        </li>
        <li className="item">
          <span className="item-name">Vesting Start Date</span>
          <span className="item-value">2 minutes ago (Jun-25-2019 05:13:39 PM +UTC)</span>
        </li>
      </ul>
    </div>
  );
};

export default DetailApp;
