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
import { formatSmidge, parseSmidge } from '../../helper/converter';
import CopyButton from '../../components/CopyButton';
import Table from '../../components/Table';

const Account = () => {
  const store = useStore();
  const name = ACCOUNTS;
  const params = useParams();

  const [data, setData] = useState <Spacemeshv2alpha1Account>();
  const [totalRewards, setTotalRewards] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [rewardsSum, setRewardsSum] = useState(0);
  const [smidge, setSmidge] = useState({ value: 0, unit: 'SMH' });
  const [error, setError] = useState();
  if (error) throw error;

  useEffect(() => {
    store.api.account.accountServiceList({
      addresses: [params.id],
      limit: 1,
    }).then((res) => {
      setData(res.accounts[0]);
      setSmidge(parseSmidge(res.accounts[0].current.balance));
    }).catch(() => {
      const err = new Error('Account not found');
      err.id = params.id;
      setError(err);
    });
  }, [params.id]);

  useEffect(() => {
    fetch(`${store.statsApiUrl}/account/${params.id}`).then(async (res) => {
      if (res.ok) {
        const r = await res.json();
        setRewardsSum(formatSmidge(r.rewards_sum));
        setTotalRewards(r.rewards_count);
        setTotalTransactions(r.transactions_count);
      } else {
        throw new Error();
      }
    }).catch(() => {
      const err = new Error('Account not found');
      err.id = params.id;
      setError(err);
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
                    {' '}
                    (
                    {rewardsSum}
                    )
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
