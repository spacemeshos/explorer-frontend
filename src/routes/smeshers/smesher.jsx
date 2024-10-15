import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Spacemeshv2alpha1MalfeasanceProof } from 'api';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import {
  ACCOUNTS, ATXS, REWARDS, SMESHER,
} from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import longFormHash from '../../helper/longFormHash';
import Loader from '../../components/Loader';
import {
  byteConverter, formatSmidge, hexToBase64,
} from '../../helper/converter';
import CopyButton from '../../components/CopyButton';
import MalfeasanceBlock from '../../components/MalfeasanceBlock';
import Table from '../../components/Table';

const Smesher = () => {
  const store = useStore();
  const params = useParams();

  const [data, setData] = useState();
  const [error, setError] = useState();
  const [proofs: Array<Spacemeshv2alpha1MalfeasanceProof>, setProofs] = useState([]);

  if (error) throw error;

  useEffect(() => {
    if (store.statsApiUrl === null) return;
    fetch(`${store.statsApiUrl}/smesher/${params.id}`).then(async (res) => {
      if (res.status === 429) {
        store.showThrottlePopup();
        throw new Error('Too Many Requests');
      }
      if (res.ok) {
        const r = await res.json();
        setData(r);
      } else {
        throw new Error();
      }
    }).catch((err) => {
      if (err.message === 'Too Many Requests') return;
      const err2 = new Error('Smesher not found');
      err2.id = params.id;
      setError(err2);
    });
  }, [store.statsApiUrl, params.id]);

  useEffect(() => {
    if (store.netInfo === null || store.api.malfeasance === null) return;
    store.api.malfeasance.malfeasanceServiceList({
      smesherId: [hexToBase64(params.id)],
      limit: 100,
    }).then((res) => {
      console.log(res);
      setProofs(res.proofs);
    }).catch((err) => {
      if (err.status === 429) {
        store.showThrottlePopup();
      }
    });
  }, [store.netInfo, store.api.malfeasance, params.id]);

  return (
    <>
      {data ? (
        <>
          {proofs.length > 0 && proofs.map((item) => (
            <MalfeasanceBlock
              key={`proof-${nanoid()}`}
              proof={item}
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
              number={data?.atxs}
              unit="atxs"
              disableRightColumnData
            />
          </div>
          <div className="details" style={{ marginBottom: '20px' }}>
            <ul className="details-list">
              <li className="item">
                <span className="item-name">Id</span>
                <span className="item-value">
                  {params.id}
                  <CopyButton value={params.id} />
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
                  {byteConverter(data.num_units * store.postUnitSize)}
                </span>
              </li>
              <li className="item">
                <span className="item-name">Reward</span>
                <span className="item-value">
                  <Link to={`/${SMESHER}/${params.id}/${REWARDS}`}>
                    {data.rewards_count}
                    {' '}
                    (
                    {formatSmidge(data.rewards_sum)}
                    )
                  </Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Activations</span>
                <span className="item-value">
                  {data.atxs}
                </span>
              </li>
            </ul>
          </div>
          <div className="details">
            <TitleBlock
              title="Activations"
              color={getColorByPageName(SMESHER)}
              desc="smesher activations"
            />
            <Table name={SMESHER} subPage={ATXS} id={params.id} key={params.id} />
          </div>
        </>
      ) : (<Loader size={100} />)}
    </>
  );
};

export default observer(Smesher);
