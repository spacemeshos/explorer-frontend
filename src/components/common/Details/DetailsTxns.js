// @flow
import * as React from 'react';
import CopyButton from '../CopyButton';


type Props = {

};

const DetailsTxns = (props: Props) => {
  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">ID</span>
          <span className="item-value">
            0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8"/>
          </span>
        </li>
        <li className="item">
          <span className="item-name">To</span>
          <span className="item-value">
            <a href="/">0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8</a>
             <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8"/>
          </span>
        </li>
        <li className="item">
          <span className="item-name">From</span>
          <span className="item-value">
            <a href="/">0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8</a>
            <CopyButton value="0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8"/>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Timestamp</span>
          <span className="item-value">2 minute ago (Jun-25-2019 05:13:39 PM +UTC)</span>
        </li>
        <li className="item">
          <span className="item-name">Value</span>
          <span className="item-value"><a href="/">32 SMH</a> (&#8765;320$)</span>
        </li>
        <li className="item">
          <span className="item-name">Counter</span>
          <span className="item-value">12</span>
        </li>
        <li className="item">
          <span className="item-name">Fee</span>
          <span className="item-value"><a href="/">200 cent</a> (&#8765;0,01c USD)</span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsTxns;
