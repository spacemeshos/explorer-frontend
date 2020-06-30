// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';

import shortFormHash from '../../../helper/shortFormHash';
import longFormHash from '../../../helper/longFormHash';
import {
  ACCOUNTS,
  LAYERS,
  REWARDS,
  SMESHER
} from '../../../config/constants';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const RewardsRow = (props: Props) => {
  const { data, viewStore } = props;

  const onClickHandler = (e, pageName: string, id: string) => {
    e.preventDefault();
    viewStore.showDetailPage({page: pageName, id})
  };

  return (
    data.map(item => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <a href={`/${REWARDS}/${item.id}`} onClick={(e) => onClickHandler(e, REWARDS, item.id)}>
            {shortFormHash(item.id)}
          </a>
        </div>
        <div className="td">
          <a href={`/${ACCOUNTS}/${item.id}`} onClick={(e) => onClickHandler(e, ACCOUNTS, item.id)}>
            {longFormHash(item.account)}
          </a>
        </div>
        <div className="td">
          <a href={`/${SMESHER}/${item.id}`} onClick={(e) => onClickHandler(e, SMESHER, item.id)}>
            {longFormHash(item.smesher)}
          </a>
        </div>
        <div className="td">
          <a href={`/${LAYERS}/${item.id}`} onClick={(e) => onClickHandler(e, LAYERS, item.id)}>
            {item.layer}
          </a>
        </div>
        <div className="td">{item.space} GB</div>
        <div className="td">{item.value} SMH</div>
      </div>
    ))
  )
};

export default RewardsRow;
