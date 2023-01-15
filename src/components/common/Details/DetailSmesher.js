// @flow
import * as React from 'react';

import CopyButton from '../../CopyButton';
import {
  ACCOUNTS, ATXS, SMESHER,
} from '../../../config/constants';
import { byteConverter } from '../../../helper/converter';

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
            {data.id}
            <CopyButton value={data.id} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Rewards Account</span>
          <span className="item-value">
            <a href={`/${ACCOUNTS}/${data.coinbase}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, data.coinbase)}>
              {data.coinbase}
            </a>
            <CopyButton value={data.coinbase} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Space</span>
          <span className="item-value">
            {byteConverter(data.cSize)}
          </span>
        </li>
        {/* <li className="item"> */}
        {/*  <span className="item-name">Reward</span> */}
        {/*  <span className="item-value"> */}
        {/*    <a href={`/${SMESHER}/${data.id}/${REWARDS}`} onClick={(e) => viewStore.linkHandler(e, SMESHER, data.id, REWARDS)}>{formatSmidge(data.rewards)}</a> */}
        {/*  </span> */}
        {/* </li> */}
        <li className="item">
          <span className="item-name">Activations</span>
          <span className="item-value">
            <a href={`/${SMESHER}/${data.id}/${ATXS}`} onClick={(e) => viewStore.linkHandler(e, SMESHER, data.id, ATXS)}>{data.atxcount}</a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailAccount;
