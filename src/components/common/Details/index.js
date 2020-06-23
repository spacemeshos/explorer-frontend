// @flow
import * as React from 'react';

type Props = {

};

const Details = (props: Props) => {
  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">ID</span>
          <span className="item-value">0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8</span>
        </li>
        <li className="item">
          <span className="item-name">From</span>
          <span className="item-value">0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8</span>
        </li>
        <li className="item">
          <span className="item-name">To</span>
          <span className="item-value">0x69c756d06F0C1236F34D3A627EAcb7a4722FC5B8</span>
        </li>
      </ul>
    </div>
  );
};

export default Details;
