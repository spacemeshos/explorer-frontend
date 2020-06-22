// @flow
import * as React from 'react';

import StatusIcon from '../StatusIcon';
import shortFormHash from '../../../helper/shortFormHash';
import longFormHash from '../../../helper/longFormHash';

type Props = {
  data: Array<object>,
};

const TransactionsRow = (props: Props) => {
  const { data } = props;

  const onClickHandler = (e) => {
    e.preventDefault();
  };

  return (
    data.map(item => (
      <div className="tr">
        <div className="td">
          <StatusIcon status="confirmed" />
          <a href="/" onClick={onClickHandler}>
            {shortFormHash(item.id)}
          </a>
        </div>
        <div className="td">
          <a href="/" onClick={onClickHandler}>
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
