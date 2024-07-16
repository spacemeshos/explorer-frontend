// @flow
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  EPOCHS,
  LAYERS, REWARDS, SMESHER,
  TXNS,
} from '../../config/constants';
import CustomTimeAgo from '../CustomTimeAgo';
import { useStore } from '../../store';
import Loader from '../Loader';
import { formatSmidge } from '../../helper/converter';

const EpochsRow = ({ data }) => {
  const store = useStore();

  const [stats, setStats] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (data && data.length > 0) {
        setIsFetching(true);
        try {
          const promises = data.map(async (item) => {
            const response = await fetch(`${store.statsApiUrl}/stats/epoch/${item.number}`);
            if (!response.ok) {
              throw new Error(`Error fetching data for item ${item.number}`);
            }
            const res = await response.json();
            return { [item.number]: res };
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

  return data && data.map((item) => {
    const futureEpoch = store.layerTimestamp(item.startLayer) * 1000 > Date.now();
    return (
      <div key={nanoid()} className={`tr ${futureEpoch ? 'futureEpoch' : ''}`}>
        <div className="td">
          <Link to={`/${EPOCHS}/${item.number}`}>
            {item.number}
          </Link>
        </div>
        <div className="td">
          <CustomTimeAgo time={store.layerTimestamp(item.startLayer)} />
        </div>
        <div className="td">
          <Link to={`/${EPOCHS}/${item.number}/${LAYERS}`}>{item.layers}</Link>
        </div>
        <div className="td">
          <Link to={`/${EPOCHS}/${item.number}/${TXNS}`}>{stats[item.number].transactions_count}</Link>
        </div>
        <div className="td">
          <Link to={`/${EPOCHS}/${item.number}/${SMESHER}`}>{stats[item.number].activations_count}</Link>
        </div>
        <div className="td" style={{ flexGrow: 2 }}>
          <Link to={`/${EPOCHS}/${item.number}/${REWARDS}`}>
            {formatSmidge(stats[item.number].rewards_sum)}
          </Link>
        </div>
      </div>
    );
  });
};

export default observer(EpochsRow);
