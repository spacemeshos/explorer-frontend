// @flow
import * as React from 'react';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import CustomTimeAgo from '../CustomTimeAgo';

import shortFormHash from '../../../helper/longFormHash';
import { formatSmidge } from '../../../helper/converter';
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
          <a href={`${ACCOUNTS}/${item.address}`} onClick={(e) => viewStore.linkHandler(e, ACCOUNTS, item.address)}>
            {shortFormHash(item.address)}
          </a>
        </div>
        <div className="td">
          {formatSmidge(item.sent)}
        </div>
        <div className="td">
          {formatSmidge(item.recieved)}
        </div>
        <div className="td">
          <CustomTimeAgo time={item.timestamp} />
        </div>
        {/* <div className="td"> */}
        {/*  {formatSmidge(item.awards)} */}
        {/* </div> */}
        <div className="td">
          {formatSmidge(item.balance)}
        </div>
      </div>
    ))
  );
};

export default observer(AccountsRow);
