// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import shortFormHash from '../../../helper/longFormHash';

import {
  ATXS, LAYERS, REWARDS, TXNS,
} from '../../../config/constants';
import RowPreloader from './RowPreloader';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const LayersRow = (props: Props) => {
  const { data, viewStore } = props;

  return data.case({
    pending: () => {
      return <RowPreloader rowCount={7}/>
    },
    fulfilled: (value) => {
      return (
        value.map((item) => (
          <div key={nanoid()} className="tr">
            <div className="td">
              <a href={`/${LAYERS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.id)}>
                {shortFormHash(item.id)}
              </a>
            </div>
            <div className="td">
              <a href={`/${LAYERS}/${item.id}/${TXNS}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.id, TXNS)}>
                {item.transactions}
              </a>
            </div>
            <div className="td">
              {item.age}
            </div>
            <div className="td">
              <a href={`/${LAYERS}/${item.id}/${ATXS}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.id, ATXS)}>
                {item.txnValue}
                SMH
              </a>
            </div>
            <div className="td">
              <a href={`/${LAYERS}/${item.id}/${REWARDS}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.id, REWARDS)}>
                {item.atxValue}
                SMH
              </a>
            </div>
          </div>
        ))
      );
    },
    rejected: () => {},
  });
};

export default observer(LayersRow);
