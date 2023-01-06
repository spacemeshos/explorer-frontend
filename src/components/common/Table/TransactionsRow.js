// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import StatusIcon from '../StatusIcon';
import longFormHash from '../../../helper/longFormHash';

import {
  ACCOUNTS, LAYERS, TXNS,
} from '../../../config/constants';
import { formatSmidge } from '../../../helper/converter';
import { mappingStatus } from '../../../helper/mappingStatus';
import { typeOfTransaction } from '../../../helper/tx';

type Props = {
  data: Array<Object>,
  viewStore: Object,
};

const TransactionsRow = (props: Props) => {
  const { data, viewStore } = props;

  return (
    data && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <StatusIcon status={mappingStatus(item.state)} />
          <a href={`/${TXNS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, TXNS, item.id)}>
            {longFormHash(item.id)}
          </a>
        </div>
        <div className="td">
          <a href={`/${LAYERS}/${item.layer}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.layer)}>
            {item.layer}
          </a>
        </div>
        <div className="td">{formatSmidge(item.amount)}</div>
        <div className="td">
          <a
            href={`/${ACCOUNTS}/${item.sender}`}
            onClick={(e) => {
              viewStore.linkHandler(e, ACCOUNTS, item.sender);
            }}
          >
            {longFormHash(item.sender)}
          </a>
          <div className="arrow">-&gt;</div>
        </div>
        <div className="td">
          <a
            href={`/${ACCOUNTS}/${item.receiver}`}
            onClick={(e) => {
              viewStore.linkHandler(e, ACCOUNTS, item.receiver);
            }}
          >
            {longFormHash(item.receiver)}
          </a>
        </div>
        <div className="td">{typeOfTransaction(item.type)}</div>
      </div>
    ))
  );
};

export default observer(TransactionsRow);
