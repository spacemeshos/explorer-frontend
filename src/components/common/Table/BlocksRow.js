// @flow
import * as React from 'react';

import { nanoid } from 'nanoid';
import longFormHash from '../../../helper/longFormHash';
import { ACCOUNTS, BLOCKS } from '../../../config/constants';

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
        <div className="td">
          <a href="">
            --
          </a>
        </div>
        <div className="td">--</div>
        <div className="td">--</div>
        <div className="td">--</div>
      </div>
    ))
  );
};

export default BlocksRow;
