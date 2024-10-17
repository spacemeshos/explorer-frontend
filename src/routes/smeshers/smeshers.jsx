import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { SMESHER } from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';

const Smeshers = () => {
  const store = useStore();

  const [genesisTime, setGenesisTime] = useState(0);

  useEffect(() => {
    if (store.netInfo === null) return;
    setGenesisTime(new Date(store.netInfo.genesisTime || 0).getTime() / 1000);
  }, [store.netInfo]);

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title="Smeshers"
          color={getColorByPageName(SMESHER)}
          desc=""
        />
        <RightSideBlock
          color={getColorByPageName(SMESHER, store.theme)}
          number={store.overview.smeshers_count}
          unit="TOTAL SMESHERS"
          startTime={genesisTime}
        />
      </div>
      <Table name={SMESHER} />
    </>
  );
};

export default observer(Smeshers);
