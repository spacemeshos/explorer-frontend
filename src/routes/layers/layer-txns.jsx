import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LAYERS, TXNS } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { useStore } from '../../store';
import Table from '../../components/Table';
import { fetchAPI } from '../../api/fetchAPI';
import RightCountBlock from '../../components/CountBlock/RightCountBlock';
import { formatSmidge } from '../../helper/converter';
import Loader from '../../components/Loader';

const LayerTxns = () => {
  const store = useStore();
  const params = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${LAYERS}/${params.id}`).then((result) => {
      setData(result);
    });
  }, [store.network.value]);

  return (
    data ? (
      <>
        <div className="page-wrap">
          <TitleBlock
            title={`Layer ${params.id} - Txns`}
            color={getColorByPageName(LAYERS)}
            desc=""
          />
          <RightCountBlock
            color={getColorByPageName(LAYERS)}
            number={data.txs}
            caption="txns"
            coinCaption="Txns Value"
            coins={formatSmidge(data.txsamount)}
          />
        </div>
        <Table name={LAYERS} subPage={TXNS} id={params.id} results={data} />
      </>
    ) : <Loader size={100} />
  );
};

export default observer(LayerTxns);
