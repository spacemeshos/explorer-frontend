// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import {
  EPOCHS,
  LAYERS,
  TXNS,
} from '../../config/constants';
import CustomTimeAgo from '../common/CustomTimeAgo';
import {Link} from "react-router-dom";

const EpochsRow = ({ data }) => {
  return (
    data && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td"><a href={`/${EPOCHS}/${item.number}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, item.number)}>{item.number}</a></div>
        <div className="td">
          <CustomTimeAgo time={item.start} />
        </div>
        <div className="td">
          <Link href={`/${EPOCHS}/${item.number}/${LAYERS}`}>{item.layers}</Link>
        </div>
        <div className="td">
          <Link to={`/${EPOCHS}/${item.number}/${TXNS}`}>{item.stats.current.transactions}</Link>
        </div>
        <div className="td">{item.stats.current.smeshers}</div>
        {/* <div className="td"> */}
        {/*  <a */}
        {/*    href={`/${EPOCHS}/${item.number}/${REWARDS}`} */}
        {/*    onClick={(e) => { viewStore.linkHandler(e, EPOCHS, item.number, REWARDS); }} */}
        {/*  > */}
        {/*    {formatSmidge(item.stats.current.rewards)} */}
        {/*  </a> */}
        {/* </div> */}
        {/* <div className="td" style={{ flexGrow: 2 }}>{formatSmidge(item.stats.current.circulation)}</div> */}
      </div>
    ))
  );
};

export default observer(EpochsRow);
