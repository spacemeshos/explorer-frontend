// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';

import shortFormHash from '../../../helper/longFormHash';

import { ACCOUNTS, SMESHER } from '../../../config/constants';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const SmesherRow = (props: Props) => {
  const { data, viewStore } = props;

  const onClickHandler = (e, pageName: string, id: string) => {
    e.preventDefault();
    viewStore.showDetailPage({ page: pageName, id });
  };

  return (
    data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <a href={`${SMESHER}/${item.id}`} onClick={(e) => onClickHandler(e, SMESHER, item.id)}>
            {item.id}
          </a>
        </div>
        <div className="td">
          <a href={`${ACCOUNTS}/${item.id}`} onClick={(e) => onClickHandler(e, ACCOUNTS, item.id)}>
            {shortFormHash(item.rewardsAccount)}
          </a>
        </div>
        <div className="td">
          {item.committedSpace}
          {' '}
          GB
        </div>
        <div className="td">
          {item.totalAtxTxns}
          {' '}
          SMH
        </div>
      </div>
    ))
  );
};

export default SmesherRow;
