import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import longFormHash from '../../helper/longFormHash';
import { ACCOUNTS, REWARDS } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';
import { fetchAPI } from '../../api/fetchAPI';
import Loader from '../../components/Loader';

const AccountRewards = () => {
  const store = useStore();
  const params = useParams();
  const { network } = store.networkInfo;

  const [data, setData] = useState();

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${ACCOUNTS}/${params.id}/${REWARDS}`).then((result) => {
      setData(result);
    });
  }, [store.network.value]);

  return (
    data ? (
      <>
        <div className="page-wrap">
          <TitleBlock
            title={`account ${longFormHash(params.id)} - rewards`}
            color={getColorByPageName(ACCOUNTS)}
            desc={`Rewards contained within account ${longFormHash(params.id)}`}
          />
          <RightSideBlock
            color={getColorByPageName(ACCOUNTS)}
            number={data.pagination && data.pagination.totalCount}
            unit="rewards"
            startTime={network?.genesis}
          />
        </div>
        <Table name={ACCOUNTS} subPage={REWARDS} id={params.id} results={data} />
      </>
    ) : <Loader size={100} />
  );
};

export default observer(AccountRewards);
