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
import longFormHash from '../../helper/longFormHash';
import Loader from '../../components/Loader';
import { byteConverter, formatSmidge } from '../../helper/converter';
import CopyButton from '../../components/CopyButton';
import MalfeasanceBlock from '../../components/MalfeasanceBlock';
import Table from '../../components/Table';

const Smesher = () => {
  const store = useStore();
  const params = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${store.statsApiUrl}/smesher/${params.id}`).then((res) => res.json()).then((res) => {
      setData(res);
    });
  }, [params.id]);

  return (
    <>
      {data ? (
        <>
          {data.proofs && data.proofs.length > 0 && data?.proofs.map((item) => (
            <MalfeasanceBlock
              key={`proof-${nanoid()}`}
              layer={item.layer}
              kind={item.kind}
              debugInfo={item.debugInfo}
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
              startTime={0}
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
