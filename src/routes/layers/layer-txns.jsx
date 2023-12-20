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
  const [info, setInfo] = useState({
    txs: 0,
    txsamount: 0,
  });

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${LAYERS}/${params.id}/${TXNS}`).then((result) => {
      setData(result);
    });
  }, [store.network.value]);

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${LAYERS}/${params.id}`).then((result) => {
      if (result.data && result.data[0]) {
        setInfo({
          txs: result.data[0].txs,
          txsamount: result.data[0].txsamount,
        });
      }
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
            number={info.txs}
            caption="txns"
            coinCaption="Transactions Value"
            coins={formatSmidge(info.txsamount)}
          />
        </div>
        <Table name={LAYERS} subPage={TXNS} id={params.id} results={data} />
      </>
    ) : <Loader size={100} />
  );
};

export default observer(LayerTxns);
