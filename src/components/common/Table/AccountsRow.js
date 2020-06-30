// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';

import shortFormHash from '../../../helper/longFormHash';

import { ACCOUNTS } from '../../../config/constants';

type Props = {
  data: Array<object>,
  viewStore: Object,
};

const AccountsRow = (props: Props) => {
  const { data, viewStore } = props;

  const onClickHandler = (e, pageName: string, id: string) => {
    e.preventDefault();
    viewStore.showDetailPage({page: pageName, id})
  };

  return (
    data.map(item => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <a href={`${ACCOUNTS}/${item.id}`} onClick={(e) => onClickHandler(e, ACCOUNTS, item.id)}>
            {shortFormHash(item.id)}
          </a>
        </div>
        <div className="td">{item.sent} SMH</div>
        <div className="td">{item.recieved} SMH</div>
        <div className="td">{item.lastActive}</div>
        <div className="td">{item.awards} SMH</div>
        <div className="td">{item.balance} SMH</div>
      </div>
    ))
  )
};

export default AccountsRow;
