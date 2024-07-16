// @flow
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Spacemeshv2alpha1Account } from 'api';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';

import {
  ACCOUNTS, REWARDS, TXNS,
} from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Loader from '../../components/Loader';
import { parseSmidge } from '../../helper/converter';
import CopyButton from '../../components/CopyButton';
import Table from '../../components/Table';

const Account = () => {
  const store = useStore();
  const name = ACCOUNTS;
  const params = useParams();

  const [data, setData] = useState <Spacemeshv2alpha1Account>();
  const [totalRewards, setTotalRewards] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [smidge, setSmidge] = useState({ value: 0, unit: 'SMH' });

  useEffect(() => {
    store.api.account.accountServiceList({
      addresses: [params.id],
      limit: 1,
    }).then((res) => {
      setData(res.accounts[0]);
      setSmidge(parseSmidge(res.accounts[0].current.balance));
    });
  }, [params.id]);

  useEffect(() => {
    store.api.reward.rewardServiceList({
      coinbase: params.id,
      limit: 1,
    }).then((res) => {
      setTotalRewards(res.total);
    });
  }, [params.id]);

  useEffect(() => {
    store.api.transaction.transactionServiceList({
      address: params.id,
      limit: 1,
    }).then((res) => {
      setTotalTransactions(res.total);
    });
  }, [params.id]);

  return (
    <>
      {data ? (
        <>
          <div className="page-wrap">
            <TitleBlock
              title="Account"
              color={getColorByPageName(name)}
              desc="coin account"
            />
            <RightSideBlock
              color={getColorByPageName(name)}
              number={smidge && smidge.value}
              unit={`${smidge && smidge.unit} Balance`}
              startTime={0}
            />
          </div>
          <div className="details" style={{ marginBottom: '20px' }}>
            <ul className="details-list">
              <li className="item">
                <span className="item-name">Address</span>
                <span className="item-value">
                  {data.address}
                  <CopyButton value={data.address} />
                </span>
              </li>
              <li className="item">
                <span className="item-name">Counter</span>
                <span className="item-value">{data.current.counter}</span>
              </li>
              <li className="item">
                <span className="item-name">Rewards</span>
                <span className="item-value">
                  <Link to={`/${ACCOUNTS}/${data.address}/${REWARDS}`}>
                    {totalRewards}
                  </Link>
                </span>
              </li>
              <li className="item">
                <span className="item-name">Transactions</span>
                <span className="item-value">
                  <Link to={`/${ACCOUNTS}/${data.address}/${TXNS}`}>
                    {totalTransactions}
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="details">
            <TitleBlock
              title="Transactions"
              color={getColorByPageName(name)}
              desc="account transactions"
            />
            <Table name={ACCOUNTS} subPage={TXNS} id={params.id} key={params.id} />
          </div>
        </>
      ) : (<Loader size={100} />)}
    </>
  );
};

export default observer(Account);
