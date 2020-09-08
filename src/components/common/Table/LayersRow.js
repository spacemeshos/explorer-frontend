// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import {
  ATXS,
  LAYERS,
  REWARDS,
  TXNS,
} from '../../../config/constants';
import moment from 'moment';
import {smhCoinConverter} from '../../../helper/converter';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const LayersRow = (props: Props) => {
  const { data, viewStore } = props;

  return (
    data && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <a href={`/${LAYERS}/${item.number}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.number)}>
            {item.number}
          </a>
        </div>
        <div className="td">
          <a href={`/${LAYERS}/${item.number}/${TXNS}`} onClick={(e) => {
            viewStore.linkHandler(e, LAYERS, item.number, TXNS)
          }}>
            {item.txs}
          </a>
        </div>
        <div className="td">
          { moment.unix(item.start).fromNow() }
        </div>
        <div className="td">
          <a href={`/${LAYERS}/${item.number}/${TXNS}`} onClick={(e) => {
            viewStore.linkHandler(e, LAYERS, item.number, TXNS)
          }}>
            {smhCoinConverter(item.txsamount)}
          </a>
        </div>
        <div className="td">
          <a href={`/${LAYERS}/${item.number}/${ATXS}`} onClick={(e) => {
            viewStore.linkHandler(e, LAYERS, item.number, ATXS)
          }}>
            {smhCoinConverter(item.atxssize)}
          </a>
        </div>
        <div className="td">
          <a href={`/${LAYERS}/${item.number}/${REWARDS}`} onClick={(e) => {
            viewStore.linkHandler(e, LAYERS, item.number, REWARDS)
          }}>
            {smhCoinConverter(item.rewards)}
          </a>
        </div>
      </div>
    ))
  );
};

export default observer(LayersRow);
