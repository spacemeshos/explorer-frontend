// @flow
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react';

import { Link } from 'react-router-dom';
import { Spacemeshv2alpha1Layer } from 'api';
import { useEffect, useState } from 'react';
import {
  LAYERS,
  TXNS, REWARDS,
} from '../../config/constants';
import CustomTimeAgo from '../CustomTimeAgo';
import { useStore } from '../../store';
import { formatSmidge } from '../../helper/converter';
import Loader from '../Loader';

type Props = {
  data: Spacemeshv2alpha1Layer[],
}
const LayersRow = ({ data }: Props) => {
  const store = useStore();

  const [stats, setStats] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (data && data.length > 0) {
        setIsFetching(true);
        try {
          const promises = data.map(async (item) => {
            const response = await fetch(`${store.statsApiUrl}/stats/layer/${item.number}`);
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

  return data && data.map((item: Spacemeshv2alpha1Layer) => (
    <div key={nanoid()} className="tr">
      <div className="td">
        <Link to={`/${LAYERS}/${item.number}`}>
          {item.number}
        </Link>
      </div>
      <div className="td">
        <CustomTimeAgo time={store.layerTimestamp(item.number)} />
      </div>
      <div className="td">
        <Link to={`/${LAYERS}/${item.number}/${TXNS}`}>
          {`${stats[item.number].transactions_count} Transactions (${formatSmidge(stats[item.number].transactions_sum)})`}
        </Link>
      </div>
      <div className="td">
        <Link to={`/${LAYERS}/${item.number}/${REWARDS}`}>
          {formatSmidge(stats[item.number].rewards_sum)}
        </Link>
      </div>
    </div>
  ));
};

export default observer(LayersRow);
