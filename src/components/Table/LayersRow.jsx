// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import {
  LAYERS,
  ATXS,
  TXNS,
} from '../../config/constants';
import { byteConverter, formatSmidge } from '../../helper/converter';
import CustomTimeAgo from '../CustomTimeAgo';
import {Link} from "react-router-dom";

const LayersRow = ({ data }) => {
  return (
    data && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <Link to={`/${LAYERS}/${item.number}`}>
            {item.number}
          </Link>
        </div>
        <div className="td">
          <CustomTimeAgo time={item.start} />
        </div>
        <div className="td">
          <Link to={`/${LAYERS}/${item.number}/${TXNS}`}>
              {`${item.txs} Transactions (${formatSmidge(item.txsamount)})`}
          </Link>
        </div>
        <div className="td">
          <Link to={`/${LAYERS}/${item.number}/${ATXS}`}>
            {byteConverter(item.atxssize)}
          </Link>
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
