// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import shortFormHash from '../../helper/longFormHash';

import { SMART_WALLET } from '../../config/constants';
import { formatSmidge } from '../../helper/converter';
import {Link} from "react-router-dom";

const AppRow = ({data}) => {
  return (
    data && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <Link to={`${SMART_WALLET}/${item.address}`}>
            {shortFormHash(item.address)}
          </Link>
        </div>
        <div className="td">
          {item.name}
        </div>
        <div className="td">
          {item.created}
        </div>
        <div className="td">
          {formatSmidge(item.balance)}
        </div>
      </div>
    ))
  );
};

export default observer(AppRow);
