// @flow
import * as React from 'react';

import { nanoid } from 'nanoid';

import { EPOCHS } from '../../../config/constants';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const EpochsRow = (props: Props) => {
  const { data, viewStore } = props;

  const onClickHandler = (e, pageName: string, id: string) => {
    e.preventDefault();
    viewStore.showDetailPage({page: pageName, id})
  };

  return (
    data.map(item => (
      <div key={nanoid()} className="tr">
        <div className="td"><a href={`${EPOCHS}/${item.id}`} onClick={(e) => onClickHandler(e, EPOCHS, item.id)}>{item.id}</a></div>
        <div className="td">{item.started}</div>
        <div className="td">{item.ended}</div>
        <div className="td">{item.layers}</div>
        <div className="td">{item.transactions}</div>
        <div className="td">{item.smeshers}</div>
        <div className="td">{item.rewards}</div>
        <div className="td">{item.total}</div>
      </div>
    ))
  )
};

export default EpochsRow;
