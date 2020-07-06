// @flow
import * as React from 'react';

import StatusIcon from '../StatusIcon';
import shortFormHash from '../../../helper/shortFormHash';
import longFormHash from '../../../helper/longFormHash';
import { nanoid } from 'nanoid';
import { ACCOUNTS, TXNS } from "../../../config/constants";

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const AtxsRow = (props: Props) => {
  const { data, viewStore } = props;

  return (
    data.map(item => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <StatusIcon status="confirmed" />
          <a href={`/${TXNS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, TXNS, item.id)}>
            {shortFormHash(item.id)}
          </a>
        </div>
        <div className="td">{item.value} SMH</div>
        <div className="td">{item.age}</div>
        <div className="td">
          <a href={`/${ACCOUNTS}/${item.from}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, item.from)}>
            {longFormHash(item.from)}
          </a>
        </div>
        <div className="td">{longFormHash(item.type)}</div>
      </div>
    ))
  )
};

export default AtxsRow;
