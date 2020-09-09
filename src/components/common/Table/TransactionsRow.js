// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import StatusIcon from '../StatusIcon';
import shortFormHash from '../../../helper/shortFormHash';
import longFormHash from '../../../helper/longFormHash';

import { ACCOUNTS, LAYERS, TXNS } from '../../../config/constants';

type Props = {
  data: Array<Object>,
  viewStore: Object,
};

const TransactionsRow = (props: Props) => {
  const { data, viewStore } = props;

  const typeOfTxns = (type) => {
    switch(type) {
      case 0:
        return 'Coin';
      case 1:
        return 'ATX';
      case 2:
        return 'Smart Contract';
    }
  };

  return (
    data && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <StatusIcon status="confirmed" />
          <a href={`/${TXNS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, TXNS, item.id)}>
            {shortFormHash(item.id)}
          </a>
        </div>
        <div className="td">
          <a href={`/${LAYERS}/${item.layer}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.layer)}>
            {item.layer}
          </a>
        </div>
        <div className="td">{item.amount}</div>
        <div className="td">
          <a href={`/${ACCOUNTS}/${item.sender}`} onClick={(e) => {
            // TODO uncomment after backend implementation
            e.preventDefault()
            //viewStore.linkHandler(e, ACCOUNTS, item.sender)
          }}>
            {longFormHash(item.sender)}
          </a>
          <div className="arrow">-&gt;</div>
        </div>
        <div className="td">
          <a href={`/${ACCOUNTS}/${item.receiver}`} onClick={(e) => {
           // TODO uncomment after backend implementation
            e.preventDefault()
           // viewStore.linkHandler(e, ACCOUNTS, item.receiver)
          }}>
            {longFormHash(item.receiver)}
          </a>
        </div>
        <div className="td">{typeOfTxns(item.type)}</div>
      </div>
    ))
  );
};

export default observer(TransactionsRow);
