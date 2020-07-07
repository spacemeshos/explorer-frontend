// @flow
import React, { useState } from 'react';
import SmoothCollapse from 'react-smooth-collapse';

import CopyButton from '../CopyButton';

const DetailsTxns = () => {
  const [expanded, setExpanded] = useState(false);
  const arrowClass = expanded ? 'arrow isOpen' : 'arrow';

  const toggleHandler = () => setExpanded(!expanded);

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">ID</span>
          <span className="item-value">
            0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">To</span>
          <span className="item-value">
            <a href="/">0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8</a>
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">From</span>
          <span className="item-value">
            <a href="/">0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8</a>
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8" />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Timestamp</span>
          <span className="item-value">2 minute ago (Jun-25-2019 05:13:39 PM +UTC)</span>
        </li>
        <li className="item">
          <span className="item-name">Value</span>
          <span className="item-value">
            <a href="/">32 SMH</a>
            (&#8765;320$)
          </span>
        </li>
        <li className="item">
          <span className="item-name">Counter</span>
          <span className="item-value">12</span>
        </li>
        <li className="item">
          <span className="item-name">Fee</span>
          <span className="item-value">
            <a onClick={toggleHandler}>
              200 cent
              <span className={arrowClass} />
            </a>
            (&#8765;0,01c USD)
          </span>
        </li>
        <SmoothCollapse expanded={expanded} heightTransition=".35s ease">
          <li className="item sliderDown">
            <span className="item-name">Gas unit provided</span>
            <span className="item-value">2300</span>
          </li>
          <li className="item sliderDown">
            <span className="item-name">Gas price</span>
            <span className="item-value">2 SMH</span>
          </li>
          <li className="item sliderDown">
            <span className="item-name">Gas provided</span>
            <span className="item-value">2300</span>
          </li>
          <li className="item sliderDown">
            <span className="item-name">Gas used</span>
            <span className="item-value">2 SMH</span>
          </li>
        </SmoothCollapse>
      </ul>
    </div>
  );
};

export default DetailsTxns;
