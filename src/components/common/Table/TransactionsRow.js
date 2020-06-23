// @flow
import * as React from 'react';

import StatusIcon from '../StatusIcon';
import shortFormHash from '../../../helper/shortFormHash';
import longFormHash from '../../../helper/longFormHash';
import { nanoid } from 'nanoid';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const TransactionsRow = (props: Props) => {
  const { data, viewStore } = props;

  const onClickHandler = (e, pageName: string, id: string) => {
    e.preventDefault();
    viewStore.showDetailPage({page: pageName, id})
  };

  return (
    data.map(item => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <StatusIcon status="confirmed" />
          <a href={`txns/${item.id}`} onClick={(e) => onClickHandler(e, 'txns', item.id)}>
            {shortFormHash(item.id)}
          </a>
        </div>
        <div className="td">
          <a href={`layer/${item.layer}`} onClick={onClickHandler}>
            {item.layer}
          </a>
        </div>
        <div className="td">{item.value}</div>
        <div className="td">
          <a href="/" onClick={onClickHandler}>
            {longFormHash(item.from)}
          </a>
          <div className="arrow">-></div>
        </div>
        <div className="td">
          <a href="/" onClick={onClickHandler}>
            {longFormHash(item.to)}
          </a>
        </div>
        <div className="td">{item.type.toUpperCase()}</div>
      </div>
    ))
  )
};

export default TransactionsRow;
