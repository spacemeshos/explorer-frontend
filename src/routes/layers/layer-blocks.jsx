import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BLOCKS, LAYERS } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';
import { fetchAPI } from '../../api/fetchAPI';
import Loader from '../../components/Loader';

const LayerBlocks = () => {
  const store = useStore();
  const { layer } = store.networkInfo;
  const params = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${LAYERS}/${params.id}/${BLOCKS}`).then((result) => {
      setData(result);
    });
  }, [store.network.value]);

  return (
    data ? (
      <>
        <div className="page-wrap">
          <TitleBlock
            title={`Layer ${params.id} blocks`}
            color={getColorByPageName(BLOCKS)}
          />
          <RightSideBlock
            number={data.pagination && data.pagination.totalCount}
            startTime={layer && layer.start}
            unit="blocks"
            color={getColorByPageName(BLOCKS)}
          />
        </div>
        <Table name={LAYERS} subPage={BLOCKS} id={params.id} results={data} />
      </>
    ) : <Loader size={100} />
  );
};

export default observer(LayerBlocks);
