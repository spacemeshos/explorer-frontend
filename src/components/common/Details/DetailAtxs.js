// @flow
import * as React from 'react';

import CopyButton from '../CopyButton';
import {
  ACCOUNTS,
  ATXS,
  LAYERS,
  SMESHER,
} from '../../../config/constants';
import { byteConverter, formatSmidge } from '../../../helper/converter';

type Props = {
  data: Object,
  viewStore: Object,
};

const DetailAtxs = (props: Props) => {
  const { data, viewStore } = props;

  return (
    <div className="details">
      <ul className="details-list">
        <li className="item">
          <span className="item-name">Activation Id</span>
          <span className="item-value">
            {data.id}
            <CopyButton value={data.id} />
          </span>
        </li>
        <li className="item">
          <span className="item-name">Smesher</span>
          <span className="item-value">
            <a href={`/${SMESHER}/${data.smesher}`} onClick={(e) => viewStore.linkHandler(e, SMESHER, data.smesher)}>
              {data.smesher}
            </a>
            <CopyButton value={data.smesher} />
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
          <span className="item-name">Layer</span>
          <span className="item-value">
            <a href={`/${LAYERS}/${data.layer}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, data.layer)}>
              {data.layer}
            </a>
          </span>
        </li>
        <li className="item">
          <span className="item-name">Fee</span>
          <span className="item-value">
            {formatSmidge(data.gasPrice * data.maxGas)}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Space</span>
          <span className="item-value">
            {byteConverter(data.cSize)}
          </span>
        </li>
        <li className="item">
          <span className="item-name">Previous Activation</span>
          <span className="item-value">
            <a href={`/${ATXS}/${data.prevAtx}`} onClick={(e) => viewStore.linkHandler(e, ATXS, data.prevAtx)}>
              {data.prevAtx}
            </a>
            <CopyButton value={data.prevAtx} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailAtxs;
