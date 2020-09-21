// @flow
import * as React from 'react';

import { nanoid } from 'nanoid';
import StatusIcon from '../StatusIcon';
import shortFormHash from '../../../helper/shortFormHash';
import longFormHash from '../../../helper/longFormHash';
import { LAYERS, TXNS } from '../../../config/constants';
import { byteConverter } from '../../../helper/converter';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const AtxsRow = (props: Props) => {
  const { data, viewStore } = props;

  return (
    data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <StatusIcon status="confirmed" />
          <a href={`/${TXNS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, TXNS, item.id)}>
            {shortFormHash(item.id)}
          </a>
        </div>
        <div className="td">
          {byteConverter(item.cSize)}
        </div>
        <div className="td">
          <a href={`/${LAYERS}/${item.layer}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.layer)}>
            {item.layer}
          </a>
        </div>
        <div className="td">
          {longFormHash(item.prevAtx)}
        </div>
      </div>
    ))
  );
};

export default AtxsRow;
