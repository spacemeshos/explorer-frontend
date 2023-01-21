// @flow
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import { Link } from 'react-router-dom';
import CustomTimeAgo from '../CustomTimeAgo';

import shortFormHash from '../../helper/longFormHash';
import { formatSmidge } from '../../helper/converter';
import { ACCOUNTS } from '../../config/constants';

const AccountsRow = ({ data }) => (
  data && data.map((item) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        <Link to={`/${ACCOUNTS}/${item.address}`}>
          {shortFormHash(item.address)}
        </Link>
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
      <div className="td">
        {formatSmidge(item.balance)}
      </div>
    </div>
  ))
);

export default observer(AccountsRow);
