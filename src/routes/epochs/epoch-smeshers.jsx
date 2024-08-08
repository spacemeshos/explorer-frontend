import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EPOCHS, SMESHER } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';

const EpochSmeshers = () => {
  const store = useStore();
  const params = useParams();

  const [stats, setStats] = useState({});
  const [start, setStart] = useState(0);

  useEffect(() => {
    if (store.netInfo === null) return;
    fetch(`${store.statsApiUrl}/epoch/${params.id}`).then((res) => res.json()).then((res) => {
      setStats(res);
      const epochStart = params.id * store.netInfo.layersPerEpoch;
      setStart(epochStart);
    });
  }, [store.netInfo]);

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title={`Epoch ${params.id} - Participating Smeshers`}
          color={getColorByPageName(EPOCHS)}
          desc="Smeshers submitting at least one honest block"
        />
        <RightSideBlock
          number={stats && stats.smeshers_count}
          startTime={store.layerTimestamp(start)}
          unit="smeshers in the epoch"
          color={getColorByPageName(EPOCHS)}
        />
      </div>
      <Table name={EPOCHS} subPage={SMESHER} id={params.id} />
    </>
  );
};

export default observer(EpochSmeshers);
