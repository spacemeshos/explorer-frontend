// @flow
import React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import shortFormHash from '../../helper/shortFormHash';
import longFormHash from '../../helper/longFormHash';
import {
  ACCOUNTS,
  LAYERS,
  REWARDS,
  SMESHER,
} from '../../config/constants';
import { byteConverter, formatSmidge } from '../../helper/converter';
import {Link} from "react-router-dom";

const RewardsRow = ({data}) => {
  return (
    data && data.length !== 0 && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <Link to={`/${REWARDS}/${item._id}`}>
            {item._id ? shortFormHash(item._id) : '--'}
          </Link>
        </div>
        <div className="td">
          <a to={`/${ACCOUNTS}/${item.coinbase}`}>
            {longFormHash(item.coinbase)}
          </a>
        </div>
        <div className="td">
          <a to={`/${SMESHER}/${item.smesher}`}>
            {longFormHash(item.smesher)}
          </a>
        </div>
        <div className="td">
          <a to={`/${LAYERS}/${item.layer}`}>
            {item.layer}
          </a>
        </div>
        <div className="td">
          {byteConverter(item.space)}
        </div>
        <div className="td">
          {formatSmidge(item.total)}
        </div>
      </div>
    ))
  );
};

export default observer(RewardsRow);
