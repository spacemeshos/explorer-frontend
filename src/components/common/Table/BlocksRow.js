// @flow
import * as React from 'react';

import { nanoid } from 'nanoid';
import longFormHash from '../../../helper/longFormHash';
import { BLOCKS } from '../../../config/constants';
import CustomTimeAgo from '../CustomTimeAgo';
import {smhCoinConverter} from '../../../helper/converter';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const BlocksRow = (props: Props) => {
  const { data, viewStore } = props;

  return (
    data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <a href={`/${BLOCKS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, BLOCKS, item.id)}>
            {longFormHash(item.id)}
          </a>
        </div>
        <div className="td">--</div>
        <div className="td">{item.txsnumber}</div>
        <div className="td">
          <CustomTimeAgo time={item.start}/>
        </div>
        <div className="td">{smhCoinConverter(item.txsvalue)}</div>
      </div>
    ))
  );
};

export default BlocksRow;
