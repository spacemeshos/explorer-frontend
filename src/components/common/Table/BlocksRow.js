// @flow
import * as React from 'react';

import longFormHash from '../../../helper/longFormHash';
import { nanoid } from 'nanoid';
import { ACCOUNTS, BLOCKS } from "../../../config/constants";

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const BlocksRow = (props: Props) => {
  const { data, viewStore } = props;

  return (
    data.map(item => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <a href={`/${BLOCKS}/${item.block}`} onClick={(e) => viewStore.linkHandler(e, BLOCKS, item.block)}>
            {item.block}
          </a>
        </div>
        <div className="td">
          <a href={`/${ACCOUNTS}/${item.smesher}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, item.smesher)}>
            {longFormHash(item.smesher)}
          </a>
        </div>
        <div className="td">{item.transaction}</div>
        <div className="td">{item.age}</div>
        <div className="td">{item.txnValue}</div>
      </div>
    ))
  )
};

export default BlocksRow;
