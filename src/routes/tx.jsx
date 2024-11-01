// @flow

import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { V2alpha1TransactionResponse } from 'api';
import TitleBlock from '../components/TitleBlock';
import { getColorByPageName } from '../helper/getColorByPageName';
import {
  ACCOUNTS, LAYERS, TXNS,
} from '../config/constants';
import { useStore } from '../store';
import longFormHash from '../helper/longFormHash';
import { CountTxnsBlock } from '../components/CountBlock';
import TxnsStatus from '../components/TxnsStatus';
import Loader from '../components/Loader';
import {
  base64ToHex,
  formatSmidge, hexToBase64, parseSmidge,
} from '../helper/converter';
import CopyButton from '../components/CopyButton';
import {
  amount, destination, typeOfTransaction,
} from '../helper/tx';
import CustomTimeAgo from '../components/CustomTimeAgo';
import { fullDate } from '../helper/formatter';

const Tx = () => {
  const store = useStore();
  const name = TXNS;
  const params = useParams();

  const [data, setData] = useState<V2alpha1TransactionResponse, Function>();
  const [smidge, setSmidge] = useState({ value: 0, unit: 'SMH' });
  const [error, setError] = useState();
  if (error) throw error;

  useEffect(() => {
    if (store.netInfo === null) return;
    store.api.transaction.transactionServiceList({
      txid: [hexToBase64(params.id)],
      limit: 1,
      includeResult: true,
      includeState: true,
    }).then((res) => {
      if (res.transactions.length === 0) {
        throw new Error();
      }
      const tx = res.transactions[0];
      setData(tx);
      setSmidge(parseSmidge(amount(tx)));
    }).catch((err) => {
      if (err.status === 429) {
        store.showThrottlePopup();
        return;
      }
      const err2 = new Error('Transaction not found');
      err2.id = params.id;
      setError(err2);
    });
  }, [params.id, store.netInfo]);

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
              startTime={data && store.layerTimestamp(data.txResult?.layer)}
              color={getColorByPageName(name)}
            />
          </div>
          <TxnsStatus state={data.txState} result={data.txResult?.status} message={data.txResult?.message} />
          <div className="details">
            <ul className="details-list">
              <li className="item">
                <span className="item-name">ID</span>
                <span className="item-value">
                  {params.id}
                  <CopyButton value={params.id} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Type</span>
                <span className="item-value">{typeOfTransaction(data.tx.type)}</span>
              </li>
              <li className="item">
                <span className="item-name">To</span>
                <span className="item-value">
                  <Link to={`/${ACCOUNTS}/${destination(data)}`}>
                    {destination(data)}
                  </Link>
                  <CopyButton value={destination(data)} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">From</span>
                <span className="item-value">
                  <Link to={`/${ACCOUNTS}/${data.tx.principal}`}>{data.tx.principal}</Link>
                  <CopyButton value={data.tx.principal} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Timestamp</span>
                { data.txResult?.layer ? (
                  <span className="item-value">
                    <CustomTimeAgo time={store.layerTimestamp(data.txResult.layer)} />
                    &nbsp;
                    {`${fullDate(store.layerTimestamp(data.txResult.layer))}`}
                  </span>
                ) : (<span className="item-value">-</span>)}
              </li>
              <li className="item">
                <span className="item-name">Layer</span>
                <span className="item-value">
                  { data.txResult?.layer ? (
                    <Link to={`/${LAYERS}/${data.txResult.layer}`}>{data.txResult.layer}</Link>
                  ) : ('-')}
                </span>
              </li>
              <li className="item">
                <span className="item-name">Value</span>
                <span className="item-value">{formatSmidge(amount(data))}</span>
              </li>
              <li className="item">
                <span className="item-name">Counter</span>
                <span className="item-value">{data.tx.nonce.counter}</span>
              </li>
              <li className="item">
                <span className="item-name">Fee</span>
                <span className="item-value">{formatSmidge(data.txResult?.fee || 0)}</span>
              </li>
              <li className="item">
                <span className="item-name">Block</span>
                <span className="item-value">
                  { data.txResult?.layer ? (
                    <Link to={`/${LAYERS}/${data.txResult.layer}/blocks`}>{base64ToHex(data.txResult.block)}</Link>
                  ) : ('-')}
                </span>
              </li>
              {data.tx.type === 'TRANSACTION_TYPE_DRAIN_VAULT' && (
                <li className="item">
                  <span className="item-name">Vault</span>
                  <span className="item-value">
                    <Link to={`/${ACCOUNTS}/${data.tx.contents.drainVault.vault}`}>{data.tx.contents.drainVault.vault}</Link>
                    <CopyButton value={data.tx.contents.drainVault.vault} />
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
