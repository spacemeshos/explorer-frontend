import { observer } from 'mobx-react';
import TitleBlock from '../components/TitleBlock';
import { getColorByPageName } from '../helper/getColorByPageName';
import { TXNS } from '../config/constants';
import RightSideBlock from '../components/CountBlock/RightSideBlock';
import { useStore } from '../store';
import Table from '../components/Table';

const Txns = () => {
  const store = useStore();
  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title="transactions"
          color={getColorByPageName(TXNS)}
          desc="txns across the entire mesh"
        />
        <RightSideBlock
          color={getColorByPageName(TXNS)}
          number={store.overview.transactions_count || 0}
          unit="txns since genesis"
          disableRightColumnData
        />
      </div>
      <Table name={TXNS} />
    </>
  );
};

export default observer(Txns);
