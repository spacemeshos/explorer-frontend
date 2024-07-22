import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EPOCHS, TXNS } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';

const EpochTxns = () => {
  const store = useStore();
  const params = useParams();

  const [stats, setStats] = useState({});
  const [start, setStart] = useState(0);

  useEffect(() => {
    if (store.netInfo === null) return;
    fetch(`${store.statsApiUrl}/epoch/${params.id}`).then((res) => res.json()).then((res) => {
      setStats(res);
    });

    const epochStart = params.id * store.netInfo.layersPerEpoch;
    setStart(store.layerTimestamp(epochStart));
  }, [store.netInfo]);

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title={`Epoch ${params.id} - Txns`}
          color={getColorByPageName(EPOCHS)}
          desc={`Txns contained within Epoch ${params.id}`}
        />
        <RightSideBlock
          number={stats.transactions_count}
          unit="txns"
          startTime={start}
          color={getColorByPageName(EPOCHS)}
        />
      </div>
      <Table name={EPOCHS} subPage={TXNS} id={params.id} />
    </>
  );
};

export default observer(EpochTxns);
