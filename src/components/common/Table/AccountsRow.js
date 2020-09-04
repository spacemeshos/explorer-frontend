// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import shortFormHash from '../../../helper/longFormHash';

import { ACCOUNTS } from '../../../config/constants';

type Props = {
  data: Array<Object>,
  viewStore: Object,
};

const AccountsRow = (props: Props) => {
  const { data, viewStore } = props;

  return (
    data && data.map((item) => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <a href={`${ACCOUNTS}/${item.id}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, item.id)}>
            {shortFormHash(item.id)}
          </a>
        </div>
        <div className="td">
          {item.sent}
          SMH
        </div>
        <div className="td">
          {item.recieved}
          SMH
        </div>
        <div className="td">{item.lastActive}</div>
        <div className="td">
          {item.awards}
          SMH
        </div>
        <div className="td">
          {item.balance}
          SMH
        </div>
      </div>
    ))
  );
};

export default observer(AccountsRow);
