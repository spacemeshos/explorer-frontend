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
import Loader from '../../components/Loader';

const SmesherRewards = () => {
  const store = useStore();
  const params = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${store.statsApiUrl}/smesher/${params.id}`).then((res) => res.json()).then((res) => {
      setData(res);
    });
  }, [params.id]);

  if (!data) {
    return <Loader size={100} />;
  }

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title={`Smesher ${longFormHash(params.id)} - Details`}
          color={getColorByPageName(SMESHER)}
          desc="Smesher rewards"
        />
        <RightSideBlock
          color={getColorByPageName(SMESHER, store.theme)}
          number={data.rewards_count}
          unit="total rewards"
          startTime={0}
        />
      </div>
      <Table name={SMESHER} subPage={REWARDS} id={params.id} />
    </>
  );
};

export default observer(SmesherRewards);
