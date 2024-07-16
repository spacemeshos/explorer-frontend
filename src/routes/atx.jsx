import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TitleBlock from '../components/TitleBlock';
import { getColorByPageName } from '../helper/getColorByPageName';
import {
  ACCOUNTS, ATXS, EPOCHS, SMESHER,
} from '../config/constants';
import { useStore } from '../store';
import longFormHash from '../helper/longFormHash';
import Loader from '../components/Loader';
import { byteConverter, hexToBase64 } from '../helper/converter';
import CopyButton from '../components/CopyButton';
import CountAtxBlock from '../components/CountBlock/CountAtxBlock';

const Atx = () => {
  const store = useStore();
  const params = useParams();

  const [data, setData] = useState();
  const [cSize, setCSize] = useState({ value: 0, unit: '' });

  useEffect(() => {
    store.api.activation.activationServiceList({
      id: [hexToBase64(params.id)],
      limit: 1,
    }).then((res) => {
      setData(res.activations[0]);
      // setCSize(byteConverter(res.data[0]?.commitmentSize, true));
      setCSize(0);
    });
  }, [store.netInfo, params.id]);

  return (
    <>
      {data ? (
        <>
          <div className="page-wrap">
            <TitleBlock
              title={`Activation ${longFormHash(params.id)}`}
              color={getColorByPageName(ATXS)}
              desc="Details"
            />
            <CountAtxBlock
              badgeType="atx"
              amount={cSize.value}
              unit={cSize.unit}
              startTime={data && data.received}
              color={getColorByPageName(ATXS, store.theme)}
            />
          </div>
          <div className="details">
            <ul className="details-list">
              <li className="item">
                <span className="item-name">Activation Id</span>
                <span className="item-value">
                  {data.id}
                  <CopyButton value={data.id} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Smesher</span>
                <span className="item-value">
                  <Link to={`/${SMESHER}/${data.smesher}`}>
                    {data.smesher}
                  </Link>
                  <CopyButton value={data.smesher} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Rewards Account</span>
                <span className="item-value">
                  <Link to={`/${ACCOUNTS}/${data.coinbase}`}>{data.coinbase}</Link>
                  <CopyButton value={data.coinbase} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Target Epoch</span>
                <span className="item-value">
                  <Link to={`/${EPOCHS}/${data.targetEpoch}`}>
                    {data.targetEpoch}
                  </Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Commitment size</span>
                <span className="item-value">{byteConverter(data.commitmentSize)}</span>
              </li>
              <li className="item">
                <span className="item-name">Tick count</span>
                <span className="item-value">{data.tickCount}</span>
              </li>
              <li className="item">
                <span className="item-name">Previous Activation</span>
                <span className="item-value">
                  <Link to={`/${ATXS}/${data.prevAtx}`}>
                    {data.prevAtx}
                  </Link>
                  <CopyButton value={data.prevAtx} />
                </span>
              </li>
            </ul>
          </div>
        </>
      ) : (<Loader size={100} />)}
    </>
  );
};

export default observer(Atx);
