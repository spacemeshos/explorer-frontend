import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import InfoBlock from '../components/InfoBlock';
import TitleBlock from '../components/TitleBlock';
import { getColorByPageName } from '../helper/getColorByPageName';
import { OVERVIEW, TXNS } from '../config/constants';
import Table from '../components/Table';
import { useStore } from '../store';
import { calculateEpoch } from '../helper/converter';
import RightCountBlock from '../components/CountBlock/RightCountBlock';

// TODO: cumulative stats
const Overview = () => {
  const store = useStore();

  const [layer, setLayer] = useState(0);
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const [epochInfo, setEpochInfo] = useState({
    transactions_count: 0,
    activations_count: 0,
    rewards_count: 0,
    rewards_sum: 0,
    num_units: 0,
    smeshers_count: 0,
  });

  useEffect(() => {
    if (store.netInfo === null) return;
    const fetchInfo = async () => {
      const layers = await store.api.layer.layerServiceList({
        limit: 1,
        sort_order: 1,
      });
      setLayer(layers.layers[0].number);
      const epoch = calculateEpoch(layers.layers[0].number, store.netInfo.layersPerEpoch);
      setCurrentEpoch(epoch);

      const res = await fetch(`${store.statsApiUrl}/epoch/${epoch}`);
      const data = await res.json();
      setEpochInfo(data);
    };

    fetchInfo();
  }, [store.netInfo]);

  return (
    <>
      <InfoBlock
        accounts={store.overview?.accounts_count}
        rewards={epochInfo.rewards_sum}
        security={epochInfo.num_units * store.postUnitSize}
        epoch={currentEpoch}
        layer={layer}
        smeshers={epochInfo.smeshers_count}
      />
      <div className="page-wrap">
        <TitleBlock
          title="Txns"
          color={getColorByPageName(TXNS)}
          desc="Recent transactions"
        />
        <RightCountBlock
          color={getColorByPageName(TXNS)}
          number={store.overview?.transactions_count || 0}
          caption="transactions since genesis"
        />
      </div>
      <Table name={OVERVIEW} />
    </>
  );
};

export default observer(Overview);
