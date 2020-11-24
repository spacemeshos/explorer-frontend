// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import {
  EPOCHS,
  LAYERS,
  REWARDS,
  TXNS,
} from '../../../config/constants';
import { smhCoinConverter } from '../../../helper/converter';
import CustomTimeAgo from '../CustomTimeAgo';

type Props = {
  data: Array<Object>,
  viewStore: Object,
};

const EpochsRow = (props: Props) => {
  const { data, viewStore } = props;

  return (
    data && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td"><a href={`/${EPOCHS}/${item.number}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, item.number)}>{item.number}</a></div>
        <div className="td">
          <CustomTimeAgo time={item.start} />
        </div>
        <div className="td">
          <a
            href={`/${EPOCHS}/${item.number}/${LAYERS}`}
            onClick={(e) => { viewStore.linkHandler(e, EPOCHS, item.number, LAYERS); }}
          >
            {item.layers}
          </a>
        </div>
        <div className="td">
          <a
            href={`/${EPOCHS}/${item.number}/${TXNS}`}
            onClick={(e) => { viewStore.linkHandler(e, EPOCHS, item.number, TXNS); }}
          >
            {item.stats.current.transactions}
          </a>
        </div>
        <div className="td">{item.stats.current.smeshers}</div>
        <div className="td">
          <a
            href={`/${EPOCHS}/${item.number}/${REWARDS}`}
            onClick={(e) => { viewStore.linkHandler(e, EPOCHS, item.number, REWARDS); }}
          >
            {smhCoinConverter(item.stats.current.rewards)}
          </a>
        </div>
        <div className="td" style={{ flexGrow: 2 }}>{smhCoinConverter(item.stats.current.circulation)}</div>
      </div>
    ))
  );
};

export default observer(EpochsRow);
