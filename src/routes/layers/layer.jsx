import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import {
  BLOCKS, EPOCHS, LAYERS, REWARDS, SMESHER, TXNS,
} from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import { fetchAPI } from '../../api/fetchAPI';
import Loader from '../../components/Loader';
import { formatSmidge, parseSmidge } from '../../helper/converter';
import CopyButton from '../../components/CopyButton';
import CustomTimeAgo from '../../components/CustomTimeAgo';
import { fullDate } from '../../helper/formatter';

const Layer = () => {
  const store = useStore();
  const params = useParams();

  const [data, setData] = useState({});
  const [rewards, setRewards] = useState({});

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${LAYERS}/${params.id}`).then((res) => {
      setData(res.data[0]);
      setRewards(parseSmidge(res.data[0].rewards));
    });
  }, [store.network.value]);

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
              coins={data && data.rewards}
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
                  <CustomTimeAgo time={data.start} />
                  {` ${fullDate(data.start)}`}
                </span>
              </li>
              <li className="item">
                <span className="item-name">End Timestamp</span>
                <span className="item-value">
                  <CustomTimeAgo time={data.end} />
                  {` ${fullDate(data.end)}`}
                </span>
              </li>
              <li className="item">
                <span className="item-name">Transactions</span>
                <span className="item-value">
                  <Link to={`/${LAYERS}/${data.number}/${TXNS}`}>{data.txs}</Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Rewards </span>
                <span className="item-value">
                  <Link to={`/${LAYERS}/${data.number}/${REWARDS}`}>
                    {formatSmidge(data.rewards)}
                  </Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Confidence</span>
                <span className="item-value">--</span>
              </li>
              <li className="item">
                <span className="item-name">Epoch</span>
                <span className="item-value">
                  <Link to={`/${EPOCHS}/${data.epoch}`}>{data.epoch}</Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Smeshers</span>
                <span className="item-value">
                  <Link to={`/${LAYERS}/${data.number}/${SMESHER}`}>{data.smeshers}</Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Hash</span>
                <span className="item-value">
                  {data.hash}
                  <CopyButton value={data.hash} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Blocks</span>
                <span className="item-value">
                  <Link to={`/${LAYERS}/${data.number}/${BLOCKS}`}>{data.blocksnumber}</Link>
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
