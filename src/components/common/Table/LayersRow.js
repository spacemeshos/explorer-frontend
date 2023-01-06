// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import {
  LAYERS,
  ATXS,
  TXNS,
} from '../../../config/constants';
import { byteConverter, formatSmidge } from '../../../helper/converter';
import CustomTimeAgo from '../CustomTimeAgo';

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
          <CustomTimeAgo time={item.start} />
        </div>
        <div className="td">
          <a
            href={`/${LAYERS}/${item.number}/${TXNS}`}
            onClick={(e) => {
              viewStore.linkHandler(e, LAYERS, item.number, TXNS);
            }}
          >
            {`${item.txs} Transactions (${formatSmidge(item.txsamount)})`}
          </a>
        </div>
        <div className="td">
          <a
            href={`/${LAYERS}/${item.number}/${ATXS}`}
            onClick={(e) => {
              viewStore.linkHandler(e, LAYERS, item.number, ATXS);
            }}
          >
            {byteConverter(item.atxssize)}
          </a>
        </div>
        {/* <div className="td"> */}
        {/*  <a */}
        {/*    href={`/${LAYERS}/${item.number}/${REWARDS}`} */}
        {/*    onClick={(e) => { */}
        {/*      viewStore.linkHandler(e, LAYERS, item.number, REWARDS); */}
        {/*    }} */}
        {/*  > */}
        {/*    {formatSmidge(item.rewards)} */}
        {/*  </a> */}
        {/* </div> */}
      </div>
    ))
  );
};

export default observer(LayersRow);
