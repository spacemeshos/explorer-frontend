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
  const [error, setError] = useState();
  if (error) throw error;

  useEffect(() => {
    if (store.statsApiUrl === null) return;
    fetch(`${store.statsApiUrl}/smesher/${params.id}`).then(async (res) => {
      if (res.status === 429) {
        store.showThrottlePopup();
        throw new Error('Too Many Requests');
      }
      if (res.ok) {
        const r = await res.json();
        setData(r);
      } else {
        throw new Error();
      }
    }).catch((err) => {
      if (err.message === 'Too Many Requests') return;
      const err2 = new Error('Smesher not found');
      err2.id = params.id;
      setError(err2);
    });
  }, [store.statsApiUrl, params.id]);

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
          coins={data.rewards_sum}
          coinCaption="Total sum"
        />
      </div>
      <Table name={SMESHER} subPage={REWARDS} id={params.id} />
    </>
  );
};

export default observer(SmesherRewards);
