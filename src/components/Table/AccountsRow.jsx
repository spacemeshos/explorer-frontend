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
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (data && data.length > 0) {
        setIsFetching(true);
        try {
          const promises = data.map(async (item) => {
            const response = await fetch(`${store.statsApiUrl}/stats/account/${item.address}`);
            if (!response.ok) {
              throw new Error(`Error fetching data for item ${item.address}`);
            }
            const res = await response.json();
            return { [item.address]: res };
          });

          const allStats = await Promise.all(promises);
          const combinedStats = allStats.reduce((acc, result) => ({ ...acc, ...result }), {});
          setStats(combinedStats);
        } catch (error) {
          console.error(error);
        } finally {
          setIsFetching(false);
        }
      }
    };
    fetchData();
  }, [data]);

  if (isFetching) {
    return <Loader size={100} />;
  }

  return data && data.map((item: Spacemeshv2alpha1Account) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        <Link to={`/${ACCOUNTS}/${item.address}`}>
          {shortFormHash(item.address)}
        </Link>
      </div>
      <div className="td">
        {stats[item.address] ? formatSmidge(stats[item.address].sent) : '---'}
      </div>
      <div className="td">
        {stats[item.address] ? formatSmidge(stats[item.address].received) : '---'}
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
