import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import {
  EPOCHS, LAYERS, REWARDS, SMESHER, TXNS,
} from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import { formatSmidge } from '../../helper/converter';
import CustomTimeAgo from '../../components/CustomTimeAgo';
import { fullDate } from '../../helper/formatter';

const Epoch = () => {
  const store = useStore();
  const name = EPOCHS;
  const params = useParams();

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (store.netInfo === null) return;
    fetch(`${store.statsApiUrl}/stats/epoch/${params.id}`).then((res) => res.json()).then((res) => {
      setStats(res);
    });

    const epochStart = params.id * store.netInfo.layersPerEpoch;
    setStart(epochStart);
    setEnd(epochStart + store.netInfo.layersPerEpoch - 1);
  }, [store.netInfo]);

  return (
    <>
      <>
        <div className="page-wrap">
          <TitleBlock
            title={`Epoch ${params.id}`}
            color={getColorByPageName(name)}
            desc="Epoch details"
          />
          <RightSideBlock
            color={getColorByPageName(name)}
            number={store.netInfo.layersPerEpoch}
            unit="layers"
            startTime={store.layerTimestamp(start)}
          />
        </div>
        <div className="details">
          <ul className="details-list">
            <li className="item">
              <span className="item-name">Number</span>
              <span className="item-value">{params.id}</span>
            </li>
            <li className="item">
              <span className="item-name">Started</span>
              <span className="item-value">
                <CustomTimeAgo time={store.layerTimestamp(start)} />
                {`${fullDate(store.layerTimestamp(start))}`}
              </span>
            </li>
            <li className="item">
              <span
                className="item-name"
              >
                {Math.floor(Date.now() / 1000) > store.layerEndTimestamp(end) ? 'Ended' : 'Ends'}
              </span>
              <span className="item-value">
                <CustomTimeAgo time={store.layerEndTimestamp(end)} />
                {`${fullDate(store.layerEndTimestamp(end))}`}
              </span>
            </li>
            <li className="item">
              <span className="item-name">Layers</span>
              <span className="item-value">
                <Link to={`/${EPOCHS}/${params.id}/${LAYERS}`}>{store.netInfo.layersPerEpoch}</Link>
              </span>
            </li>
            <li className="item">
              <span className="item-name">Rewards</span>
              <span className="item-value">
                <Link to={`/${EPOCHS}/${params.id}/${REWARDS}`}>
                  {`${stats.rewards_count} (${formatSmidge(stats.rewards_sum)})`}
                </Link>
              </span>
            </li>
            <li className="item">
              <span className="item-name">Smeshers</span>
              <span className="item-value">
                <Link to={`/${EPOCHS}/${params.id}/${SMESHER}`}>{stats.smeshers_count}</Link>
              </span>
            </li>
            <li className="item">
              <span className="item-name">Transactions</span>
              <span className="item-value">
                <Link to={`/${EPOCHS}/${params.id}/${TXNS}`}>{stats.transactions_count}</Link>
              </span>
            </li>
          </ul>
        </div>
      </>
    </>
  );
};

export default observer(Epoch);
