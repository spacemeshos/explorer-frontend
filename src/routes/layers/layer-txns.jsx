import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LAYERS, TXNS } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { useStore } from '../../store';
import Table from '../../components/Table';
import RightCountBlock from '../../components/CountBlock/RightCountBlock';
import { formatSmidge } from '../../helper/converter';
import Loader from '../../components/Loader';

const LayerTxns = () => {
  const store = useStore();
  const params = useParams();

  const [stats, setStats] = useState({});
  const [error, setError] = useState();
  if (error) throw error;

  useEffect(() => {
    if (store.statsApiUrl === null) return;
    fetch(`${store.statsApiUrl}/layer/${params.id}`).then(async (res) => {
      if (res.ok) {
        const r = await res.json();
        setStats(r);
      } else {
        throw new Error();
      }
    }).catch(() => {
      const err = new Error('Layer not found');
      err.id = params.id;
      setError(err);
    });
  }, [store.statsApiUrl, params.id]);

  if (!stats) {
    return <Loader size={100} />;
  }

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title={`Layer ${params.id} - Txns`}
          color={getColorByPageName(LAYERS)}
          desc=""
        />
        <RightCountBlock
          color={getColorByPageName(LAYERS)}
          number={stats.transactions_count}
          caption="txns"
          coinCaption="Transactions Value"
          coins={formatSmidge(stats.transactions_sum)}
        />
      </div>
      <Table name={LAYERS} subPage={TXNS} id={params.id} />
    </>
  );
};

export default observer(LayerTxns);
