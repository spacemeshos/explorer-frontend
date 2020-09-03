// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from "mobx-react";

import shortFormHash from '../../../helper/shortFormHash';
import longFormHash from '../../../helper/longFormHash';
import {
  ACCOUNTS,
  LAYERS,
  REWARDS,
  SMESHER,
} from '../../../config/constants';
import Loader from '../Loader';
import NoData from '../NoData';
import { smhCoinConverter } from '../../../helper/converter';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const RewardsRow = (props: Props) => {
  const { data, viewStore } = props;

  return data.case({
    pending: () => {
      return <Loader size={100}/>
    },
    fulfilled: ({ data }) => {
      return (
        data.length !== 0 ? data.map((item) => (
          <div key={nanoid()} className="tr">
            <div className="td">
              <a href={`/${REWARDS}/${item._id}`} onClick={(e) => viewStore.linkHandler(e, REWARDS, item._id)}>
                {shortFormHash(item._id)}
              </a>
            </div>
            <div className="td">
              <a href={`/${ACCOUNTS}/${item.coinbase}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, item.coinbase)}>
                {longFormHash(item.coinbase)}
              </a>
            </div>
            <div className="td">
              <a href={`/${SMESHER}/${item.smesher}`} onClick={(e) => viewStore.linkHandler(e, SMESHER, item.smesher)}>
                {longFormHash(item.smesher)}
              </a>
            </div>
            <div className="td">
              <a href={`/${LAYERS}/${item.layer}`} onClick={(e) => viewStore.linkHandler(e, LAYERS, item.layer)}>
                {item.layer}
              </a>
            </div>
            <div className="td">
              {item.space}
              GB
            </div>
            <div className="td">
              {smhCoinConverter(item.total)}
            </div>
          </div>
        )) : (<NoData />)
      );
    },
    rejected: () => (<NoData/>)
  });
};

export default observer(RewardsRow);
