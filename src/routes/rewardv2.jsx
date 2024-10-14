import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TitleBlock from '../components/TitleBlock';
import { getColorByPageName } from '../helper/getColorByPageName';
import {
  ACCOUNTS, LAYERS, REWARDS, SMESHER,
} from '../config/constants';
import RightSideBlock from '../components/CountBlock/RightSideBlock';
import { useStore } from '../store';
import Loader from '../components/Loader';
import {
  formatSmidge, hexToBase64, parseSmidge,
} from '../helper/converter';
import CopyButton from '../components/CopyButton';
import CustomTimeAgo from '../components/CustomTimeAgo';
import { fullDate } from '../helper/formatter';
import shortFormHash from '../helper/shortFormHash';

const RewardV2 = () => {
  const store = useStore();
  const name = REWARDS;
  const params = useParams();

  const [data, setData] = useState();
  const [smidge, setSmidge] = useState({ value: 0, unit: 'SMH' });

  const [error, setError] = useState();
  if (error) throw error;

  useEffect(() => {
    if (store.netInfo === null) return;
    if (!params.smesherId.startsWith('0x')) {
      const err = new Error('Smesher ID should start with \'0x\'');
      err.id = params.smesherId;
      setError(err);
    }

    const layerNum = parseInt(params.layer, 10);
    if (Number.isNaN(layerNum) || layerNum < 0) {
      const err = new Error('Invalid layer number');
      err.id = params.layer;
      setError(err);
      return;
    }

    store.api.reward.rewardServiceList({
      smesher: hexToBase64(params.smesherId),
      startLayer: params.layer,
      endLayer: params.layer,
      limit: 1,
    }).then((res) => {
      setData(res.rewards[0]);
      setSmidge(parseSmidge(res.rewards[0].layerReward));
    }).catch((err) => {
      if (err.status === 429) {
        store.showThrottlePopup();
        return;
      }
      const err2 = new Error('Not found');
      err2.id = params.smesherId;
      setError(err2);
    });
  }, [store.netInfo, params.smesherId, params.layer]);

  if (!data) {
    return <Loader size={100} />;
  }

  return (
    <>
      <>
        <div className="page-wrap">
          <TitleBlock
            title={`Reward layer ${params.layer} smesher ${shortFormHash(params.smesherId)}`}
            color={getColorByPageName(name)}
            desc="Details"
          />
          <RightSideBlock
            color={getColorByPageName(name)}
            number={smidge?.value}
            unit={smidge?.unit}
            startTime={store.layerTimestamp(data.layer)}
          />
        </div>
        <div className="details">
          <ul className="details-list">
            <li className="item">
              <span className="item-name">Timestamp</span>
              <span className="item-value">
                <CustomTimeAgo time={store.layerTimestamp(data.layer)} />
                {fullDate(store.layerTimestamp(data.layer))}
              </span>
            </li>
            <li className="item">
              <span className="item-name">Layer</span>
              <span className="item-value">
                <Link to={`/${LAYERS}/${data.layer}`}>
                  {data.layer}
                </Link>
              </span>
            </li>
            <li className="item">
              <span className="item-name">Smesher Id</span>
              <span className="item-value">
                <Link to={`/${SMESHER}/${params.smesherId}`}>
                  {params.smesherId}
                </Link>
                <CopyButton value={params.smesherId} />
              </span>
            </li>
            <li className="item">
              <span className="item-name">Account</span>
              <span className="item-value">
                <Link to={`/${ACCOUNTS}/${data.coinbase}`}>{data.coinbase}</Link>
                <CopyButton value={data.coinbase} />
              </span>
            </li>
            <li className="item">
              <span className="item-name">Layer Reward</span>
              <span className="item-value">{formatSmidge(data.total)}</span>
            </li>
          </ul>
        </div>
      </>
    </>
  );
};

export default observer(RewardV2);
