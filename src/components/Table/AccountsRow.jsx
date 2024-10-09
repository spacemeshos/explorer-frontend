// @flow
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import { Link } from 'react-router-dom';
import { Spacemeshv2alpha1Account } from 'api';

import { useEffect, useState } from 'react';
import shortFormHash from '../../helper/longFormHash';
import { formatSmidge } from '../../helper/converter';
import { ACCOUNTS } from '../../config/constants';
import CustomTimeAgo from '../CustomTimeAgo';
import { useStore } from '../../store';
import Loader from '../Loader';

type Props = {
  data: Spacemeshv2alpha1Account[],
}

const AccountsRow = ({ data }: Props) => {
  const store = useStore();
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (data && data.length > 0) {
      for (const item of data) {
        fetch(`${store.statsApiUrl}/account/${item.address}`).then((res) => {
          if (res.status === 429) {
            store.showThrottlePopup();
            throw new Error('Too Many Requests');
          }
          return res.json();
        }).then((res) => {
          setStats((prev) => ({ ...prev, [item.address]: res }));
        }).catch((error) => {
          console.error(error);
        });
      }
    }
  }, [data]);

  return data && data.map((item: Spacemeshv2alpha1Account) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        <Link to={`/${ACCOUNTS}/${item.address}`}>
          {shortFormHash(item.address)}
        </Link>
      </div>
      <div className="td">
        {stats[item.address] ? formatSmidge(stats[item.address].sent) : <Loader size={20} />}
      </div>
      <div className="td">
        {stats[item.address] ? formatSmidge(stats[item.address].received) : <Loader size={20} />}
      </div>
      <div className="td">
        <CustomTimeAgo time={store.layerTimestamp(item.current.layer)} />
      </div>
      <div className="td">
        {formatSmidge(item.current.balance)}
      </div>
    </div>
  ));
};

export default observer(AccountsRow);
