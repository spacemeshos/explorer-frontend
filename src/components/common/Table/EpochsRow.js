// @flow
import * as React from 'react';

import { nanoid } from 'nanoid';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const EpochsRow = (props: Props) => {
  const { data } = props;

  // const onClickHandler = (e, pageName: string, id: string) => {
  //   e.preventDefault();
  //   viewStore.showDetailPage({page: pageName, id})
  // };

  return (
    data.map(item => (
      <div key={nanoid()} className="tr">
        <div className="td"><a href="">{item.id}</a></div>
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
