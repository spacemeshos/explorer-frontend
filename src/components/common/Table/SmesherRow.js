// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import shortFormHash from '../../../helper/longFormHash';

import { ACCOUNTS, SMESHER } from '../../../config/constants';
import Loader from '../Loader';
import NoData from '../NoData';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const SmesherRow = (props: Props) => {
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
              <a href={`${SMESHER}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, SMESHER, item.id)}>
                {item.id}
              </a>
            </div>
            <div className="td">
              <a href={`${ACCOUNTS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, item.id)}>
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
        )) : (<NoData/>)
      );
    },
    rejected: () => (<NoData/>),
  })
};

export default observer(SmesherRow);
