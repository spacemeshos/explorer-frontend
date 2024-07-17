// @flow
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Spacemeshv2alpha1Layer } from 'api';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import {
  EPOCHS, LAYERS, REWARDS, TXNS,
} from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Loader from '../../components/Loader';
import {
  base64ToHex, calculateEpoch, formatSmidge, parseSmidge,
} from '../../helper/converter';
import CopyButton from '../../components/CopyButton';
import CustomTimeAgo from '../../components/CustomTimeAgo';
import { fullDate } from '../../helper/formatter';

const Layer = () => {
  const { api, netInfo, layerTimestamp, layerEndTimestamp, statsApiUrl } = useStore();
  const params = useParams();

  const [data, setData] = useState<Spacemeshv2alpha1Layer>();
  const [epoch, setEpoch] = useState(0);
  const [rewards, setRewards] = useState({});
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (netInfo === null) return;
    api.layer.layerServiceList({
      startLayer: params.id,
      endLayer: params.id,
      limit: 1,
    }).then((res) => {
      setData(res.layers[0]);
      setEpoch(calculateEpoch(res.layers[0].number, netInfo.layersPerEpoch));
    });
  }, [params.id, netInfo]);

  useEffect(() => {
    fetch(`${statsApiUrl}/stats/layer/${params.id}`).then((res) => res.json()).then((res) => {
      setStats(res);
      setRewards(parseSmidge(res.rewards_sum));
    });
  }, [params.id]);

  return (
    <>
      {data ? (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Layer ${params.id}`}
              color={getColorByPageName(LAYERS)}
              desc="Layer details"
            />
            <RightSideBlock
              color={getColorByPageName(LAYERS)}
              number={rewards.value}
              unit={rewards.unit}
              coinCaption="Rewards"
              coins={stats.rewards_sum}
            />
          </div>
          <div className="details">
            <ul className="details-list">
              <li className="item">
                <span className="item-name">Number</span>
                <span className="item-value">{data.number}</span>
              </li>
              <li className="item">
                <span className="item-name">Start Timestamp</span>
                <span className="item-value">
                  <CustomTimeAgo time={layerTimestamp(data.number)} />
                  {` ${fullDate(layerTimestamp(data.number))}`}
                </span>
              </li>
              <li className="item">
                <span className="item-name">End Timestamp</span>
                <span className="item-value">
                  <CustomTimeAgo time={layerEndTimestamp(data.number)} />
                  {` ${fullDate(layerEndTimestamp(data.number))}`}
                </span>
              </li>
              <li className="item">
                <span className="item-name">Transactions</span>
                <span className="item-value">
                  <Link to={`/${LAYERS}/${data.number}/${TXNS}`}>{stats.transactions_count}</Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Rewards</span>
                <span className="item-value">
                  <Link to={`/${LAYERS}/${data.number}/${REWARDS}`}>
                    {formatSmidge(stats.rewards_sum)}
                  </Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Epoch</span>
                <span className="item-value">
                  <Link to={`/${EPOCHS}/${epoch}`}>{epoch}</Link>
                </span>
              </li>
              {/* <li className="item"> */}
              {/*  <span className="item-name">Smeshers</span> */}
              {/*  <span className="item-value"> */}
              {/*    <Link to={`/${LAYERS}/${data.number}/${SMESHER}`}>{data.smeshers}</Link> */}
              {/*  </span> */}
              {/* </li> */}
              <li className="item">
                <span className="item-name">Hash</span>
                <span className="item-value">
                  {base64ToHex(data.cumulativeStateHash)}
                  <CopyButton value={data.stateHash} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Block</span>
                <span className="item-value">
                  {base64ToHex(data.block?.id)}
                </span>
              </li>
            </ul>
          </div>
        </>
      ) : (<Loader size={100} />)}
    </>
  );
};

export default observer(Layer);
