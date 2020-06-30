// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import { EPOCHS, LAYERS } from '../../../config/constants';


type Props = {
  viewStore: Object,
};

const DetailsEpoch = (props: Props) => {
  const { viewStore } = props;

  const onClickHandler = (e, pageName: string, id: string, subPage: string) => {
    e.preventDefault();
    viewStore.showSubPage({page: pageName, id, subPage})
  };

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Epoch Number</span>
          <span className="item-value">
            <a href="/">123123</a>
            <CopyButton value="123123"/>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Started</span>
          <span className="item-value">
             31 days ago (Jun-25-2019 05:13:39 PM +UTC)
          </span>
        </li>
        <li className="item">
          <span className="item-name">Ended</span>
          <span className="item-value">
            31 days ago (Jun-25-2019 05:13:39 PM +UTC)
          </span>
        </li>
        <li className="item">
          <span className="item-name">Total Layers</span>
          <span className="item-value"><a href={`/${EPOCHS}/126812/${LAYERS}`} onClick={(e) =>onClickHandler(e, EPOCHS, '126812', LAYERS)}>167</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards number</span>
          <span className="item-value">320</span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards value</span>
          <span className="item-value">1200</span>
        </li>
        <li className="item">
          <span className="item-name">Smeshers</span>
          <span className="item-value">1224</span>
        </li>
        <li className="item">
          <span className="item-name">Transactions</span>
          <span className="item-value">55555</span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsEpoch;
