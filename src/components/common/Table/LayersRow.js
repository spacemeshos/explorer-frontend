// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';

import shortFormHash from '../../../helper/longFormHash';

import {
  ATXS, LAYERS, REWARDS, TXNS,
} from '../../../config/constants';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const LayersRow = (props: Props) => {
  const { data, viewStore } = props;

  const onClickHandler = (e, pageName: string, id: string, subPage: string) => {
    e.preventDefault();
    if (subPage) {
      viewStore.showSubPage({ page: pageName, id, subPage });
    } else {
      viewStore.showDetailPage({ page: pageName, id });
    }
  };

  return (
    data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <a href={`/${LAYERS}/${item.id}`} onClick={(e) => onClickHandler(e, LAYERS, item.id)}>
            {shortFormHash(item.id)}
          </a>
        </div>
        <div className="td">
          <a href={`/${LAYERS}/${item.id}/${TXNS}`} onClick={(e) => onClickHandler(e, LAYERS, item.id, TXNS)}>
            {item.transactions}
          </a>
        </div>
        <div className="td">
          {item.age}
          {' '}
        </div>
        <div className="td">
          <a href={`/${LAYERS}/${item.id}/${ATXS}`} onClick={(e) => onClickHandler(e, LAYERS, item.id, ATXS)}>
            {item.txnValue}
            {' '}
            SMH
          </a>
        </div>
        <div className="td">
          <a href={`/${LAYERS}/${item.id}/${REWARDS}`} onClick={(e) => onClickHandler(e, LAYERS, item.id, REWARDS)}>
            {item.atxValue}
            {' '}
            SMH
          </a>
        </div>
      </div>
    ))
  );
};

export default LayersRow;
