import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ATXS, LAYERS } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';
import { fetchAPI } from '../../api/fetchAPI';
import Loader from '../../components/Loader';

const LayerAtxs = () => {
  const store = useStore();
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${LAYERS}/${params.id}/${ATXS}`).then((result) => {
      setData(result);
    });
  }, [store.network.value]);

  return (
    data ? (
      <>
        <div className="page-wrap">
          <TitleBlock
            title={`Layer ${params.id} - Activations`}
            color={getColorByPageName(LAYERS)}
            desc={`Txns within layer ${params.id}`}
          />
          <RightSideBlock
            color={getColorByPageName(LAYERS)}
            number={data.pagination && data.pagination.totalCount}
            unit="atxs"
            startTime={data.pagination && data.data[0].timestamp}
          />
        </div>
        <Table name={LAYERS} subPage={ATXS} id={params.id} results={data} />
      </>
    ) : <Loader size={100} />
  );
};

export default observer(LayerAtxs);
