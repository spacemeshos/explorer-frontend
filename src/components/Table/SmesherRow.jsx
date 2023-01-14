// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import shortFormHash from '../../helper/longFormHash';

import {
  ACCOUNTS, ATXS, SMESHER,
} from '../../config/constants';
import { byteConverter } from '../../helper/converter';
import {Link} from "react-router-dom";

const SmesherRow = ({data}) => {
  return (
    data && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <Link to={`${SMESHER}/${item.id}`}>
            {shortFormHash(item.id)}
          </Link>
        </div>
        <div className="td">
          <Link to={`${ACCOUNTS}/${item.coinbase}`}>
            {shortFormHash(item.coinbase)}
          </Link>
        </div>
        <div className="td">
          {byteConverter(item.cSize)}
        </div>
        <div className="td">
          <Link to={`/${SMESHER}/${item.id}/${ATXS}`}>{item.atxcount}</Link>
        </div>
      </div>
    ))
  );
};

export default observer(SmesherRow);
