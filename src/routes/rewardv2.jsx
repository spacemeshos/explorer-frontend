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
import { fetchAPI } from '../api/fetchAPI';
import longFormHash from '../helper/longFormHash';
import Loader from '../components/Loader';
import {
  byteConverter, formatSmidge, parseSmidge,
} from '../helper/converter';
import CopyButton from '../components/CopyButton';
import CustomTimeAgo from '../components/CustomTimeAgo';
import { fullDate } from '../helper/formatter';

const RewardV2 = () => {
  const store = useStore();
  const { network } = store.networkInfo;
  const name = REWARDS;
  const params = useParams();

  const [data, setData] = useState();
  const [smidge, setSmidge] = useState({ value: 0, unit: 'SMH' });

  const [error, setError] = useState();
  if (error) throw error;

  useEffect(() => {
    if (store.network.value === null) return;
    if (!params.smesherId.startsWith('0x')) {
      const err = new Error('Smesher ID should start with \'0x\'');
      err.id = params.smesherId;
      setError(err);
    }

    fetchAPI(`${store.network.value}v2/${name}/${params.smesherId}/${params.layer}`).then((res) => {
      if (res.data) {
        setData(res.data[0]);
        setSmidge(parseSmidge(res.data[0].total));
      } else {
        const err = new Error('Not found');
        err.id = params.smesherId;
        setError(err);
      }
    }).catch(() => {
      const err = new Error('Not found');
      err.id = params.smesherId;
      setError(err);
    });
  }, [store.network.value, params.smesherId, params.layer]);

  return (
    <>
      {data ? (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Reward ${longFormHash(data._id)}`}
              color={getColorByPageName(name)}
              desc="Details"
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={smidge?.value}
              unit={smidge?.unit}
              startTime={network?.genesis}
            />
          </div>
          <div className="details">
            <ul className="details-list">
              <li className="item">
                <span className="item-name">Id</span>
                <span className="item-value">
                  {data._id}
                  <CopyButton value={data._id} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Timestamp</span>
                <span className="item-value">
                  <CustomTimeAgo time={data.timestamp} />
                  {fullDate(data.timestamp)}
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
                  <Link to={`/${SMESHER}/${data.smesher}`}>
                    {data.smesher}
                  </Link>
                  <CopyButton value={data.smesher} />
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
                <span className="item-name">Block Reward</span>
                <span className="item-value">{formatSmidge(data.total)}</span>
              </li>
              <li className="item">
                <span className="item-name">Space</span>
                <span className="item-value">{byteConverter(data.space)}</span>
              </li>
            </ul>
          </div>
        </>
      ) : (<Loader size={100} />)}
    </>
  );
};

export default observer(RewardV2);
