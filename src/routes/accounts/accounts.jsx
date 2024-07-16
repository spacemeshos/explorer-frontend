import { observer } from 'mobx-react';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { ACCOUNTS } from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';

const Accounts = () => {
  const store = useStore();

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
          number={store.overview.accounts_count}
          unit="accounts"
          startTime={0}
          label="Recent activity"
        />
      </div>
      <Table name={ACCOUNTS} />
    </>
  );
};

export default observer(Accounts);
