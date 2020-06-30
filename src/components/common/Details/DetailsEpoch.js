// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {
  EPOCHS,
  LAYERS,
  REWARDS,
  SMESHER,
  TXNS
} from '../../../config/constants';

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
          <span className="item-value"><a href={`/${EPOCHS}/126812/${LAYERS}`} onClick={(e) => onClickHandler(e, EPOCHS, '126812', LAYERS)}>167</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards number</span>
          <span className="item-value"><a href={`/${EPOCHS}/320/${REWARDS}`} onClick={(e) => onClickHandler(e, EPOCHS, '320', REWARDS)}>320</a></span>
        </li>
        <li className="item">
          <span className="item-name">Total Rewards value</span>
          <span className="item-value"><a href={`/${EPOCHS}/1200/${REWARDS}`} onClick={(e) =>onClickHandler(e, EPOCHS, '1200', REWARDS)}>1200</a></span>
        </li>
        <li className="item">
          <span className="item-name">Smeshers</span>
          <span className="item-value"><a href={`/${EPOCHS}/1200/${SMESHER}`} onClick={(e) => onClickHandler(e, EPOCHS, '1224', SMESHER)}>1224</a></span>
        </li>
        <li className="item">
          <span className="item-name">Transactions</span>
          <span className="item-value"><a href={`/${EPOCHS}/1200/${TXNS}`} onClick={(e) => onClickHandler(e, EPOCHS, '1224', TXNS)}>1200</a></span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsEpoch;
