// @flow
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import { Link } from 'react-router-dom';
import { Spacemeshv2alpha1Account } from 'api';

import shortFormHash from '../../helper/longFormHash';
import { formatSmidge } from '../../helper/converter';
import { ACCOUNTS } from '../../config/constants';

type Props = {
  data: Spacemeshv2alpha1Account[],
}

const AccountsRow = ({ data }: Props) => (
  data && data.map((item: Spacemeshv2alpha1Account) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        <Link to={`/${ACCOUNTS}/${item.address}`}>
          {shortFormHash(item.address)}
        </Link>
      </div>
      <div className="td">
        ---
      </div>
      <div className="td">
        ---
      </div>
      <div className="td">
        {/* <CustomTimeAgo time={item.lastActivity} /> */}
        ---
      </div>
      <div className="td">
        {formatSmidge(item.current.balance)}
      </div>
    </div>
  ))
);

export default observer(AccountsRow);
