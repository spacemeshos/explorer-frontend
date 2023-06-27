import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import longFormHash from '../../helper/longFormHash';
import { REWARDS, SMESHER } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';
import { fetchAPI } from '../../api/fetchAPI';
import Loader from '../../components/Loader';

const SmesherRewards = () => {
  const store = useStore();
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${SMESHER}/${params.id}/${REWARDS}`).then((result) => {
      setData(result);
    });
  }, [store.network.value]);

  return (
    data ? (
      <>
        <div className="page-wrap">
          <TitleBlock
            title={`Smesher ${longFormHash(params.id)} - Details`}
            color={getColorByPageName(SMESHER)}
            desc="Smesher rewards"
          />
          <RightSideBlock
            color={getColorByPageName(SMESHER, store.theme)}
            number={data.pagination && data.pagination.totalCount}
            unit="total rewards"
            startTime={data.data && data.data.length > 0 ? data.data[0].timestamp : 0}
          />
        </div>
        <Table name={SMESHER} subPage={REWARDS} id={params.id} results={data} />
      </>
    ) : <Loader size={100} />
  );
};

export default observer(SmesherRewards);
