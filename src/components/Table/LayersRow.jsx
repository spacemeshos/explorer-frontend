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

  useEffect(() => {
    if (data && data.length > 0) {
      for (const item of data) {
        fetch(`${store.statsApiUrl}/layer/${item.number}`).then((res) => {
          if (res.status === 429) {
            store.showThrottlePopup();
            throw new Error('Too Many Requests');
          }
          return res.json();
        }).then((res) => {
          setStats((prev) => ({ ...prev, [item.number]: res }));
        }).catch((error) => {
          console.error(error);
        });
      }
    }
  }, [data]);

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
          { stats[item.number] ? (
            `${stats[item.number].transactions_count} Transactions (${formatSmidge(stats[item.number].transactions_sum)})`
          ) : <Loader size={20} /> }
        </Link>
      </div>
      <div className="td">
        <Link to={`/${LAYERS}/${item.number}/${REWARDS}`}>
          {stats[item.number] ? formatSmidge(stats[item.number].rewards_sum) : <Loader size={20} />}
        </Link>
      </div>
    </div>
  ));
};

export default observer(LayersRow);
