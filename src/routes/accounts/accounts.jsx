import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { ACCOUNTS } from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';

const Accounts = () => {
  const store = useStore();
  const [recentActivity, setRecentActivity] = useState(0);

  useEffect(() => {
    if (store.netInfo === null) return;
    store.api.account.accountServiceList({
      limit: 1,
    }).then((res) => {
      if (res.accounts.length === 1) {
        setRecentActivity(store.layerTimestamp(res.accounts[0].current.layer));
      }
    }).catch((err) => {
      if (err.status === 429) {
        store.showThrottlePopup();
      }
    });
  }, [store.netInfo]);

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title="All Accounts"
          color={getColorByPageName(ACCOUNTS)}
          desc="Accounts across the entire mesh"
        />
        <RightSideBlock
          color={getColorByPageName(ACCOUNTS)}
          number={store.overview?.accounts_count || 0}
          unit="accounts"
          startTime={recentActivity || 0}
          label="Recent activity"
        />
      </div>
      <Table name={ACCOUNTS} />
    </>
  );
};

export default observer(Accounts);
