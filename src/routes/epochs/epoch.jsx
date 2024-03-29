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
import { fetchAPI } from '../../api/fetchAPI';
import Loader from '../../components/Loader';
import { formatSmidge } from '../../helper/converter';
import CustomTimeAgo from '../../components/CustomTimeAgo';
import { fullDate } from '../../helper/formatter';
import getValueFromStatsObject from '../../helper/getValueFromStatsObject';

const Epoch = () => {
  const store = useStore();
  const name = EPOCHS;
  const params = useParams();

  const [data, setData] = useState();
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${name}/${params.id}`).then((res) => {
      setData(res.data[0]);
      setStats(getValueFromStatsObject(res.data[0].stats));
    });
  }, [store.network.value]);

  return (
    <>
      {data ? (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Epoch ${params.id}`}
              color={getColorByPageName(name)}
              desc="Epoch details"
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={data.layers}
              unit="layers"
              startTime={data.start}
            />
          </div>
          <div className="details">
            <ul className="details-list">
              <li className="item">
                <span className="item-name">Number</span>
                <span className="item-value">{data.number}</span>
              </li>
              <li className="item">
                <span className="item-name">Started</span>
                <span className="item-value">
                  <CustomTimeAgo time={data.start} />
                  {`${fullDate(data.start)}`}
                </span>
              </li>
              <li className="item">
                <span className="item-name">{ Math.floor(Date.now() / 1000) > data.end ? 'Ended' : 'Ends'}</span>
                <span className="item-value">
                  <CustomTimeAgo time={data.end} />
                  {`${fullDate(data.end)}`}
                </span>
              </li>
              <li className="item">
                <span className="item-name">Layers</span>
                <span className="item-value">
                  <Link to={`/${EPOCHS}/${data.number}/${LAYERS}`}>{data.layers}</Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Rewards</span>
                <span className="item-value">
                  <Link to={`/${EPOCHS}/${data.number}/${REWARDS}`}>
                    {`${stats.rewardsnumber} (${formatSmidge(stats.rewards)})`}
                  </Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Smeshers</span>
                <span className="item-value">
                  <Link to={`/${EPOCHS}/${data.number}/${SMESHER}`}>{stats.smeshers}</Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Transactions</span>
                <span className="item-value">
                  <Link to={`/${EPOCHS}/${data.number}/${TXNS}`}>{stats.transactions}</Link>
                </span>
              </li>
            </ul>
          </div>
        </>
      ) : (<Loader size={100} />)}
    </>
  );
};

export default observer(Epoch);
