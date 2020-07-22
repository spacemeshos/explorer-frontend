// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import shortFormHash from '../../../helper/longFormHash';

import { SMART_WALLET } from '../../../config/constants';
import RowPreloader from './RowPreloader';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const AppRow = (props: Props) => {
  const { data, viewStore } = props;

  return data.case({
    pending: () => {
      return <RowPreloader rowCount={2}/>
    },
    fulfilled: (value) => {
      return (
        value.map((item) => (
          <div key={nanoid()} className="tr">
            <div className="td">
              <a href={`${SMART_WALLET}/${item.address}`} onClick={(e) => viewStore.linkHandler(e, SMART_WALLET, item.address)}>
                {shortFormHash(item.address)}
              </a>
            </div>
            <div className="td">
              {item.name}
            </div>
            <div className="td">
              {item.created}
            </div>
            <div className="td">
              {item.balance}
              SMH
            </div>
          </div>
        ))
      );
    },
    rejected: () => {},
  })
};

export default observer(AppRow);
