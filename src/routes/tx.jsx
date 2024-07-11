import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TitleBlock from '../components/TitleBlock';
import { getColorByPageName } from '../helper/getColorByPageName';
import {
  ACCOUNTS, LAYERS, TXNS,
} from '../config/constants';
import { useStore } from '../store';
import { fetchAPI } from '../api/fetchAPI';
import longFormHash from '../helper/longFormHash';
import { CountTxnsBlock } from '../components/CountBlock';
import TxnsStatus from '../components/TxnsStatus';
import Loader from '../components/Loader';
import { formatSmidge, parseSmidge } from '../helper/converter';
import CopyButton from '../components/CopyButton';
import { typeOfTransaction } from '../helper/tx';
import CustomTimeAgo from '../components/CustomTimeAgo';
import { fullDate } from '../helper/formatter';

const Tx = () => {
  const store = useStore();
  const name = TXNS;
  const params = useParams();

  const [data, setData] = useState();
  const [smidge, setSmidge] = useState({ value: 0, unit: 'SMH' });

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${name}/${params.id}`).then((res) => {
      setData(res.data[0]);
      setSmidge(parseSmidge(res.data[0].amount));
    });
  }, [store.network.value, params.id]);

  return (
    <>
      {data ? (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Transaction details"
              color={getColorByPageName(name)}
              desc={`${longFormHash(params.id)}`}
            />
            <CountTxnsBlock
              badgeType="coin"
              amount={smidge.value}
              unit={smidge.unit}
              startTime={data && data.timestamp}
              color={getColorByPageName(name)}
            />
          </div>
          <TxnsStatus state={data.state} result={data.result} message={data.message} />
          <div className="details">
            <ul className="details-list">
              <li className="item">
                <span className="item-name">ID</span>
                <span className="item-value">
                  {data.id}
                  <CopyButton value={data.id} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Type</span>
                <span className="item-value">{typeOfTransaction(data.type)}</span>
              </li>
              <li className="item">
                <span className="item-name">To</span>
                <span className="item-value">
                  <Link to={`/${ACCOUNTS}/${data.receiver}`}>{data.receiver}</Link>
                  <CopyButton value={data.receiver} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">From</span>
                <span className="item-value">
                  <Link to={`/${ACCOUNTS}/${data.sender}`}>{data.sender}</Link>
                  <CopyButton value={data.sender} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Timestamp</span>
                <span className="item-value">
                  <CustomTimeAgo time={data.timestamp} />
                                    &nbsp;
                  {`${fullDate(data.timestamp)}`}
                </span>
              </li>
              <li className="item">
                <span className="item-name">Layer</span>
                <span className="item-value">
                  <Link to={`/${LAYERS}/${data.layer}`}>{data.layer}</Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Value</span>
                <span className="item-value">{formatSmidge(data.amount)}</span>
              </li>
              <li className="item">
                <span className="item-name">Counter</span>
                <span className="item-value">{data.counter}</span>
              </li>
              <li className="item">
                <span className="item-name">Fee</span>
                <span className="item-value">{formatSmidge(data.fee)}</span>
              </li>
              <li className="item">
                <span className="item-name">Block</span>
                <span className="item-value">
                  <Link to={`/${LAYERS}/${data.layer}/blocks`}>{data.block}</Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Position in block</span>
                <span className="item-value">{data.blockIndex}</span>
              </li>
              {data.type === 7 && (
                <li className="item">
                  <span className="item-name">Vault</span>
                  <span className="item-value">
                    <Link to={`/${ACCOUNTS}/${data.vault}`}>{data.vault}</Link>
                    <CopyButton value={data.vault} />
                  </span>
                </li>
              )}
            </ul>
          </div>
        </>
      ) : (<Loader size={100} />)}
    </>
  );
};

export default observer(Tx);
