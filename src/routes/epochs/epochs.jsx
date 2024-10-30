import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { EPOCHS } from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';
import Loader from '../../components/Loader';

const Epochs = () => {
  const store = useStore();

  const [isFetching, setIsFetching] = useState(true);
  const [genesisTime, setGenesisTime] = useState(0);
  const [epochs, setEpochs] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    setEpochs([]);
    if (store.netInfo === null) return;
    setGenesisTime(new Date(store.netInfo.genesisTime || 0).getTime() / 1000);

    store.api.layer.layerServiceList({
      limit: 1,
      sort_order: 1,
    }).then((res) => {
      const epochNums = Math.floor(res.layers[0].number / store.netInfo.layersPerEpoch);
      for (let i = epochNums + 1; i >= 0; i--) {
        setEpochs((prev) => [...prev, {
          number: i,
          layers: store.netInfo.layersPerEpoch,
          startLayer: i * store.netInfo.layersPerEpoch,
          endLayer: i * store.netInfo.layersPerEpoch + store.netInfo.layersPerEpoch - 1,
        }]);
      }
      setIsFetching(false);
    }).catch((err) => {
      if (err.status === 429) {
        store.showThrottlePopup();
      }
    });
  }, [store.network, store.netInfo]);

  if (isFetching) {
    return <Loader size={100} />;
  }

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title="Epochs"
          color={getColorByPageName(EPOCHS)}
          desc="Epochs across the entire mesh"
        />
        <RightSideBlock
          color={getColorByPageName(EPOCHS)}
          number={epochs[0]?.number || 0}
          unit="Epochs since genesis"
          startTime={genesisTime}
          label="Genesis Time"
        />
      </div>
      <Table name={EPOCHS} epochs={epochs} />
    </>
  );
};

export default observer(Epochs);
