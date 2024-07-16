import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EPOCHS, REWARDS } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { useStore } from '../../store';
import Table from '../../components/Table';
import { AmountBlock } from '../../components/CountBlock';

const EpochRewards = () => {
  const store = useStore();
  const params = useParams();

  const [stats, setStats] = useState({});
  const [start, setStart] = useState(0);

  useEffect(() => {
    if (store.netInfo === null) return;
    fetch(`${store.statsApiUrl}/stats/epoch/${params.id}`).then((res) => res.json()).then((res) => {
      setStats(res);
    });

    const epochStart = params.id * store.netInfo.layersPerEpoch;
    setStart(store.layerTimestamp(epochStart));
  }, [store.netInfo]);

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title={`Epoch ${params.id} Rewards`}
          color={getColorByPageName(EPOCHS)}
          desc="Rewards awarded to Smeshers"
        />
        <AmountBlock
          number={stats.rewards_count || 0}
          startTime={start}
          unit="rewards"
          color={getColorByPageName(EPOCHS)}
        />
      </div>
      <Table name={EPOCHS} subPage={REWARDS} id={params.id} />
    </>
  );
};

export default observer(EpochRewards);
