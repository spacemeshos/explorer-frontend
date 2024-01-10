// @flow
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import { Link } from 'react-router-dom';
import StatusIcon from '../StatusIcon';
import longFormHash from '../../helper/longFormHash';

import {
  ACCOUNTS, LAYERS, TXNS,
} from '../../config/constants';
import { formatSmidge } from '../../helper/converter';
import { typeOfTransaction, mapTxResult } from '../../helper/tx';

const AccountTxsRow = ({ data, pathname }) => (
  data && data.map((item) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        <StatusIcon status={mapTxResult(item.state, item.result)} />
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
      <div className="td">{item.counter}</div>
      <div className="td">
        {
          pathname === `/${ACCOUNTS}/${item.sender}` ? longFormHash(item.sender) : (
            <Link to={`/${ACCOUNTS}/${item.sender}`}>
              {longFormHash(item.sender)}
            </Link>
          )
        }
        <div className="arrow">-&gt;</div>
      </div>
      <div className="td">
        {
          pathname === `/${ACCOUNTS}/${item.receiver}` ? longFormHash(item.receiver) : (
            <Link to={`/${ACCOUNTS}/${item.receiver}`}>
              {longFormHash(item.receiver)}
            </Link>
          )
        }
      </div>
      <div className="td">{typeOfTransaction(item.type)}</div>
    </div>
  ))
);

export default observer(AccountTxsRow);
