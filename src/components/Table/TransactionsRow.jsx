// @flow
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import { Link } from 'react-router-dom';
import type { V2alpha1TransactionResponse } from 'api';
import StatusIcon from '../StatusIcon';
import longFormHash from '../../helper/longFormHash';

import {
  ACCOUNTS, LAYERS, TXNS,
} from '../../config/constants';
import { base64ToHex, formatSmidge } from '../../helper/converter';
import { typeOfTransaction, mapTxResult } from '../../helper/tx';

type Props = {
  data: V2alpha1TransactionResponse[],
  pathname: string
}
const TransactionsRow = ({ data, pathname }: Props) => (
  data && data.map((item: V2alpha1TransactionResponse) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        <StatusIcon status={mapTxResult(item.txState, item.txResult?.status)} />
        <Link to={`/${TXNS}/${base64ToHex(item.tx.id)}`}>
          {longFormHash(base64ToHex(item.tx.id))}
        </Link>
      </div>
      <div className="td">
        <Link to={`/${LAYERS}/${item.txResult?.layer}`}>
          {item.txResult?.layer}
        </Link>
      </div>
      <div className="td">{formatSmidge(item.tx.contents?.send?.amount || 0)}</div>
      <div className="td">
        {
          pathname === `/${ACCOUNTS}/${item.tx.principal}` ? longFormHash(item.tx.principal) : (
            <Link to={`/${ACCOUNTS}/${item.tx.principal}`}>
              {longFormHash(item.tx.principal)}
            </Link>
          )
        }
        <div className="arrow">-&gt;</div>
      </div>
      <div className="td">
        {
          pathname === `/${ACCOUNTS}/${item.tx.contents.send?.destination || item.tx.principal}`
            ? longFormHash(item.tx.contents.send?.destination || item.tx.principal) : (
              <Link to={`/${ACCOUNTS}/${item.tx.contents.send?.destination || item.tx.principal}`}>
                {longFormHash(item.tx.contents.send?.destination || item.tx.principal)}
              </Link>
            )
        }
      </div>
      <div className="td">{typeOfTransaction(item.tx.type)}</div>
    </div>
  ))
);

export default observer(TransactionsRow);
