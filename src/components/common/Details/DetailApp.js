// @flow
import React from 'react';

import CopyButton from '../CopyButton';
import { SMART_WALLET } from '../../../config/constants';
import { formatSmidge } from '../../../helper/converter';
import longFormHash from '../../../helper/longFormHash';
import { fullDate } from '../../../helper/formatter';

type Props = {
  viewStore: Object,
};

const DetailApp = (props: Props) => {
  const { viewStore } = props;

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
          <span className="item-name">Daily Spend Limit</span>
          <span className="item-value">2 SMH</span>
        </li>
        <li className="item">
          <span className="item-name">Daily Spend Account</span>
          <span className="item-value">
            <a href={`/${SMART_WALLET}/126812`} onClick={(e) => viewStore.linkHandler(e, SMART_WALLET, '126812')}>
              0x012345567abcdef012345567abcdef012345567abcdef012345567abc
              <CopyButton value="0x012345567abcdef012345567abcdef012345567abcdef012345567abc" />
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Master Accounts</span>
          <span className="item-value">
            <a href={`/${SMART_WALLET}/126812`} onClick={(e) => viewStore.linkHandler(e, SMART_WALLET, '126812')}>
              {longFormHash('0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8')}
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Monthly Vested Amount</span>
          <span className="item-value">{formatSmidge(0)}</span>
        </li>
        <li className="item">
          <span className="item-name">Vesting Period</span>
          <span className="item-value">3 Years</span>
        </li>
        <li className="item">
          <span className="item-name">Vesting Start Date</span>
          <span className="item-value">
            2 minutes ago
            {fullDate((new Date().getTime()) / 1000 - 120)}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailApp;
