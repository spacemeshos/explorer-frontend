// @flow
import * as React from 'react';

import { nanoid } from 'nanoid';
import StatusIcon from '../StatusIcon';
import shortFormHash from '../../../helper/shortFormHash';
import longFormHash from '../../../helper/longFormHash';
import {
  ACCOUNTS, LAYERS, TXNS,
} from '../../../config/constants';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const TransactionsRow = (props: Props) => {
  const { data, viewStore } = props;

  return (
    data.map((item) => (
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
        <div className="td">{item.value}</div>
        <div className="td">
          <a href={`/${ACCOUNTS}/${item.from}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, item.from)}>
            {longFormHash(item.from)}
          </a>
          <div className="arrow">-&gt;</div>
        </div>
        <div className="td">
          <a href={`/${ACCOUNTS}/${item.to}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, item.to)}>
            {longFormHash(item.to)}
          </a>
        </div>
        <div className="td">{item.type.toUpperCase()}</div>
      </div>
    ))
  );
};

export default TransactionsRow;
