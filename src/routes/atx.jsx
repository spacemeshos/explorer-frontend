import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Spacemeshv2alpha1Activation } from 'api';
import TitleBlock from '../components/TitleBlock';
import { getColorByPageName } from '../helper/getColorByPageName';
import {
  ACCOUNTS, ATXS, EPOCHS, SMESHER,
} from '../config/constants';
import { useStore } from '../store';
import longFormHash from '../helper/longFormHash';
import Loader from '../components/Loader';
import {
  base64ToHex, byteConverter, hexToBase64,
} from '../helper/converter';
import CopyButton from '../components/CopyButton';
import CountAtxBlock from '../components/CountBlock/CountAtxBlock';

const Atx = () => {
  const store = useStore();
  const params = useParams();

  const [data: Spacemeshv2alpha1Activation, setData] = useState();
  const [cSize, setCSize] = useState({ value: 0, unit: '' });
  const [error, setError] = useState();
  if (error) throw error;

  useEffect(() => {
    store.api.activation.activationServiceList({
      id: [hexToBase64(params.id)],
      limit: 1,
    }).then((res) => {
      if (res.activations.length === 0) {
        throw new Error();
      }
      setData(res.activations[0]);
      if (res.activations[0] !== undefined) {
        setCSize(byteConverter(res.activations[0].numUnits * store.postUnitSize, true));
      }
    }).catch(() => {
      const err = new Error('Activation not found');
      err.id = params.id;
      setError(err);
    });
  }, [store.netInfo, params.id]);

  if (!data || store.netInfo === null) {
    return <Loader size={100} />;
  }

  return (
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
          startTime={store.layerTimestamp(data.publishEpoch * store.netInfo.layersPerEpoch)}
          color={getColorByPageName(ATXS, store.theme)}
        />
      </div>
      <div className="details">
        <ul className="details-list">
          <li className="item">
            <span className="item-name">Activation Id</span>
            <span className="item-value">
              {base64ToHex(data.id)}
              <CopyButton value={base64ToHex(data.id)} />
            </span>
          </li>
          <li className="item">
            <span className="item-name">Smesher</span>
            <span className="item-value">
              <Link to={`/${SMESHER}/${base64ToHex(data.smesherId)}`}>
                {base64ToHex(data.smesherId)}
              </Link>
              <CopyButton value={base64ToHex(data.smesherId)} />
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
              <Link to={`/${EPOCHS}/${data.publishEpoch + 1}`}>
                {data.publishEpoch + 1}
              </Link>
            </span>
          </li>
          <li className="item">
            <span className="item-name">Commitment size</span>
            <span className="item-value">
              {cSize.value}
              {' '}
              {cSize.unit}
            </span>
          </li>
          <li className="item">
            <span className="item-name">Weight</span>
            <span className="item-value">{data.weight}</span>
          </li>
          <li className="item">
            <span className="item-name">Height</span>
            <span className="item-value">{data.height}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default observer(Atx);
