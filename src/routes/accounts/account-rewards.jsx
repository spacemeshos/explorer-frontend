import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import longFormHash from '../../helper/longFormHash';
import { ACCOUNTS, REWARDS } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import Table from '../../components/Table';
import { useStore } from '../../store';

const AccountRewards = () => {
  const store = useStore();
  const params = useParams();
  const [total, setTotal] = useState(0);
  const [rewardsSum, setRewardsSum] = useState(null);
  const [error, setError] = useState();
  if (error) throw error;

  useEffect(() => {
    if (store.netInfo === null) return;
    fetch(`${store.statsApiUrl}/account/${params.id}`).then(async (res) => {
      if (res.ok) {
        const r = await res.json();
        setTotal(r.rewards_count);
        setRewardsSum(r.rewards_sum);
      } else {
        throw new Error();
      }
    }).catch(() => {
      const err = new Error('Account not found');
      err.id = params.id;
      setError(err);
    });
  }, [store.netInfo, params.id]);

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title={`account ${longFormHash(params.id)} - rewards`}
          color={getColorByPageName(ACCOUNTS)}
          desc={`Rewards contained within account ${longFormHash(params.id)}`}
        />
        <RightSideBlock
          color={getColorByPageName(ACCOUNTS)}
          number={total}
          unit="rewards"
          coins={rewardsSum}
          coinCaption="Total sum"
        />
      </div>
      <Table name={ACCOUNTS} subPage={REWARDS} id={params.id} setTotal={setTotal} />
    </>
  );
};

export default observer(AccountRewards);
