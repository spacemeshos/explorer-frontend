import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import {
  ACCOUNTS, ATXS, REWARDS, SMESHER,
} from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import { fetchAPI } from '../../api/fetchAPI';
import longFormHash from '../../helper/longFormHash';
import Loader from '../../components/Loader';
import { byteConverter, formatSmidge } from '../../helper/converter';
import CopyButton from '../../components/CopyButton';
import MalfeasanceBlock from '../../components/MalfeasanceBlock';

const Smesher = () => {
  const store = useStore();
  const params = useParams();

  const [data, setData] = useState();

  const [error, setError] = useState();
  if (error) throw error;

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${SMESHER}/${params.id}`).then((res) => {
      if (res.data) {
        setData(res.data[0]);
      } else {
        const err = new Error('Not found');
        err.id = params.id;
        setError(err);
      }
    });
  }, [store.network.value, params.id]);

  return (
    <>
      {data ? (
        <>
          {data.proofs && data.proofs.length > 0 && data?.proofs.map((item) => (
            <MalfeasanceBlock
              key={`proof-${nanoid()}`}
              layer={item.layer}
              kind={item.kind}
            />
          ))}
          <div className="page-wrap">
            <TitleBlock
              title={`Smesher ${longFormHash(params.id)}`}
              color={getColorByPageName(SMESHER)}
              desc="Details"
            />
            <RightSideBlock
              color={getColorByPageName(SMESHER, store.theme)}
              number={data?.atxcount}
              unit="atxs"
              startTime={data?.timestamp}
            />
          </div>
          <div className="details">
            <ul className="details-list">
              <li className="item">
                <span className="item-name">Id</span>
                <span className="item-value">
                  {data.id}
                  <CopyButton value={data.id} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Rewards Account</span>
                <span className="item-value">
                  <Link to={`/${ACCOUNTS}/${data.coinbase}`}>
                    {data.coinbase}
                  </Link>
                  <CopyButton value={data.coinbase} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Space</span>
                <span className="item-value">
                  {byteConverter(data.cSize)}
                </span>
              </li>
              <li className="item">
                <span className="item-name">Reward</span>
                <span className="item-value">
                  <Link to={`/${SMESHER}/${data.id}/${REWARDS}`}>{formatSmidge(data.rewards)}</Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Activations</span>
                <span className="item-value">
                  <Link to={`/${SMESHER}/${data.id}/${ATXS}`}>{data.atxcount}</Link>
                </span>
              </li>
            </ul>
          </div>
        </>
      ) : (<Loader size={100} />)}
    </>
  );
};

export default observer(Smesher);
