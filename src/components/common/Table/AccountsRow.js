// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';
import moment from 'moment';

import shortFormHash from '../../../helper/longFormHash';

import { ACCOUNTS } from '../../../config/constants';
import {smhCoinConverter} from '../../../helper/converter';

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
          <a href={`${ACCOUNTS}/${item.address}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, item.address)}>
            {shortFormHash(item.address)}
          </a>
        </div>
        <div className="td">
          {smhCoinConverter(item.sent)}
        </div>
        <div className="td">
          {smhCoinConverter(item.recieved)}
        </div>
        <div className="td">{moment.unix(item.timestamp).fromNow()}</div>
        <div className="td">
          {smhCoinConverter(item.awards)}
        </div>
        <div className="td">
          {smhCoinConverter(item.balance)}
        </div>
      </div>
    ))
  );
};

export default observer(AccountsRow);
