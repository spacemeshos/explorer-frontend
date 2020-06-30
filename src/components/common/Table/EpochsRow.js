// @flow
import * as React from 'react';

import { nanoid } from 'nanoid';

import {
  EPOCHS,
  LAYERS,
  REWARDS,
  TXNS,
} from '../../../config/constants';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const EpochsRow = (props: Props) => {
  const { data, viewStore } = props;

  return (
    data.map(item => (
      <div key={nanoid()} className="tr">
        <div className="td"><a href={`/${EPOCHS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, item.id)}>{item.id}</a></div>
        <div className="td">{item.started}</div>
        <div className="td">{item.ended}</div>
        <div className="td"><a href={`/${EPOCHS}/${item.id}/${LAYERS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, item.id, LAYERS)}>{item.layers}</a></div>
        <div className="td"><a href={`/${TXNS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, TXNS, item.id)}>{item.transactions}</a></div>
        <div className="td">{item.smeshers}</div>
        <div className="td"><a href={`/${REWARDS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, REWARDS, item.id)}>{item.rewards}</a></div>
        <div className="td">{item.total}</div>
      </div>
    ))
  )
};

export default EpochsRow;
