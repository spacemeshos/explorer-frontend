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
import Loader from '../Loader';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const EpochsRow = (props: Props) => {
  const { data, viewStore } = props;

  return data.case({
    pending: () => {
      return <Loader size={100}/>
    },
    fulfilled: (value) => {
      return (
        value.map((item) => (
          <div key={nanoid()} className="tr">
            <div className="td"><a href={`/${EPOCHS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, item.id)}>{item.id}</a></div>
            <div className="td">{item.started}</div>
            <div className="td">{item.ended}</div>
            <div className="td"><a href={`/${EPOCHS}/${item.id}/${LAYERS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, item.id, LAYERS)}>{item.layers}</a></div>
            <div className="td"><a href={`/${EPOCHS}/${item.id}/${TXNS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, item.id, TXNS)}>{item.transactions}</a></div>
            <div className="td">{item.smeshers}</div>
            <div className="td"><a href={`/${EPOCHS}/${item.id}/${REWARDS}`} onClick={(e) => viewStore.linkHandler(e, EPOCHS, item.id, REWARDS)}>{item.rewards}</a></div>
            <div className="td">{item.total}</div>
          </div>
        ))
      );
    },
    rejected: () => {},
  });
};

export default observer(EpochsRow);
