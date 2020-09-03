// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import shortFormHash from '../../../helper/longFormHash';

import {
  ATXS, LAYERS, REWARDS, TXNS,
} from '../../../config/constants';
import Loader from '../Loader';
import NoData from '../NoData';
import moment from 'moment';
import {smhCoinConverter} from '../../../helper/converter';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const LayersRow = (props: Props) => {
  const { data, viewStore } = props;

  return data.case({
    pending: () => {
      return <Loader size={100}/>
    },
    fulfilled: ({ data }) => {
      console.log(data);
      return (
        data.length !== 0 ?data.map((item) => (
          <div key={nanoid()} className="tr">
            <div className="td">
              <a href={`/${LAYERS}/${item.number}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.number)}>
                {item.number}
              </a>
            </div>
            <div className="td">
              <a href={`/${LAYERS}/${item.txs}/${TXNS}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.txs, TXNS)}>
                {item.txs}
              </a>
            </div>
            <div className="td">
              { moment.unix(item.end).fromNow() }
            </div>
            <div className="td">
              <a href={`/${LAYERS}/${item.id}/${ATXS}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.id, ATXS)}>
                {smhCoinConverter(item.txsamount)}
              </a>
            </div>
            <div className="td">
              <a href={`/${LAYERS}/${item.id}/${REWARDS}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.id, REWARDS)}>
                {smhCoinConverter(item.atxssize)}
              </a>
            </div>
          </div>
        )) : (<NoData />)
      );
    },
    rejected: () => (<NoData />),
  });
};

export default observer(LayersRow);
