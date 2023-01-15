// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import StatusIcon from '../StatusIcon';
import longFormHash from '../../helper/longFormHash';

import {
  ACCOUNTS, LAYERS, TXNS,
} from '../../config/constants';
import { formatSmidge } from '../../helper/converter';
import { mappingStatus } from '../../helper/mappingStatus';
import { typeOfTransaction } from '../../helper/tx';
import {Link} from "react-router-dom";

const TransactionsRow = ({data}) => {
  return (
    data && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <StatusIcon status={mappingStatus(item.state)} />
          <Link to={`/${TXNS}/${item.id}`}>
            {longFormHash(item.id)}
          </Link>
        </div>
        <div className="td">
          <Link to={`/${LAYERS}/${item.layer}`}>
            {item.layer}
          </Link>
        </div>
        <div className="td">{formatSmidge(item.amount)}</div>
        <div className="td">
          <Link to={`/${ACCOUNTS}/${item.sender}`}>
            {longFormHash(item.sender)}
          </Link>
          <div className="arrow">-&gt;</div>
        </div>
        <div className="td">
          <Link to={`/${ACCOUNTS}/${item.receiver}`}>
            {longFormHash(item.receiver)}
          </Link>
        </div>
        <div className="td">{typeOfTransaction(item.type)}</div>
      </div>
    ))
  );
};

export default observer(TransactionsRow);
