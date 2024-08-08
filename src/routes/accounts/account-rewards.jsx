import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import longFormHash from '../../helper/longFormHash';
import { ACCOUNTS, REWARDS } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import Table from '../../components/Table';

const AccountRewards = () => {
  const params = useParams();
  const [total, setTotal] = useState(0);

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
          startTime={0}
        />
      </div>
      <Table name={ACCOUNTS} subPage={REWARDS} id={params.id} setTotal={setTotal} />
    </>
  );
};

export default observer(AccountRewards);
