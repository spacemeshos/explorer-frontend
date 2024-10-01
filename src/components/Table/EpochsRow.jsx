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
import { formatSmidge } from '../../helper/converter';
import Loader from '../Loader';

const EpochsRow = ({ data }) => {
  const store = useStore();

  const [stats, setStats] = useState({});

  useEffect(() => {
    if (data && data.length > 0) {
      for (const item of data) {
        fetch(`${store.statsApiUrl}/epoch/${item.number}`).then((res) => res.json()).then((res) => {
          setStats((prev) => ({ ...prev, [item.number]: res }));
        }).catch((error) => {
          console.error(error);
        });
      }
    }
  }, [data]);

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
          <Link to={`/${EPOCHS}/${item.number}/${TXNS}`}>
            {stats[item.number] ? stats[item.number]?.transactions_count || 0 : <Loader size={20} />}
          </Link>
        </div>
        <div className="td">
          <Link to={`/${EPOCHS}/${item.number}/${SMESHER}`}>
            {stats[item.number] ? stats[item.number]?.activations_count || 0 : <Loader size={20} />}
          </Link>
        </div>
        <div className="td" style={{ flexGrow: 2 }}>
          <Link to={`/${EPOCHS}/${item.number}/${REWARDS}`}>
            {stats[item.number] ? formatSmidge(stats[item.number].rewards_sum || 0) : <Loader size={20} />}
          </Link>
        </div>
      </div>
    );
  });
};

export default observer(EpochsRow);
