import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EPOCHS, SMESHER } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';
import { fetchAPI } from '../../api/fetchAPI';
import Loader from '../../components/Loader';

const EpochSmeshers = () => {
  const store = useStore();
  const { epoch, network } = store.networkInfo;
  const params = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    if (store.network.value === null) return;
    fetchAPI(`${store.network.value}${EPOCHS}/${params.id}/${SMESHER}`).then((result) => {
      setData(result);
    });
  }, [store.network.value]);

  return (
    data ? (
      <>
        <div className="page-wrap">
          <TitleBlock
            title={`Epoch ${params.id} - Participating Smeshers`}
            color={getColorByPageName(EPOCHS)}
            desc="Smeshers submitting at least one honest block"
          />
          <RightSideBlock
            number={epoch && epoch.stats.cumulative.smeshers}
            startTime={network && network.genesis}
            unit="smeshers in the epoch"
            color={getColorByPageName(EPOCHS)}
          />
        </div>
        <Table name={EPOCHS} subPage={SMESHER} id={params.id} />
      </>
    ) : <Loader size={100} />
  );
};

export default observer(EpochSmeshers);
