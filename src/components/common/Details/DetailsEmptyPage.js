// @flow
import * as React from 'react';

const DetailsEmptyPage = () => {

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">ID</span>
          <span className="item-value" />
        </li>
        <li className="item">
          <span className="item-name">To</span>
          <span className="item-value" />
        </li>
        <li className="item">
          <span className="item-name">From</span>
          <span className="item-value" />
        </li>
        <li className="item">
          <span className="item-name">Status</span>
          <span className="item-value" />
        </li>
        <li className="item">
          <span className="item-name">Timestamp</span>
          <span className="item-value" />
        </li>
        <li className="item">
          <span className="item-name">Type</span>
          <span className="item-value" />
        </li>
      </ul>
    </div>
  );
};

export default DetailsEmptyPage;
